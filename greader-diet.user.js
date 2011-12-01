// ==UserScript==
// @match http://reader.google.com/*
// @match http://www.google.com/reader/*
// @match https://reader.google.com/*
// @match https://www.google.com/reader/*
// ==/UserScript==

(function() {

var styles = { '->': {
    '#gb': {
        'height': '51px',

        '->': {
            '#gbqlw': { // logo image
                'height': '53px'
            },

            '#gbq2': { // search bar
                'padding-top': '10px'
            },

            '#gbv': {
                'padding-top': '13px'
            },

            '#gbx1': { // bg
                'height': '50px'
            },

            '#gbx2': { // bg
                'height': '50px'
            }
        }
    },
    '#main': {

        '->': {
            '#nav': {

                '->': {
                    '#logo-section': {
                        'display': 'none'
                    },

                    '#lhn-add-subscription-section': {
                        'border-bottom': '1px solid #ebebeb',
                        'height': '39px',

                        '->': {
                            '#lhn-add-subscription': {
                                'top': '47%'
                            }
                        }
                    },

                    '#home-section': {
                        'padding': '0.6em 0 0'
                    },

                    '.lhn-section-primary': {
                        'line-height': '25px',

                        '->': {
                            '#reading-list-unread-count': {
                                'line-height': '17px'
                            }
                        }
                    },

                    '.selectors-footer': {
                        'margin-bottom': '6px',
                        'padding-bottom': '6px'
                    },

                    '#recommendations-tree .lhn-section-primary': {
                        'height': '23px'
                    }
                }
            },

            '#chrome': {

                '->': {
                    '#viewer-header': {
                        'height': '39px',

                        '->': {
                            '#view-top-controls-container': {
                                'top': '47%'
                            }
                        }
                    },

                    '#viewer-container': {

                        '->': {
                            '#title-and-status-holder': {
                                'display': 'none'
                            },

                            '#entries.cards': {
                                'border-top': '0',
                                'padding': '5px',
                                'padding-right': '1px',

                                '->': {
                                    '.entry': {
                                        'margin-bottom': '8px',
                                        'margin-top': '0',
                                        'padding': '0',

                                        '->': {
                                            '.card': {
                                                'border': '2px solid #ebebeb',
                                                'border-radius': '8px',
                                                'padding-bottom': '40px',
                                                'padding-left': '1em',

                                                '->': {
                                                    '.card-content': {
                                                        'padding': '15px 10px 0'
                                                    },

                                                    '.card-actions': {
                                                        'border': '0',
                                                        'border-top': '1px solid #ebebeb',
                                                        'border-radius': '0 0 8px 8px',
                                                        'position': 'absolute',
                                                        'left': '2px',
                                                        'right': '2px',
                                                        'bottom': '2px'
                                                    }
                                                }
                                            }
                                        }
                                    },

                                    '#current-entry': {

                                        '->': {
                                            '.card': {
                                                'border-color': '#bbb',
                                                'box-shadow': '0 0 5px rgba(0, 0, 0, 0.15)'
                                            }
                                        }
                                    }
                                }
                            },

                            '#entries.list': {
                                'border-top': '0',
                                'padding': '5px',
                                'padding-right': '1px',

                                '->': {
                                    '.entry': {

                                        '->': {
                                            '.collapsed': {
                                                'height': '25px',
                                                'padding': '2px 0',

                                                '->': {
                                                    '.entry-icons': {
                                                        'margin-top': '-7px'
                                                    },

                                                    '.entry-date': {
                                                        'line-height': '25px'
                                                    },

                                                    '.entry-title': {
                                                        'line-height': '25px'
                                                    }
                                                }
                                            }
                                        }
                                    },

                                    '#current-entry': {
                                        'border': '2px solid #bbb',
                                        'border-radius': '8px',
                                        'box-shadow': '0 0 5px rgba(0, 0, 0, 0.15)',

                                        '->': {
                                            '.collapsed': {
                                                'border-top': '0',
                                                'border-radius': '8px 8px 0 0'
                                            },

                                            '.entry-actions': {
                                                'border-bottom': '0',
                                                'border-radius': '0 0 8px 8px'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} };

var css = [];

var applyStyle = function(obj, prefix)
{
    if (prefix !== '')
    {
        css.push(prefix + '{');
        for (var key in obj)
        {
            if (key == '->')
                continue;

            css.push(key + ':' + obj[key] + ';');
        }
        css.push('}');
    }

    var subobj;
    if (subobj = obj['->'])
        for (var key in subobj)
            applyStyle(subobj[key], prefix + ' ' + key);
};

applyStyle(styles, '');

var styleElem = document.createElement('style');
styleElem.type = 'text/css';
var textElem = document.createTextNode(css.join('\n'));
styleElem.appendChild(textElem);

document.head.appendChild(styleElem);

})();

