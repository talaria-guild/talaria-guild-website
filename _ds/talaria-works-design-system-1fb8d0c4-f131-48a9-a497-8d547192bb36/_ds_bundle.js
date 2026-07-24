/* @ds-bundle: {"format":4,"namespace":"TalariaWorksDesignSystem_1fb8d0","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data/Card.jsx"},{"name":"Progress","sourcePath":"components/data/Progress.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"Logo","sourcePath":"components/media/Logo.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"02361408d338","components/core/Button.jsx":"7fe8b443ebd1","components/core/IconButton.jsx":"385f8c3b13d8","components/core/Tag.jsx":"ea0fad89c8f0","components/data/Avatar.jsx":"eb6ba1080f76","components/data/Card.jsx":"e66c850dd1ac","components/data/Progress.jsx":"a35a3ebfae53","components/data/StatCard.jsx":"9732a4dc9167","components/data/Table.jsx":"42ce4c2a93f0","components/feedback/Alert.jsx":"007e434645a9","components/feedback/Dialog.jsx":"c788e0e553ab","components/feedback/Toast.jsx":"095971e081b0","components/feedback/Tooltip.jsx":"9afc9a1d0bf4","components/forms/Checkbox.jsx":"f0d9a2eb3f17","components/forms/Field.jsx":"9f6bd61eccc0","components/forms/Input.jsx":"50ca02428218","components/forms/Radio.jsx":"de855ae32eb1","components/forms/Select.jsx":"756581695022","components/forms/Switch.jsx":"52ad18398b98","components/forms/Textarea.jsx":"110b4aca8cc7","components/media/Icon.jsx":"c6a7fa29d7fe","components/media/Logo.jsx":"4f2d021673e1","components/navigation/Breadcrumb.jsx":"f2e70c5094ca","components/navigation/Tabs.jsx":"53a75e05d04a","ui_kits/portal/PortalApp.jsx":"2c6b8a76e8ac","ui_kits/portal/PortalShell.jsx":"c81e42f4fe0b","ui_kits/portal/PortalViews.jsx":"405870082070","ui_kits/website/SiteHeader.jsx":"01f94db6415b","ui_kits/website/SiteHero.jsx":"16e38c51c456","ui_kits/website/SiteSections.jsx":"65d63cb42e93","ui_kits/website/SiteServices.jsx":"47d4dfa459fc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TalariaWorksDesignSystem_1fb8d0 = window.TalariaWorksDesignSystem_1fb8d0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--ink-100)',
    fg: 'var(--text-body)',
    bd: 'var(--border-subtle)'
  },
  gold: {
    bg: 'var(--gold-100)',
    fg: 'var(--gold-800)',
    bd: 'var(--gold-200)'
  },
  success: {
    bg: 'var(--success-soft)',
    fg: 'var(--green-500)',
    bd: 'transparent'
  },
  warning: {
    bg: 'var(--warning-soft)',
    fg: 'var(--amber-500)',
    bd: 'transparent'
  },
  danger: {
    bg: 'var(--danger-soft)',
    fg: 'var(--red-500)',
    bd: 'transparent'
  },
  info: {
    bg: 'var(--info-soft)',
    fg: 'var(--blue-500)',
    bd: 'transparent'
  },
  solid: {
    bg: 'var(--ink-950)',
    fg: 'var(--gold-300)',
    bd: 'transparent'
  }
};
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      lineHeight: 1.4,
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    padding: '6px 12px',
    fontSize: 'var(--text-sm)',
    height: 32,
    gap: 6,
    icon: 16
  },
  md: {
    padding: '9px 18px',
    fontSize: 'var(--text-sm)',
    height: 40,
    gap: 8,
    icon: 18
  },
  lg: {
    padding: '13px 24px',
    fontSize: 'var(--text-md)',
    height: 48,
    gap: 9,
    icon: 20
  }
};
function palette(variant, s) {
  // returns {base, hover, active} style objects
  switch (variant) {
    case 'secondary':
      return {
        base: {
          background: 'var(--surface-card)',
          color: 'var(--text-strong)',
          border: '1px solid var(--border-default)',
          boxShadow: 'var(--shadow-xs)'
        },
        hover: {
          background: 'var(--surface-hover)',
          borderColor: 'var(--border-strong)'
        },
        active: {
          background: 'var(--ink-200)'
        }
      };
    case 'ghost':
      return {
        base: {
          background: 'transparent',
          color: 'var(--text-body)',
          border: '1px solid transparent'
        },
        hover: {
          background: 'var(--surface-hover)'
        },
        active: {
          background: 'var(--ink-200)'
        }
      };
    case 'danger':
      return {
        base: {
          background: 'var(--danger)',
          color: '#fff',
          border: '1px solid transparent',
          boxShadow: 'var(--shadow-sm)'
        },
        hover: {
          filter: 'brightness(0.93)'
        },
        active: {
          filter: 'brightness(0.86)'
        }
      };
    case 'primary':
    default:
      return {
        base: {
          background: 'var(--accent)',
          color: 'var(--accent-contrast)',
          border: '1px solid transparent',
          boxShadow: 'var(--shadow-sm)'
        },
        hover: {
          background: 'var(--accent-hover)',
          boxShadow: 'var(--shadow-gold)'
        },
        active: {
          background: 'var(--accent-active)'
        }
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const pal = palette(variant, s);
  const st = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: '0.005em',
    padding: s.padding,
    minHeight: s.height,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    opacity: disabled ? 0.45 : 1,
    ...pal.base,
    ...(!disabled && hover ? pal.hover : {}),
    ...(!disabled && active ? pal.active : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: st,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const dim = SIZES[size] || SIZES.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid transparent',
      hover: {
        background: 'var(--accent-hover)'
      }
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)',
      hover: {
        background: 'var(--surface-hover)'
      }
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      hover: {
        background: 'var(--surface-hover)'
      }
    }
  };
  const v = variants[variant] || variants.ghost;
  const st = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    borderRadius: 'var(--radius-sm)',
    flex: '0 0 auto',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    background: v.background,
    color: v.color,
    border: v.border,
    transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    ...(!disabled && hover ? v.hover : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    style: st,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Tag({
  children,
  onRemove,
  removeLabel = 'Remove',
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: onRemove ? '4px 6px 4px 10px' : '4px 10px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
      lineHeight: 1.3,
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": removeLabel,
    onClick: onRemove,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-xs)',
      cursor: 'pointer',
      background: hover ? 'var(--ink-200)' : 'transparent',
      color: 'var(--text-muted)',
      fontSize: 13,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const SIZES = {
  sm: 28,
  md: 36,
  lg: 48,
  xl: 64
};
function Avatar({
  name = '',
  src,
  size = 'md',
  style = {}
}) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: '50%',
      overflow: 'hidden',
      flex: '0 0 auto',
      background: 'var(--ink-900)',
      color: 'var(--gold-300)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: dim * 0.38,
      border: '1px solid var(--border-dark)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Card({
  children,
  interactive = false,
  padding = 24,
  as = 'div',
  style = {},
  onClick,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: `1px solid ${hover ? 'var(--border-default)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding,
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-normal) var(--ease-standard), border-color var(--dur-normal) var(--ease-standard), transform var(--dur-normal) var(--ease-standard)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, rest), children);
}
function CardHeader({
  title,
  eyebrow,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-brand)',
      marginBottom: 6
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, title)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  max = 100,
  tone = 'gold',
  showLabel = false,
  size = 'md',
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const h = size === 'sm' ? 5 : size === 'lg' ? 10 : 7;
  const colors = {
    gold: 'var(--accent)',
    success: 'var(--success)',
    info: 'var(--info)',
    silver: 'var(--silver-500)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: h,
      background: 'var(--ink-200)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: colors[tone] || colors.gold,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      minWidth: 34,
      textAlign: 'right'
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Progress.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  delta,
  deltaTone = 'neutral',
  icon,
  style = {}
}) {
  const tones = {
    up: 'var(--success)',
    down: 'var(--danger)',
    neutral: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)',
      display: 'flex'
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: tones[deltaTone] || tones.neutral
    }
  }, delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  data = [],
  rowKey,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      overflowX: 'auto',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: c.align || 'left',
      padding: '11px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      background: 'var(--surface-sunken)',
      borderBottom: '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap'
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, data.map((row, r) => /*#__PURE__*/React.createElement("tr", {
    key: rowKey ? row[rowKey] : r
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    style: {
      textAlign: c.align || 'left',
      padding: '13px 16px',
      color: 'var(--text-body)',
      borderBottom: r === data.length - 1 ? 'none' : '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap'
    }
  }, c.render ? c.render(row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  info: {
    bg: 'var(--info-soft)',
    bd: 'var(--blue-500)',
    fg: 'var(--blue-500)'
  },
  success: {
    bg: 'var(--success-soft)',
    bd: 'var(--green-500)',
    fg: 'var(--green-500)'
  },
  warning: {
    bg: 'var(--warning-soft)',
    bd: 'var(--amber-500)',
    fg: 'var(--amber-500)'
  },
  danger: {
    bg: 'var(--danger-soft)',
    bd: 'var(--red-500)',
    fg: 'var(--red-500)'
  }
};
function Alert({
  tone = 'info',
  title,
  children,
  icon,
  onClose,
  style = {}
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      padding: '14px 16px',
      background: t.bg,
      border: `1px solid ${t.bd}33`,
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      display: 'flex',
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.5
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  onClose,
  title,
  description,
  children,
  footer,
  width = 480,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'rgba(11,11,10,0.45)',
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 20,
      lineHeight: 1,
      padding: 2
    }
  }, "\xD7")), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      margin: '8px 0 0',
      lineHeight: 1.55
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 24px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-page)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  neutral: {
    icon: 'info',
    color: 'var(--text-body)',
    bar: 'var(--ink-400)'
  },
  success: {
    icon: 'check-circle',
    color: 'var(--success)',
    bar: 'var(--success)'
  },
  warning: {
    icon: 'alert-triangle',
    color: 'var(--amber-500)',
    bar: 'var(--amber-500)'
  },
  danger: {
    icon: 'alert-octagon',
    color: 'var(--danger)',
    bar: 'var(--danger)'
  }
};
function Toast({
  title,
  message,
  tone = 'neutral',
  onClose,
  icon,
  style = {}
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 360,
      maxWidth: '92vw',
      background: 'var(--ink-950)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 14px 14px 16px',
      borderLeft: `3px solid ${t.bar}`,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      display: 'flex',
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      marginBottom: message ? 3 : 0
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.45
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--silver-400)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
const POS = {
  top: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    mb: 8
  },
  bottom: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    mt: 8
  }
};
function Tooltip({
  children,
  label,
  placement = 'top',
  style = {}
}) {
  const [show, setShow] = useState(false);
  const p = POS[placement] || POS.top;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 900,
      whiteSpace: 'nowrap',
      bottom: p.bottom,
      top: p.top,
      left: p.left,
      transform: p.transform,
      marginBottom: p.mb,
      marginTop: p.mt,
      background: 'var(--ink-950)',
      color: 'var(--text-on-dark)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      padding: '6px 9px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (!controlled) setInner(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 18,
      height: 18,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: on ? 'var(--accent)' : 'var(--surface-card)',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--accent-contrast)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 3
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    height: 34,
    padding: '0 10px',
    font: 'var(--text-sm)'
  },
  md: {
    height: 40,
    padding: '0 12px',
    font: 'var(--text-sm)'
  },
  lg: {
    height: 48,
    padding: '0 14px',
    font: 'var(--text-md)'
  }
};
function Input({
  size = 'md',
  invalid = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style = {},
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const border = invalid ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: s.height,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? `0 0 0 3px var(--focus-ring)` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      paddingLeft: 10,
      color: 'var(--text-muted)'
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      padding: s.padding,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      color: 'var(--text-strong)'
    }
  }, rest)), rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      paddingRight: 10,
      color: 'var(--text-muted)'
    }
  }, rightIcon));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked,
  name,
  value,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 18,
      height: 18,
      flex: '0 0 auto',
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: 34,
  md: 40,
  lg: 48
};
function Select({
  children,
  size = 'md',
  invalid = false,
  disabled = false,
  style = {},
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const h = SIZES[size] || SIZES.md;
  const border = invalid ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      width: '100%',
      height: h,
      padding: '0 36px 0 12px',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (!controlled) setInner(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 38,
      height: 22,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--accent)' : 'var(--ink-300)',
      transition: 'background var(--dur-normal) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 18 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-normal) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style = {},
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const border = invalid ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      width: '100%',
      padding: '10px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      resize: 'vertical',
      lineHeight: 1.5,
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/**
 * Icon — thin wrapper over Lucide line icons (24px grid, 1.75px stroke).
 * Requires the Lucide CDN script on the page; it renders currentColor SVGs.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color,
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (el && typeof window !== 'undefined' && window.lucide && window.lucide.createIcons) {
      // clear any prior render so re-renders don't stack
      el.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      el.appendChild(i);
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth
        }
      });
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    role: "img",
    "aria-label": name,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color: color || 'currentColor',
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// components/media/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — Talaria Works brand lockup.
 * If `src` (path to a brand PNG) is given, renders that image.
 * Otherwise renders the type-based wordmark in Cinzel (TALARIA gold / WORKS ink),
 * which degrades gracefully anywhere the asset isn't available.
 */
function Logo({
  variant = 'wordmark',
  src,
  height = 32,
  onDark = false,
  style = {},
  ...rest
}) {
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: "Talaria Works",
      style: {
        height,
        width: 'auto',
        display: 'block',
        ...style
      }
    }, rest));
  }
  const ink = onDark ? 'var(--text-on-dark)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '0.06em',
      lineHeight: 1,
      fontSize: height * 0.62,
      whiteSpace: 'nowrap',
      display: 'inline-block',
      ...style
    },
    "aria-label": "Talaria Works"
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "Talaria"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink
    }
  }, "Works"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Logo.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, it.href && !last ? /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, it.label) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? 'var(--text-strong)' : 'var(--text-muted)',
        fontWeight: last ? 600 : 400
      },
      "aria-current": last ? 'page' : undefined
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-subtle)'
      }
    }, "/"));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  const [inner, setInner] = React.useState(value ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : inner;
  const select = id => {
    if (value === undefined) setInner(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => select(t.id),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '10px 14px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 700 : 500,
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, t.icon, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-muted)',
        background: 'var(--ink-100)',
        padding: '1px 6px',
        borderRadius: 'var(--radius-pill)'
      }
    }, t.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: on ? 'var(--accent)' : 'transparent',
        borderRadius: 2
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalApp.jsx
try { (() => {
// Talaria Works — portal login + app orchestration (interactive)
function PortalLogin({
  onSignIn
}) {
  const {
    Card,
    Field,
    Input,
    Button,
    Checkbox,
    Icon
  } = window.TalariaWorksDesignSystem_1fb8d0;
  const [email, setEmail] = React.useState('dana@northwind.co');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--ink-950)',
      color: 'var(--white)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-ondark.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -120,
      bottom: -100,
      width: 460,
      opacity: 0.06
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-ondark.png",
    alt: "",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '0.05em',
      fontSize: 17
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "Talaria"), "Works")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-rule-gold",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '0.01em'
    }
  }, "We keep the lights on so your team can build."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--silver-400)',
      marginTop: 16,
      maxWidth: 360,
      lineHeight: 1.6
    }
  }, "Your engagement, tickets, and system health \u2014 one place.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      color: 'var(--silver-600)',
      position: 'relative'
    }
  }, "CLIENT PORTAL \xB7 v2.4")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '8px 0 28px'
    }
  }, "Welcome back. Use your work email."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSignIn();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Work email"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Password"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "password",
    defaultValue: "password",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 16
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, "Forgot?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Sign in")))));
}
function PortalApp() {
  const [authed, setAuthed] = React.useState(false);
  const [view, setView] = React.useState('overview');
  if (!authed) return /*#__PURE__*/React.createElement(PortalLogin, {
    onSignIn: () => setAuthed(true)
  });
  const titles = {
    overview: 'Overview',
    tickets: 'Tickets',
    systems: 'Systems',
    billing: 'Billing',
    team: 'Team'
  };
  const Body = {
    overview: window.OverviewView,
    tickets: window.TicketsView,
    systems: window.SystemsView
  }[view];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(window.PortalSidebar, {
    active: view,
    onNav: setView,
    onSignOut: () => setAuthed(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(window.PortalTopbar, {
    title: titles[view],
    crumb: [{
      label: 'Northwind Co.',
      href: '#'
    }, {
      label: titles[view]
    }]
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 28
    }
  }, Body ? /*#__PURE__*/React.createElement(Body, null) : /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, "\u201C", titles[view], "\u201D is a placeholder view in this kit."))));
}
window.PortalApp = PortalApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalShell.jsx
try { (() => {
// Talaria Works — portal sidebar + topbar shell
function PortalSidebar({
  active,
  onNav,
  onSignOut
}) {
  const {
    Icon,
    Avatar
  } = window.TalariaWorksDesignSystem_1fb8d0;
  const nav = [{
    id: 'overview',
    label: 'Overview',
    icon: 'layout-dashboard'
  }, {
    id: 'tickets',
    label: 'Tickets',
    icon: 'ticket',
    count: 6
  }, {
    id: 'systems',
    label: 'Systems',
    icon: 'server'
  }, {
    id: 'billing',
    label: 'Billing',
    icon: 'receipt'
  }, {
    id: 'team',
    label: 'Team',
    icon: 'users'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 244,
      flex: '0 0 244px',
      background: 'var(--ink-950)',
      color: 'var(--silver-300)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '18px 18px',
      borderBottom: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-ondark.png",
    alt: "",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '0.05em',
      fontSize: 15,
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "Talaria"), "Works")), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--silver-600)',
      padding: '10px 12px 6px'
    }
  }, "Client portal"), nav.map(n => {
    const on = n.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '9px 12px',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        textAlign: 'left',
        background: on ? 'color-mix(in srgb, var(--gold-500) 16%, transparent)' : 'transparent',
        color: on ? 'var(--gold-300)' : 'var(--silver-300)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 600 : 500
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, n.label), n.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        background: on ? 'var(--gold-500)' : 'var(--ink-800)',
        color: on ? 'var(--ink-950)' : 'var(--silver-300)',
        padding: '1px 7px',
        borderRadius: 'var(--radius-pill)'
      }
    }, n.count));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: '1px solid var(--border-dark)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dana Reyes",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--white)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Dana Reyes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--silver-500)'
    }
  }, "Northwind Co.")), /*#__PURE__*/React.createElement("button", {
    onClick: onSignOut,
    "aria-label": "Sign out",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--silver-500)',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 18
  }))));
}
function PortalTopbar({
  title,
  crumb
}) {
  const {
    Icon,
    IconButton,
    Button,
    Breadcrumb
  } = window.TalariaWorksDesignSystem_1fb8d0;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flex: '0 0 64px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 28px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: crumb
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginTop: 1
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    }),
    label: "Search",
    variant: "ghost"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 18
    }),
    label: "Alerts",
    variant: "ghost"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    })
  }, "New ticket")));
}
Object.assign(window, {
  PortalSidebar,
  PortalTopbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalViews.jsx
try { (() => {
// Talaria Works — portal main views (overview / tickets / systems)
function OverviewView() {
  const {
    StatCard,
    Card,
    CardHeader,
    Table,
    Badge,
    Icon,
    Button,
    Progress,
    Alert
  } = window.TalariaWorksDesignSystem_1fb8d0;
  const activity = [{
    id: 1,
    who: 'M. Alvarez',
    act: 'deployed api-gateway v2.4.0',
    when: '12m ago',
    tone: 'success'
  }, {
    id: 2,
    who: 'System',
    act: 'billing-worker error rate above threshold',
    when: '38m ago',
    tone: 'warning'
  }, {
    id: 3,
    who: 'D. Reyes',
    act: 'opened ticket TW-1042',
    when: '1h ago',
    tone: 'neutral'
  }, {
    id: 4,
    who: 'System',
    act: 'nightly patch window completed',
    when: '6h ago',
    tone: 'success'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Patch window tonight",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "alert-triangle",
      size: 18
    })
  }, "Three systems will reboot between 02:00\u201303:00 ET. No action needed."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Uptime",
    value: "99.98%",
    delta: "+0.02% MoM",
    deltaTone: "up",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "activity",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Open tickets",
    value: "6",
    delta: "-3 this week",
    deltaTone: "up",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Systems",
    value: "12",
    delta: "all monitored",
    deltaTone: "neutral",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "server",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg response",
    value: "21m",
    delta: "SLA 30m",
    deltaTone: "up",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 0'
    }
  }, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "This week",
    title: "Recent activity"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, activity.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 22px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      flex: '0 0 auto',
      background: a.tone === 'success' ? 'var(--success)' : a.tone === 'warning' ? 'var(--amber-500)' : 'var(--silver-400)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, a.who), " ", a.act), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, a.when))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: "Engagement",
    title: "Hours this month"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 800,
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, "112", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, " / 160")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 0 22px'
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 112,
    max: 160,
    showLabel: true
  })), [['Staff Engineering', 74], ['Managed Service', 26], ['Fractional CIO', 12]].map(([l, h]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderTop: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, h, "h"))))));
}
function TicketsView() {
  const {
    Card,
    Table,
    Badge,
    Tabs,
    Icon
  } = window.TalariaWorksDesignSystem_1fb8d0;
  const [f, setF] = React.useState('open');
  const rows = [{
    id: 'TW-1042',
    title: 'Rotate expiring TLS certs',
    pri: 'High',
    priTone: 'danger',
    owner: 'M. Alvarez',
    status: 'In progress'
  }, {
    id: 'TW-1039',
    title: 'Add read-replica for analytics-db',
    pri: 'Medium',
    priTone: 'warning',
    owner: 'S. Okonkwo',
    status: 'Triage'
  }, {
    id: 'TW-1036',
    title: 'Onboard new billing vendor webhook',
    pri: 'Medium',
    priTone: 'warning',
    owner: 'Unassigned',
    status: 'Open'
  }, {
    id: 'TW-1031',
    title: 'Investigate elevated 5xx on gateway',
    pri: 'Low',
    priTone: 'neutral',
    owner: 'D. Reyes',
    status: 'Open'
  }];
  return /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: f,
    onChange: setF,
    tabs: [{
      id: 'open',
      label: 'Open',
      count: 6
    }, {
      id: 'mine',
      label: 'Assigned to me',
      count: 2
    }, {
      id: 'closed',
      label: 'Closed'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement(Table, {
    rowKey: "id",
    columns: [{
      header: 'ID',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-muted)'
        }
      }, r.id)
    }, {
      header: 'Title',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: 'var(--text-strong)'
        }
      }, r.title)
    }, {
      header: 'Priority',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.priTone
      }, r.pri)
    }, {
      header: 'Owner',
      key: 'owner'
    }, {
      header: 'Status',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral",
        dot: true
      }, r.status)
    }],
    data: rows
  })));
}
function SystemsView() {
  const {
    Card,
    Table,
    Badge,
    Progress,
    Icon
  } = window.TalariaWorksDesignSystem_1fb8d0;
  const rows = [{
    id: 1,
    name: 'api-gateway',
    env: 'prod',
    ok: true,
    status: 'Operational',
    cpu: 34,
    uptime: '99.99%'
  }, {
    id: 2,
    name: 'billing-worker',
    env: 'prod',
    ok: false,
    status: 'Degraded',
    cpu: 87,
    uptime: '98.7%'
  }, {
    id: 3,
    name: 'analytics-db',
    env: 'prod',
    ok: true,
    status: 'Operational',
    cpu: 52,
    uptime: '99.95%'
  }, {
    id: 4,
    name: 'web-frontend',
    env: 'prod',
    ok: true,
    status: 'Operational',
    cpu: 19,
    uptime: '100%'
  }, {
    id: 5,
    name: 'staging-cluster',
    env: 'staging',
    ok: true,
    status: 'Operational',
    cpu: 41,
    uptime: '99.8%'
  }];
  return /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement(Table, {
    rowKey: "id",
    columns: [{
      header: 'System',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontWeight: 600,
          color: 'var(--text-strong)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "server",
        size: 15,
        color: "var(--text-muted)"
      }), r.name)
    }, {
      header: 'Env',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-muted)'
        }
      }, r.env)
    }, {
      header: 'Status',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.ok ? 'success' : 'warning',
        dot: true
      }, r.status)
    }, {
      header: 'CPU',
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          width: 120
        }
      }, /*#__PURE__*/React.createElement(Progress, {
        value: r.cpu,
        tone: r.cpu > 80 ? 'gold' : 'success',
        size: "sm",
        showLabel: true
      }))
    }, {
      header: 'Uptime',
      key: 'uptime',
      align: 'right'
    }],
    data: rows
  })));
}
Object.assign(window, {
  OverviewView,
  TicketsView,
  SystemsView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalViews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// Talaria Works — marketing site header
function SiteHeader() {
  const {
    Button,
    Logo,
    Icon
  } = window.TalariaWorksDesignSystem_1fb8d0;
  const links = ['Services', 'How we work', 'Case studies', 'About'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      background: 'color-mix(in srgb, var(--surface-page) 82%, transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: "",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement(Logo, {
    height: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, "Client login"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Book a call"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHero.jsx
try { (() => {
// Talaria Works — hero (dark ink panel with faint gear watermark)
function SiteHero() {
  const {
    Button,
    Icon,
    Badge
  } = window.TalariaWorksDesignSystem_1fb8d0;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--ink-950)',
      color: 'var(--text-on-dark)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-ondark.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -160,
      top: -80,
      width: 620,
      opacity: 0.05,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '110px 32px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 2,
      background: 'var(--gold-500)'
    }
  }), "AI-powered software consultancy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '0.04em',
      lineHeight: 1.08,
      fontSize: 'clamp(40px, 6vw, 68px)',
      margin: '22px 0 0',
      color: 'var(--white)'
    }
  }, "Senior engineering,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "on demand.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xl)',
      fontWeight: 300,
      lineHeight: 1.5,
      color: 'var(--silver-300)',
      margin: '26px 0 0',
      maxWidth: 620
    }
  }, "We plug into your team, ship what matters, and leave you stronger than we found you \u2014 fractional CIO strategy, staff-level engineering, and managed service."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 38,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Book a call"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    style: {
      background: 'transparent',
      color: 'var(--white)',
      borderColor: 'var(--border-dark)'
    }
  }, "See how we work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 34,
      marginTop: 56,
      flexWrap: 'wrap'
    }
  }, [['48h', 'to onboard'], ['99.98%', 'managed uptime'], ['40+', 'teams shipped']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 800,
      color: 'var(--white)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--silver-400)',
      marginTop: 4
    }
  }, l)))))));
}
window.SiteHero = SiteHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteSections.jsx
try { (() => {
// Talaria Works — testimonial band + dark CTA + footer
function SiteProof() {
  const {
    Icon
  } = window.TalariaWorksDesignSystem_1fb8d0;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '84px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-rule-gold",
    style: {
      margin: '0 auto 26px'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '0.01em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "\u201CThey shipped in six weeks what our team had circled for a year \u2014 and left us a runbook so we never needed them for it again.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-body)'
    }
  }, "VP Engineering"), " \xB7 Series B fintech")));
}
function SiteCTA() {
  const {
    Button,
    Icon
  } = window.TalariaWorksDesignSystem_1fb8d0;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--ink-950)',
      color: 'var(--text-on-dark)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-ondark.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: -120,
      bottom: -140,
      width: 500,
      opacity: 0.045
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '96px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 800,
      letterSpacing: '-0.01em',
      color: 'var(--white)',
      margin: 0
    }
  }, "Tell us what\u2019s stuck."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--silver-300)',
      margin: '16px auto 0',
      maxWidth: 520,
      lineHeight: 1.6
    }
  }, "A 30-minute call, a senior engineer, and a straight answer on whether we can help."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Book a call"))));
}
function SiteFooter() {
  const {
    Logo
  } = window.TalariaWorksDesignSystem_1fb8d0;
  const cols = [['Services', ['Fractional CIO', 'Staff Engineering', 'Managed Service']], ['Company', ['About', 'Case studies', 'Careers', 'Contact']], ['Resources', ['Field notes', 'Runbooks', 'Client login']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--silver-400)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '56px 32px 36px',
      display: 'grid',
      gridTemplateColumns: '1.5fr repeat(3, 1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 26,
    onDark: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      marginTop: 16,
      maxWidth: 260
    }
  }, "Senior engineering, on demand. Fractional leadership, delivery, and managed service.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--silver-500)',
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--silver-300)',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-dark)',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '20px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)',
      color: 'var(--silver-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Talaria Works"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "Built for teams in motion")));
}
Object.assign(window, {
  SiteProof,
  SiteCTA,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteServices.jsx
try { (() => {
// Talaria Works — services + how-we-work + case study proof
function SiteServices() {
  const {
    Card,
    Icon,
    Badge,
    Button
  } = window.TalariaWorksDesignSystem_1fb8d0;
  const services = [{
    icon: 'compass',
    name: 'Fractional CIO',
    copy: 'Strategy, roadmap, and vendor decisions from someone who has owned the pager.',
    pts: ['Architecture reviews', 'Build-vs-buy calls', 'Team & hiring plans']
  }, {
    icon: 'code-2',
    name: 'Staff Engineering',
    copy: 'We embed with your team and ship the hard things — then hand them back documented.',
    pts: ['AI feature delivery', 'Platform & DX', 'Legacy untangling']
  }, {
    icon: 'shield-check',
    name: 'Managed Service',
    copy: 'We keep the lights on so your team can build. Monitoring, patching, and response, handled.',
    pts: ['24/7 monitoring', 'Patch management', 'Incident response']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '104px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-eyebrow",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 2,
      background: 'var(--gold-500)'
    }
  }), "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 800,
      letterSpacing: '-0.01em',
      margin: '18px 0 0',
      color: 'var(--text-strong)'
    }
  }, "Three ways we plug in"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-muted)',
      margin: '14px 0 0',
      lineHeight: 1.6
    }
  }, "Start with one. Most clients move between them as the work changes \u2014 one team, one invoice.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 20,
      marginTop: 44
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.name,
    interactive: true,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gold-100)',
      color: 'var(--gold-700)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      margin: '10px 0 18px',
      lineHeight: 1.55
    }
  }, s.copy), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, s.pts.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--gold-600)"
  }), p)))))));
}
window.SiteServices = SiteServices;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteServices.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
