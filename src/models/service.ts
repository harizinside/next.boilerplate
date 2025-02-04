enum ICategorys {
  Doctor = "doctor",
  Laboratorium = "laboratorium",
  PemeriksaanPenunjang = "pemeriksaanPenunjang",
  RheinMobile = "rheinMobile",
  Vaksin = "vaksin",
  Intravena = "intravena",
  MedicalChekup = "medicalChekup",
}

export interface ServiceProps {
  name: string;
  role: string;
  imageUrl: string;
  category: ICategorys;
  createdAt: Date;
  updateAt: Date;
}
