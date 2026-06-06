/**
 * Configuration Manager
 * 
 * Handles loading, saving, and managing application configuration.
 */

import fs from 'fs';
import path from 'path';

interface SearchEngine {
  id: string;
  name: string;
  url: string;
  icon: string;
  enabled: boolean;
}

interface Bookmark {
  id: string;
  title: string;
  url: string;
  favicon: string;
  createdAt: string;
}

interface AppSettings {
  theme: string;
  language: string;
  homepage: string;
  [key: string]: any;
}

export class ConfigManager {
  private configDir: string;

  constructor(configDir: string = 'config') {
    this.configDir = configDir;
  }

  /**
   * Get search engines from configuration
   */
  public getSearchEngines(): SearchEngine[] {
    try {
      const filePath = path.join(this.configDir, 'searchEngines.json');
      const content = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(content);
      return data.searchEngines || [];
    } catch (error) {
      console.error('Error loading search engines:', error);
      return [];
    }
  }

  /**
   * Save search engines to configuration
   */
  public saveSearchEngines(engines: SearchEngine[]): void {
    try {
      const filePath = path.join(this.configDir, 'searchEngines.json');
      fs.writeFileSync(filePath, JSON.stringify({ searchEngines: engines }, null, 2));
    } catch (error) {
      console.error('Error saving search engines:', error);
    }
  }

  /**
   * Get bookmarks from configuration
   */
  public getBookmarks(): Bookmark[] {
    try {
      const filePath = path.join(this.configDir, 'bookmarks.json');
      const content = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(content);
      return data.bookmarks || [];
    } catch (error) {
      console.error('Error loading bookmarks:', error);
      return [];
    }
  }

  /**
   * Add a new bookmark
   */
  public addBookmark(bookmark: Omit<Bookmark, 'id' | 'createdAt'>): Bookmark {
    const bookmarks = this.getBookmarks();
    const newBookmark: Bookmark = {
      id: Date.now().toString(),
      ...bookmark,
      createdAt: new Date().toISOString(),
    };
    bookmarks.push(newBookmark);
    
    try {
      const filePath = path.join(this.configDir, 'bookmarks.json');
      fs.writeFileSync(filePath, JSON.stringify({ bookmarks }, null, 2));
    } catch (error) {
      console.error('Error saving bookmarks:', error);
    }
    
    return newBookmark;
  }

  /**
   * Get application settings
   */
  public getSettings(): AppSettings {
    try {
      const filePath = path.join(this.configDir, 'settings.json');
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.error('Error loading settings:', error);
      return { theme: 'light', language: 'en' };
    }
  }

  /**
   * Save application settings
   */
  public saveSettings(settings: AppSettings): void {
    try {
      const filePath = path.join(this.configDir, 'settings.json');
      fs.writeFileSync(filePath, JSON.stringify(settings, null, 2));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  }
}
