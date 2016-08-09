/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @fileoverview Bootstraps the test bundle for karma-webpack. */

// TODO(traviskaufman): Remove once animation.js is removed when ripple is refactored.
window.Promise = require('es6-promise').Promise;

const testsContext = require.context('.', true, /\.test\.js$/);
testsContext.keys().forEach(testsContext);
