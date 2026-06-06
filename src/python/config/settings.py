#!/usr/bin/env python3
"""
Settings management for Research Browser.
"""

import json
import os
from pathlib import Path


class SettingsManager:
    """
    Manages application settings and configuration.
    """

    def __init__(self, config_dir="config"):
        """
        Initialize settings manager.

        Args:
            config_dir: Path to configuration directory
        """
        self.config_dir = Path(config_dir)
        self.settings = {}

    def load(self):
        """
        Load settings from configuration files.
        """
        settings_file = self.config_dir / "settings.json"

        if settings_file.exists():
            with open(settings_file, "r") as f:
                self.settings = json.load(f)
        else:
            self.settings = self._default_settings()

    def _default_settings(self):
        """
        Return default settings.

        Returns:
            dict: Default settings
        """
        return {
            "theme": "light",
            "window_width": 1200,
            "window_height": 800,
        }

    def get(self, key, default=None):
        """
        Get a setting value.

        Args:
            key: Setting key
            default: Default value if key not found

        Returns:
            Setting value or default
        """
        return self.settings.get(key, default)

    def set(self, key, value):
        """
        Set a setting value.

        Args:
            key: Setting key
            value: Setting value
        """
        self.settings[key] = value

    def save(self):
        """
        Save settings to configuration file.
        """
        settings_file = self.config_dir / "settings.json"
        settings_file.parent.mkdir(parents=True, exist_ok=True)

        with open(settings_file, "w") as f:
            json.dump(self.settings, f, indent=2)
