/**
 * Sarah Abowitz, 6/13/19
 * A typescript file to keep constant strings for tooltip hover text.
 */
export const tooltips = [
    {
        name: 'Enforce Invalid ASN Only',
        description:
        'Block route announcements only when the originating AS is in conflict with a Route Origin Authorization (ROA). Announcements' +
        ' containing prefixes exceeding the maximum length authorized by a ROA are allowed.'
    },
    {
        name: 'Enforce Invalid Length Only',
        description:
        'Block route announcements only when the length of the announced prefix exceeds the maximum length authorized by a ROA.' +
        ' Announcements originating from an AS that is not authorized to do so are allowed.'

    },
    {
        name: 'Pass If No Alternative Route',
        description:
        '< placeholder text until I can describe this >'
    },
    {
      name: 'ROV',
      description:
      'Block route announcements using standard Resource Certification (RPKI) Route Origin Validation (ROV) as defined in RFC 6811.'
    },
    {
        name: 'Simple Time Heuristic',
        description:
        'If a route announcement is older than a specified time interval, then it is whitelisted regardless of its ROV validity.' +
        ' Since origin hijacks tend to be short-lived, a long-lived, invalid announcement is more likely to be a misconfiguration ' +
        'than an attack.'
    }
  ];