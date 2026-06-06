/*
 * Research Browser - C Parser Header
 * 
 * Core parsing engine for JSON, HTML, and other data formats.
 */

#ifndef RESEARCH_PARSER_H
#define RESEARCH_PARSER_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* Parser error codes */
#define PARSER_OK 0
#define PARSER_ERROR_INVALID_JSON 1
#define PARSER_ERROR_INVALID_HTML 2
#define PARSER_ERROR_MEMORY 3
#define PARSER_ERROR_INVALID_INPUT 4

/* JSON Parser */
typedef struct {
    char *key;
    char *value;
} json_pair_t;

typedef struct {
    json_pair_t *pairs;
    int count;
} json_object_t;

/* Function declarations */
int parse_json(const char *input, json_object_t *output);
void free_json_object(json_object_t *obj);

/* HTML Parser */
int parse_html(const char *input, char **output);
void free_html_output(char *output);

/* Utility functions */
char *trim_string(const char *str);
int validate_url(const char *url);

#endif /* RESEARCH_PARSER_H */
