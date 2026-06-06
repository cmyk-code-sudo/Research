/**
 * File Manager
 * 
 * Handles multi-file operations for Research Browser.
 */

import fs from 'fs';
import path from 'path';

export class FileManager {
  /**
   * Read file contents
   */
  public readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error);
      throw error;
    }
  }

  /**
   * Write file contents
   */
  public writeFile(filePath: string, content: string): void {
    try {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(filePath, content, 'utf-8');
    } catch (error) {
      console.error(`Error writing file ${filePath}:`, error);
      throw error;
    }
  }

  /**
   * Delete file
   */
  public deleteFile(filePath: string): void {
    try {
      fs.unlinkSync(filePath);
    } catch (error) {
      console.error(`Error deleting file ${filePath}:`, error);
      throw error;
    }
  }

  /**
   * List files in directory
   */
  public listFiles(dirPath: string): string[] {
    try {
      return fs.readdirSync(dirPath);
    } catch (error) {
      console.error(`Error listing files in ${dirPath}:`, error);
      return [];
    }
  }

  /**
   * Check if file exists
   */
  public fileExists(filePath: string): boolean {
    return fs.existsSync(filePath);
  }
}
