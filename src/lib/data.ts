import fs from 'fs';
import path from 'path';
import { Restaurant } from './types';

const DATA_DIR = path.join(process.cwd(), '..', 'restaurants_supabase_norm', 'restaurants_supabase_norm');

export function getAllRestaurants(): Restaurant[] {
    try {
        // Check if the directory exists (it might not in production or if path is wrong)
        if (!fs.existsSync(DATA_DIR)) {
            console.warn(`Data directory not found at: ${DATA_DIR}`);
            return [];
        }

        const restaurantFolders = fs.readdirSync(DATA_DIR, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        const restaurants: Restaurant[] = [];

        for (const folder of restaurantFolders) {
            const folderPath = path.join(DATA_DIR, folder);
            // Look for a JSON file ending in _profile.json
            const files = fs.readdirSync(folderPath);
            const profileFile = files.find(file => file.endsWith('_profile.json'));

            if (profileFile) {
                const filePath = path.join(folderPath, profileFile);
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                try {
                    const data = JSON.parse(fileContent) as Restaurant;
                    restaurants.push(data);
                } catch (e) {
                    console.error(`Error parsing JSON for ${folder}:`, e);
                }
            }
        }

        return restaurants;
    } catch (error) {
        console.error("Failed to load restaurants:", error);
        return [];
    }
}

export function getRestaurantBySlug(slug: string): Restaurant | undefined {
    const all = getAllRestaurants();
    // Simple slugification for matching (this needs to be robust)
    return all.find(r => createSlug(r.name) === slug);
}

export function createSlug(name: string): string {
    return name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}
