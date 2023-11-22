export interface Category {
  id: string;
  name: string;
}

export interface alumno {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}

export interface CreateAlumnoDTO extends Omit<alumno, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateAlumnoDTO extends Partial<CreateAlumnoDTO> {}
