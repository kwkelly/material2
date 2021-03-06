/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {transformChanges} from '../transform-change-data';

export interface MaterialInputNameData {
  /** The @Input() name to replace. */
  replace: string;
  /** The new name for the @Input(). */
  replaceWith: string;
  /** Whitelist where this replacement is made. If omitted it is made in all HTML & CSS */
  whitelist?: {
    /** Limit to elements with any of these element tags. */
    elements?: string[],
    /** Limit to elements with any of these attributes. */
    attributes?: string[],
    /**
     * Whether inputs in stylesheets should be updated or not. Note that inputs inside of
     * stylesheets usually don't make sense, but if developers use an input as a plain one-time
     * attribute, it can be targeted through CSS selectors.
     */
    stylesheet?: boolean,
  };
}

export const inputNames = transformChanges<MaterialInputNameData>([
  {
    pr: 'https://github.com/angular/material2/pull/10161',
    changes: [
      {
        replace: 'origin',
        replaceWith: 'cdkConnectedOverlayOrigin',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'positions',
        replaceWith: 'cdkConnectedOverlayPositions',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'offsetX',
        replaceWith: 'cdkConnectedOverlayOffsetX',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'offsetY',
        replaceWith: 'cdkConnectedOverlayOffsetY',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'width',
        replaceWith: 'cdkConnectedOverlayWidth',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'height',
        replaceWith: 'cdkConnectedOverlayHeight',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'minWidth',
        replaceWith: 'cdkConnectedOverlayMinWidth',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'minHeight',
        replaceWith: 'cdkConnectedOverlayMinHeight',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'backdropClass',
        replaceWith: 'cdkConnectedOverlayBackdropClass',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'scrollStrategy',
        replaceWith: 'cdkConnectedOverlayScrollStrategy',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'open',
        replaceWith: 'cdkConnectedOverlayOpen',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      },
      {
        replace: 'hasBackdrop',
        replaceWith: 'cdkConnectedOverlayHasBackdrop',
        whitelist: {
          attributes: ['cdk-connected-overlay', 'connected-overlay', 'cdkConnectedOverlay']
        }
      }
    ]
  },

  {
    pr: 'https://github.com/angular/material2/pull/10218',
    changes: [
      {
        replace: 'align',
        replaceWith: 'labelPosition',
        whitelist: {
          elements: ['mat-radio-group', 'mat-radio-button']
        }
      }
    ]
  },

  {
    pr: 'https://github.com/angular/material2/pull/10279',
    changes: [
      {
        replace: 'align',
        replaceWith: 'position',
        whitelist: {
          elements: ['mat-drawer', 'mat-sidenav']
        }
      }
    ]
  },

  {
    pr: 'https://github.com/angular/material2/pull/10294',
    changes: [
      {
        replace: 'dividerColor',
        replaceWith: 'color',
        whitelist: {
          elements: ['mat-form-field']
        }
      },
      {
        replace: 'floatPlaceholder',
        replaceWith: 'floatLabel',
        whitelist: {
          elements: ['mat-form-field']
        }
      }
    ]
  },

  {
    pr: 'https://github.com/angular/material2/pull/10309',
    changes: [
      {
        replace: 'mat-dynamic-height',
        replaceWith: 'dynamicHeight',
        whitelist: {
          elements: ['mat-tab-group']
        }
      }
    ]
  },

  {
    pr: 'https://github.com/angular/material2/pull/10342',
    changes: [
      {
        replace: 'align',
        replaceWith: 'labelPosition',
        whitelist: {
          elements: ['mat-checkbox']
        }
      }
    ]
  },

  {
    pr: 'https://github.com/angular/material2/pull/10344',
    changes: [
      {
        replace: 'tooltip-position',
        replaceWith: 'matTooltipPosition',
        whitelist: {
          attributes: ['matTooltip']
        }
      }
    ]
  },

  {
    pr: 'https://github.com/angular/material2/pull/10373',
    changes: [
      {
        replace: 'thumb-label',
        replaceWith: 'thumbLabel',
        whitelist: {
          elements: ['mat-slider']
        }
      },
      {
        replace: 'tick-interval',
        replaceWith: 'tickInterval',
        whitelist: {
          elements: ['mat-slider']
        }
      }
    ]
  }
]);
