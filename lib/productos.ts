import fs from "fs";
import path from "path";

export interface Producto {
  id: string; // generated from alias
  nombre: string;
  descripcion: string;
  caracteristicas: string[];
  modoDeUso: string;
  imagen: string | null;
}

export function getProductos(): Producto[] {
  const filePath = path.join(process.cwd(), "public", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  let data: Producto[] = [];
  try {
    data = JSON.parse(fileContents);
  } catch (error) {
    console.error("Error parsing products.json", error);
  }

  return data;
}

export function getProductoBySlug(slug: string): Producto | undefined {
  const productos = getProductos();
  return productos.find((p) => p.id === slug);
}
