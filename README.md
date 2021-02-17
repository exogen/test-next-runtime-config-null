`null` is stripped out of `publicRuntimeConfig` and `serverRuntimeConfig`
values, which can break code that distinguishes between `undefined` and `null`,
existence in the config object, or passes config values directly to other code
that is strict about what it accepts.
