
A `purl` string is an ASCII URL string composed of seven components.

Except as expressly stated otherwise in this section, each component:

- MAY be composed of any of the characters defined in the \"Permitted
  characters\" section
- MUST be encoded as defined in the \"Character encoding\" section

The rules for each component are:

- **scheme**:
  - The `scheme` is a constant with the value \"pkg\".
  - The `scheme` MUST be followed by an unencoded colon \':\'.
  - `purl` parsers MUST accept URLs where the `scheme` and colon \':\'
    are followed by one or more slash \'/\' characters, such as
    \'pkg://\', and MUST ignore and remove all such \'/\' characters.
- **type**:
  - The package `type` MUST be composed only of ASCII letters and
    numbers, period \'.\', plus \'+\', and dash \'-\'.
  - The `type` MUST start with an ASCII letter.
  - The `type` MUST NOT be percent-encoded.
  - The `type` is case insensitive. The canonical form is lowercase.
- **namespace**:
  - The optional `namespace` contains zero or more segments, separated
    by slash \'/\'
  - Leading and trailing slashes \'/\' are not significant and should be
    stripped in the canonical form. They are not part of the `namespace`
  - Each `namespace` segment must be a percent-encoded string
  - When percent-decoded, a segment:
    - must not contain a \'/\'
    - must not be empty
  - A URL host or Authority must NOT be used as a `namespace`. Use
    instead a `repository_url` qualifier. Note however that for some
    types, the `namespace` may look like a host.
- **name**:
  - The `name` is prefixed by a \'/\' separator when the `namespace` is
    not empty
  - This \'/\' is not part of the `name`
  - A `name` must be a percent-encoded string
- **version**:
  - The `version` is prefixed by a \'@\' separator when not empty
  - This \'@\' is not part of the `version`
  - A `version` must be a percent-encoded string
  - A `version` is a plain and opaque string. Some package `types` use
    versioning conventions such as SemVer for NPMs or NEVRA conventions
    for RPMS. A `type` may define a procedure to compare and sort
    versions, but there is no reliable and uniform way to do such
    comparison consistently.
- **qualifiers**:
  - The `qualifiers` component MUST be prefixed by an unencoded question
    mark \'?\' separator when not empty. This \'?\' separator is not
    part of the `qualifiers` component.
  - The `qualifiers` component is composed of one or more `key=value`
    pairs. Multiple `key=value` pairs MUST be separated by an unencoded
    ampersand \'&\'. This \'&\' separator is not part of an individual
    `qualifier`.
  - A `key` and `value` MUST be separated by the unencoded equal sign
    \'=\' character. This \'=\' separator is not part of the `key` or
    `value`.
  - A `value` MUST NOT be an empty string: a `key=value` pair with an
    empty `value` is the same as if no `key=value` pair exists for this
    `key`.
  - For each `key=value` pair:
    - The `key` MUST be composed only of lowercase ASCII letters and
      numbers, period \'.\', dash \'-\' and underscore \'\_\'.
    - A `key` MUST start with an ASCII letter.
    - A `key` MUST NOT be percent-encoded.
    - Each `key` MUST be unique among all the keys of the `qualifiers`
      component.
    - A `value` MAY be composed of any character and all characters MUST
      be encoded as described in the \"Character encoding\" section.
- **subpath**:
  - The `subpath` string is prefixed by a \'#\' separator when not empty
  - This \'#\' is not part of the `subpath`
  - The `subpath` contains zero or more segments, separated by slash
    \'/\'
  - Leading and trailing slashes \'/\' are not significant and SHOULD be
    stripped in the canonical form
  - Each `subpath` segment MUST be a percent-encoded string
  - When percent-decoded, a segment:
    - MUST NOT contain a \'/\'
    - MUST NOT be any of \'..\' or \'.\'
    - MUST NOT be empty
  - The `subpath` MUST be interpreted as relative to the root of the
    package

