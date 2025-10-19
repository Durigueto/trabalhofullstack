import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  productId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.isEditMode = true;
      this.productService.getProduct(this.productId).subscribe(product => {
        this.productForm.patchValue(product);
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = {
        ...this.productForm.value,
        price: Number(this.productForm.value.price)
      };
      console.log('Dados do formulário:', product);

      if (this.isEditMode && this.productId) {
        console.log('Atualizando produto existente...');
        this.productService.updateProduct(this.productId, product).subscribe({
          next: (response) => {
            console.log('Produto atualizado com sucesso:', response);
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Erro ao atualizar produto:', error);
            if (error.error) {
              console.error('Detalhes do erro:', error.error);
            }
          }
        });
      } else {
        console.log('Criando novo produto...');
        this.productService.createProduct(product).subscribe({
          next: (response) => {
            console.log('Produto criado com sucesso:', response);
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Erro ao criar produto:', error);
            if (error.error) {
              console.error('Detalhes do erro:', error.error);
            }
            if (error.status === 0) {
              console.error('Erro de conexão com o servidor. Verifique se o backend está rodando.');
            }
          }
        });
      }
    } else {
      console.log('Formulário inválido:', this.productForm.errors);
      console.log('Valores do formulário:', this.productForm.value);
      console.log('Erros do formulário:', this.productForm.errors);
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
