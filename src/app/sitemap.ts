import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://partistic.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        // Kalau nanti lu ada halaman lain misal /gallery, tambahin di bawahnya
    ]
}