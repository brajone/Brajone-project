export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Brajone",
    "image": "https://brajone.com/logo.jpg",
    "@id": "https://brajone.com",
    "url": "https://brajone.com",
    "telephone": "+917900780022",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sunrakh Road",
      "addressLocality": "Vrindavan",
      "addressRegion": "UP",
      "postalCode": "281121",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.5706,
      "longitude": 77.6811
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://facebook.com/@brajone.com",
      "https://instagram.com/@brajone.in",
      "https://linkedin.com/company/brajone.in"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Vrindavan"
      },
      {
        "@type": "City",
        "name": "Mathura"
      },
      {
        "@type": "City",
        "name": "Govardhan"
      },
      {
        "@type": "City",
        "name": "Barsana"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
