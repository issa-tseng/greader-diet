// ==UserScript==
// @match http://reader.google.com/*
// @match http://www.google.com/reader/*
// ==/UserScript==

(function() {

var styles = { '->': {
    '#top-bar': {
        'height': '40px',

        '->': {
            '#search': {
                'padding': '6px 0'
            }
        }
    },
    '#main': {

        '->': {
            '#nav': {

                '->': {
                    '#lhn-add-subscription-section': {
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

                            '#entries': {
                                'border-top': '0',
                                'padding': '5px',
                                'padding-right': '1px',

                                '->': {
                                    '.entry': {
                                        'border': '2px solid #ebebeb',
                                        'border-radius': '8px',
                                        'margin-bottom': '8px',
                                        'padding': '0 10px 40px',

                                        '->': {
                                            '.card': {
                                                'padding-left': '1em',

                                                '->': {
                                                    '.card-actions': {
                                                        'border': '0',
                                                        'border-top': '1px solid #ebebeb',
                                                        'border-radius': '0 0 8px 8px',
                                                        'position': 'absolute',
                                                        'left': '0',
                                                        'right': '0',
                                                        'bottom': '0'
                                                    }
                                                }
                                            }
                                        }
                                    },

                                    '.entry-0': {
                                        'padding': '0 10px'
                                    },

                                    '#current-entry': {
                                        'border-color': '#bbb',
                                        'box-shadow': '0 0 5px rgba(0, 0, 0, 0.15)',

                                        '->': {
                                            '.card': {
                                                'border-color': '#fff'
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

/* someone please tell me why this isn't working.

var e = document.createEvent('HTMLEvents');
e.initEvent('resize', true, false);
window.dispatchEvent(e);*/

var feedContainer = document.getElementById('scrollable-sections');
feedContainer.style.height = parseInt(feedContainer.style.height) + 54 + 'px';
var entriesContainer = document.getElementById('viewer-entries-container');
entriesContainer.style.height = parseInt(entriesContainer.style.height) + 54 + 'px';

})();

