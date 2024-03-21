'use strict'
/**
 * New Relic agent configuration.
 *
 * See lib/config/default.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['My NodeJS Application-A'],
  /**
   * Your New Relic license key.
   */
  license_key: '2fd5a53bd9d******NRAL',

  /**
   * Security Configurations
   */

  security: {
    /**
     * To completely disable security, set agent.enabled flag to false. If the flag is set to false, the security module is not loaded. This property is read only once at application start.
     */
    agent: {
      enabled: true
    },

    /**
     * enables/disables security agent functions and generation of events.
     */
    enabled: true,
    /**
     *  NR security provides two modes IAST and RASP. Default is IAST
     */
    mode: 'IAST',

    /**
     * New Relic's SaaS connection URLs
     */
    validator_service_url: 'wss://csec.nr-data.net',

    /**
     * Following category of security events can be disabled from generating.
     */
    detection: {
      rci: {
        enabled: true
      },
      rxss: {
        enabled: true
      },
      deserialization: {
        enabled: true
      }
    }
  },
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  },
  /**
   * When true, all request headers except for those listed in attributes.exclude
   * will be captured for all traces, unless otherwise specified in a destination's
   * attributes include/exclude lists.
   */
  allow_all_headers: true,
  attributes: {
    /**
     * Prefix of attributes to exclude from all destinations. Allows * as wildcard
     * at end.
     *
     * NOTE: If excluding headers, they must be in camelCase form to be filtered.
     *
     * @name NEW_RELIC_ATTRIBUTES_EXCLUDE
     */
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*'
    ]
  }
}
