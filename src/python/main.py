#!/usr/bin/env python3
"""
Research Browser - Main Application Entry Point

A multi-language browser application combining:
- Python UI (Tkinter/ttk)
- C parsing engine
- TypeScript backend
- Vue.js frontend
"""

import tkinter as tk
from tkinter import ttk
import sys
import os

# Add src directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from ui.window import MainWindow
from config.settings import SettingsManager


def main():
    """
    Main application entry point.
    Initializes Research Browser.
    """
    # Initialize settings
    settings = SettingsManager()
    settings.load()

    # Create root window
    root = tk.Tk()
    root.title("Research Browser")
    root.geometry("1200x800")

    # Initialize main window
    app = MainWindow(root, settings)
    app.setup()

    # Start event loop
    root.mainloop()


if __name__ == "__main__":
    main()
