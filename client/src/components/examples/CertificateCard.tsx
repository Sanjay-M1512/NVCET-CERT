import CertificateCard from '../CertificateCard';

export default function CertificateCardExample() {
  const mockData = {
    apprenticeName: "Rajesh Kumar Sharma",
    fatherName: "Suresh Kumar Sharma",
    motherName: "Sunita Sharma",
    tradeName: "Electrician",
    establishmentName: "Bharat Heavy Electricals Limited",
    establishmentAddress: "Industrial Area, Sector 24, New Delhi - 110025",
    trainingDuration: "3 Years (2021-2024)"
  };

  return <CertificateCard data={mockData} />;
}
