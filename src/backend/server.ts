/**
 * Research Browser - Backend Server
 * 
 * TypeScript/Node.js backend handling:
 * - Multi-file management
 * - Configuration management
 * - API endpoints for frontend
 */

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { ConfigManager } from './configManager';
import { FileManager } from './fileManager';

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize managers
const configManager = new ConfigManager();
const fileManager = new FileManager();

/**
 * Health check endpoint
 */
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Research Browser backend running' });
});

/**
 * Get search engines configuration
 */
app.get('/api/search-engines', (req: Request, res: Response) => {
  try {
    const engines = configManager.getSearchEngines();
    res.json(engines);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load search engines' });
  }
});

/**
 * Update search engine settings
 */
app.post('/api/search-engines', (req: Request, res: Response) => {
  try {
    configManager.saveSearchEngines(req.body);
    res.json({ message: 'Search engines updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update search engines' });
  }
});

/**
 * Get bookmarks
 */
app.get('/api/bookmarks', (req: Request, res: Response) => {
  try {
    const bookmarks = configManager.getBookmarks();
    res.json(bookmarks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load bookmarks' });
  }
});

/**
 * Add bookmark
 */
app.post('/api/bookmarks', (req: Request, res: Response) => {
  try {
    const bookmark = configManager.addBookmark(req.body);
    res.json(bookmark);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add bookmark' });
  }
});

/**
 * Get application settings
 */
app.get('/api/settings', (req: Request, res: Response) => {
  try {
    const settings = configManager.getSettings();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load settings' });
  }
});

/**
 * Update application settings
 */
app.put('/api/settings', (req: Request, res: Response) => {
  try {
    configManager.saveSettings(req.body);
    res.json({ message: 'Settings updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

/**
 * Fetch website content
 */
app.post('/api/fetch', (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    // TODO: Implement website fetching
    res.json({ url, content: '' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch URL' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Research Browser backend running on port ${PORT}`);
});
