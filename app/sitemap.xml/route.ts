
import { NextResponse } from 'next/server';

/**
 * Sitemap index referencing static and doctors sitemap.
 */
export async function GET() {
  const baseUrl = 'https://buscadoctormexico.mx';
  const staticSitemap = `${baseUrl}/sitemap.static.xml`;
  const doctorsSitemap = `${baseUrl}/sitemap.doctors.xml`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${staticSitemap}</loc>
  </sitemap>
  <sitemap>
    <loc>${doctorsSitemap}</loc>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}

