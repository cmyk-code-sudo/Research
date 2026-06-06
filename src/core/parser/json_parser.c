/*
 * Research Browser - JSON Parser
 * 
 * High-performance JSON parsing engine.
 */

#include "parser.h"
#include <ctype.h>

/**
 * Parse JSON string into json_object_t structure.
 * 
 * @param input JSON string to parse
 * @param output Pointer to json_object_t to store results
 * @return PARSER_OK on success, error code on failure
 */
int parse_json(const char *input, json_object_t *output) {
    if (!input || !output) {
        return PARSER_ERROR_INVALID_INPUT;
    }

    /* Initialize output */
    output->pairs = NULL;
    output->count = 0;

    /* Check for valid JSON object brackets */
    size_t len = strlen(input);
    if (len < 2 || input[0] != '{' || input[len - 1] != '}') {
        return PARSER_ERROR_INVALID_JSON;
    }

    /* TODO: Implement full JSON parsing logic */
    /* This is a skeleton implementation */

    return PARSER_OK;
}

/**
 * Free allocated json_object_t memory.
 * 
 * @param obj Pointer to json_object_t to free
 */
void free_json_object(json_object_t *obj) {
    if (!obj) return;

    if (obj->pairs) {
        for (int i = 0; i < obj->count; i++) {
            if (obj->pairs[i].key) free(obj->pairs[i].key);
            if (obj->pairs[i].value) free(obj->pairs[i].value);
        }
        free(obj->pairs);
    }
    obj->count = 0;
}

/**
 * Trim whitespace from string.
 * 
 * @param str Input string
 * @return Trimmed string (must be freed by caller)
 */
char *trim_string(const char *str) {
    if (!str) return NULL;

    /* Skip leading whitespace */
    while (isspace(*str)) str++;

    /* Find end of string */
    const char *end = str + strlen(str) - 1;
    while (end > str && isspace(*end)) end--;

    /* Allocate and copy trimmed string */
    size_t len = end - str + 1;
    char *result = (char *)malloc(len + 1);
    if (!result) return NULL;

    strncpy(result, str, len);
    result[len] = '\0';

    return result;
}
