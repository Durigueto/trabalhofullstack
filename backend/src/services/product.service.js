const supabase = require("../supabase");

class ProductService {
  async getAllProducts() {
    const { data, error } = await supabase.from("products").select("*");
    if (error) throw error;
    return data;
  }

  async getProductById(id) {
    const { data, error } = await supabase.from("products").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
  }

  async createProduct(product) {
    console.log('Tentando criar produto:', product);
    const { data, error } = await supabase.from("products").insert([product]).select();
    if (error) {
      console.error('Erro ao inserir no Supabase:', error);
      throw error;
    }
    console.log('Produto criado com sucesso:', data);
    return data[0];
  }

  async updateProduct(id, product) {
    const { data, error } = await supabase.from("products").update(product).eq("id", id).select();
    if (error) throw error;
    return data[0];
  }

  async deleteProduct(id) {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) throw error;
    return { message: "Product deleted successfully" };
  }
}

module.exports = new ProductService();
