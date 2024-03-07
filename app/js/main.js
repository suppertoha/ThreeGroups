/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e = {
      595: () => {
        !(function () {
          document.querySelector(".accordion");
          let e = document.querySelectorAll(".faq");
          function t(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : function () {};
            if (!0 === e.jsAnimated) return;
            e.jsAnimated = !0;
            let n = e.animate(
              [{ height: 0 }, { height: e.scrollHeight + "px" }],
              { duration: 500, direction: t ? "reverse" : "normal" }
            );
            n.addEventListener("finish", function () {
              (e.jsAnimated = !1), i();
            });
          }
          e.length > 0 &&
            (e.forEach((i) => {
              i.addEventListener("click", function (i) {
                var n, s, r;
                i.target.classList.contains("ask") &&
                  ((n = i.target.nextElementSibling),
                  (s = i.target),
                  n.classList.contains("open")
                    ? t(n, !0, function () {
                        n.classList.remove("open"), s.classList.remove("open");
                      })
                    : ((r = s),
                      e.forEach((e) => {
                        e.querySelectorAll(".answer.open").forEach((e) => {
                          e.previousElementSibling !== r &&
                            t(e, !0, function () {
                              e.classList.remove("open"),
                                e.previousElementSibling.classList.remove(
                                  "open"
                                );
                            });
                        });
                      }),
                      n.classList.add("open"),
                      s.classList.add("open"),
                      t(n)));
              });
            }),
            window.addEventListener("click", (i) => {
              e.forEach((e) => {
                e.contains(i.target) ||
                  e.querySelectorAll(".answer.open").forEach((e) => {
                    t(e, !0, function () {
                      e.classList.remove("open");
                    });
                  });
              });
            }));
        })();
      },
      392: () => {
        function e() {
          const e = document.querySelectorAll(".js-cart");
          0 !== e.length &&
            e.forEach((e) => {
              const t =
                  e.clientHeight -
                  parseInt(window.getComputedStyle(e).paddingTop) -
                  parseInt(window.getComputedStyle(e).paddingBottom) +
                  5,
                i = e.querySelector(".card-concert__title"),
                n =
                  i.offsetHeight +
                  parseInt(window.getComputedStyle(i).marginBottom);
              let s = 0;
              const r = e.querySelector(".item-more"),
                o = e.querySelector(".item-more__num"),
                a = e.querySelector(".buttons-banner"),
                l = e.querySelectorAll(".buttons-banner__item:not(.item-more)");
              if (
                (l.forEach((e) => {
                  e.classList.remove("hidden-button");
                }),
                r.classList.add("hidden-button"),
                [...l].reverse().forEach((e) => {
                  a.offsetHeight > t - n &&
                    (e.classList.add("hidden-button"), s++);
                }),
                s > 0)
              ) {
                if (
                  (r.classList.remove("hidden-button"),
                  (o.textContent = s),
                  a.offsetHeight > t - n)
                ) {
                  const t = e.querySelectorAll(
                    ".buttons-banner__item:not(.item-more,.hidden-button)"
                  );
                  t[t.length - 1].classList.add("hidden-button"),
                    (o.textContent = s + 1);
                }
              } else r.classList.add("hidden-button");
              r.addEventListener("click", function () {
                e.querySelector(".item-more__inner").classList.toggle("active");
              });
            });
        }
        let t, i;
        function n() {
          const e = document.querySelector(".js-block-height");
          if (!e) return;
          const t = e.querySelector(".link-info__date--num"),
            i = e.querySelector(".item-more");
          let n = 0;
          const s = e.querySelectorAll(".buttons-banner__item:not(.item-more)");
          if (
            (s.forEach((e) => {
              e.classList.remove("hidden-button");
            }),
            i.classList.add("hidden-button"),
            [...s].reverse().forEach((t) => {
              e.offsetHeight > 182 && (t.classList.add("hidden-button"), n++);
            }),
            n > 0)
          ) {
            if (
              (i.classList.remove("hidden-button"),
              (t.textContent = n),
              e.offsetHeight > 182)
            ) {
              const i = e.querySelectorAll(
                ".buttons-banner__item:not(.item-more,.hidden-button)"
              );
              i[i.length - 1].classList.add("hidden-button"),
                (t.textContent = n + 1);
            }
          } else i.classList.add("hidden-button");
        }
        e(),
          window.addEventListener("resize", function () {
            clearTimeout(t), (t = setTimeout(e, 100));
          }),
          n(),
          window.addEventListener("resize", function () {
            clearTimeout(i), (i = setTimeout(n, 100));
          });
      },
      255: () => {
        const e = document.querySelectorAll(".go-back");
        0 !== e.length &&
          e.forEach(function (e) {
            e.addEventListener("click", function () {
              window.history.back();
            });
          });
      },
      429: () => {
        document.documentElement.clientWidth < 1024 &&
          (function () {
            const e = document.querySelectorAll(".popup-link"),
              t = document.querySelector("body"),
              i = document.querySelectorAll(".lock-padding");
            let n = !0;
            if (e.length > 0)
              for (let t = 0; t < e.length; t++) {
                const i = e[t];
                i.addEventListener("click", function (e) {
                  e.preventDefault();
                  const t = i.getAttribute("data-target");
                  r(document.querySelector(`[data-popup="${t}"]`));
                });
              }
            const s = document.querySelectorAll(".close-popup");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                const t = s[e];
                t.addEventListener("click", function (e) {
                  o(t.closest(".popup")), e.preventDefault();
                });
              }
            function r(e) {
              if (e && n) {
                const s = document.querySelector(".popup.open");
                s
                  ? o(s, !1)
                  : (function () {
                      const e =
                        window.innerWidth -
                        document.querySelector(".site-container").offsetWidth +
                        "px";
                      if (i.length > 0)
                        for (let t = 0; t < i.length; t++)
                          i[t].style.paddingRight = e;
                      (t.style.paddingRight = e),
                        t.classList.add("lock"),
                        (n = !1),
                        setTimeout(function () {
                          n = !0;
                        }, 800);
                    })(),
                  e.classList.add("open"),
                  e.addEventListener("click", function (e) {
                    e.target.closest(".popup__content") ||
                      o(e.target.closest(".popup"));
                  });
              }
            }
            function o(e) {
              let t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              n && (e.classList.remove("open"), t && a());
            }
            function a() {
              setTimeout(function () {
                if (i.length > 0)
                  for (let e = 0; e < i.length; e++)
                    i[e].style.paddingRight = "0px";
                (t.style.paddingRight = "0px"), t.classList.remove("lock");
              }, 800),
                (n = !1),
                setTimeout(function () {
                  n = !0;
                }, 800);
            }
          })();
      },
      407: () => {
        (() => {
          const e = document.querySelectorAll(".multi-default");
          e.length > 0 &&
            e.forEach((e) => {
              new Choices(e, { searchEnabled: !1 });
            });
        })();
      },
      154: () => {
        !(function () {
          const e = document.querySelector(".visible-links"),
            t = document.querySelector(".hidden-links"),
            i = document.querySelector(".nav-text"),
            n = [];
          if (!e) return;
          const s = () => {
            const s = document.querySelector(".header-top__body"),
              r =
                i && i.classList.contains("hidden")
                  ? s.offsetWidth
                  : s.offsetWidth - (i && i.offsetWidth) - 0;
            e &&
              t &&
              i &&
              s &&
              (e.offsetWidth > r
                ? (n.push(e.offsetWidth),
                  t.insertBefore(e.lastElementChild, t.firstElementChild),
                  i.classList.contains("hidden") &&
                    t.children.length > 0 &&
                    i.classList.remove("hidden"))
                : (r > n[n.length - 1] &&
                    (e.appendChild(t.firstElementChild), n.pop()),
                  n.length < 1 &&
                    (i.classList.add("hidden"), t.classList.add("hidden"))),
              i.setAttribute("count", n.length),
              t.children.length > 0
                ? ((i.textContent = "Еще"), i.classList.add("active"))
                : ((i.textContent = ""), i.classList.remove("active")));
          };
          i &&
            (i.addEventListener("click", () => {
              t && t.classList.toggle("hidden");
            }),
            document.addEventListener("click", (e) => {
              !i.contains(e.target) && t && t.classList.add("hidden");
            })),
            window &&
              (window.addEventListener("resize", s),
              window.addEventListener("DOMContentLoaded", s),
              window.addEventListener("load", s));
        })();
      },
      344: () => {
        const e = document.querySelector(".text-js-mobile-hidden");
        !(function () {
          if (!e) return;
          const t = document.querySelector(".js-block"),
            i = document.querySelector(".js-button");
          i.addEventListener("click", function () {
            t.classList.add("active"), (i.style.display = "none");
          });
        })();
      },
      137: () => {
        const e = document.querySelector(".video-block");
        if (e) {
          const t = e.querySelector("video"),
            i = e.querySelector(".video-block__play");
          i.addEventListener("click", () => {
            e.classList.add("video-block--played"),
              t.play(),
              (t.controls = !0),
              i.classList.add("video-block__play--played");
          }),
            (t.onpause = function () {
              e.classList.remove("video-block--played"),
                (t.controls = !1),
                i.classList.remove("video-block__play--played");
            });
        }
      },
      676: () => {
        !(function () {
          "use strict";
          var e = {
              282: function (e, t, i) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.clearChoices =
                    t.activateChoices =
                    t.filterChoices =
                    t.addChoice =
                      void 0);
                var n = i(883);
                (t.addChoice = function (e) {
                  var t = e.value,
                    i = e.label,
                    s = e.id,
                    r = e.groupId,
                    o = e.disabled,
                    a = e.elementId,
                    l = e.customProperties,
                    c = e.placeholder,
                    d = e.keyCode;
                  return {
                    type: n.ACTION_TYPES.ADD_CHOICE,
                    value: t,
                    label: i,
                    id: s,
                    groupId: r,
                    disabled: o,
                    elementId: a,
                    customProperties: l,
                    placeholder: c,
                    keyCode: d,
                  };
                }),
                  (t.filterChoices = function (e) {
                    return { type: n.ACTION_TYPES.FILTER_CHOICES, results: e };
                  }),
                  (t.activateChoices = function (e) {
                    return (
                      void 0 === e && (e = !0),
                      { type: n.ACTION_TYPES.ACTIVATE_CHOICES, active: e }
                    );
                  }),
                  (t.clearChoices = function () {
                    return { type: n.ACTION_TYPES.CLEAR_CHOICES };
                  });
              },
              783: function (e, t, i) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.addGroup = void 0);
                var n = i(883);
                t.addGroup = function (e) {
                  var t = e.value,
                    i = e.id,
                    s = e.active,
                    r = e.disabled;
                  return {
                    type: n.ACTION_TYPES.ADD_GROUP,
                    value: t,
                    id: i,
                    active: s,
                    disabled: r,
                  };
                };
              },
              464: function (e, t, i) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.highlightItem = t.removeItem = t.addItem = void 0);
                var n = i(883);
                (t.addItem = function (e) {
                  var t = e.value,
                    i = e.label,
                    s = e.id,
                    r = e.choiceId,
                    o = e.groupId,
                    a = e.customProperties,
                    l = e.placeholder,
                    c = e.keyCode;
                  return {
                    type: n.ACTION_TYPES.ADD_ITEM,
                    value: t,
                    label: i,
                    id: s,
                    choiceId: r,
                    groupId: o,
                    customProperties: a,
                    placeholder: l,
                    keyCode: c,
                  };
                }),
                  (t.removeItem = function (e, t) {
                    return {
                      type: n.ACTION_TYPES.REMOVE_ITEM,
                      id: e,
                      choiceId: t,
                    };
                  }),
                  (t.highlightItem = function (e, t) {
                    return {
                      type: n.ACTION_TYPES.HIGHLIGHT_ITEM,
                      id: e,
                      highlighted: t,
                    };
                  });
              },
              137: function (e, t, i) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.setIsLoading = t.resetTo = t.clearAll = void 0);
                var n = i(883);
                (t.clearAll = function () {
                  return { type: n.ACTION_TYPES.CLEAR_ALL };
                }),
                  (t.resetTo = function (e) {
                    return { type: n.ACTION_TYPES.RESET_TO, state: e };
                  }),
                  (t.setIsLoading = function (e) {
                    return {
                      type: n.ACTION_TYPES.SET_IS_LOADING,
                      isLoading: e,
                    };
                  });
              },
              373: function (e, t, i) {
                var n =
                    (this && this.__spreadArray) ||
                    function (e, t, i) {
                      if (i || 2 === arguments.length)
                        for (var n, s = 0, r = t.length; s < r; s++)
                          (!n && s in t) ||
                            (n || (n = Array.prototype.slice.call(t, 0, s)),
                            (n[s] = t[s]));
                      return e.concat(n || Array.prototype.slice.call(t));
                    },
                  s =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r = s(i(996)),
                  o = s(i(221)),
                  a = i(282),
                  l = i(783),
                  c = i(464),
                  d = i(137),
                  u = i(520),
                  h = i(883),
                  p = i(789),
                  f = i(799),
                  m = i(655),
                  g = s(i(744)),
                  v = s(i(686)),
                  b =
                    "-ms-scroll-limit" in document.documentElement.style &&
                    "-ms-ime-align" in document.documentElement.style,
                  y = {},
                  E = (function () {
                    function e(t, i) {
                      void 0 === t && (t = "[data-choice]"),
                        void 0 === i && (i = {});
                      var s = this;
                      void 0 === i.allowHTML &&
                        console.warn(
                          "Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."
                        ),
                        (this.config = r.default.all(
                          [p.DEFAULT_CONFIG, e.defaults.options, i],
                          {
                            arrayMerge: function (e, t) {
                              return n([], t, !0);
                            },
                          }
                        ));
                      var o = (0, f.diff)(this.config, p.DEFAULT_CONFIG);
                      o.length &&
                        console.warn(
                          "Unknown config option(s) passed",
                          o.join(", ")
                        );
                      var a =
                        "string" == typeof t ? document.querySelector(t) : t;
                      if (
                        !(
                          a instanceof HTMLInputElement ||
                          a instanceof HTMLSelectElement
                        )
                      )
                        throw TypeError(
                          "Expected one of the following types text|select-one|select-multiple"
                        );
                      if (
                        ((this._isTextElement = a.type === h.TEXT_TYPE),
                        (this._isSelectOneElement =
                          a.type === h.SELECT_ONE_TYPE),
                        (this._isSelectMultipleElement =
                          a.type === h.SELECT_MULTIPLE_TYPE),
                        (this._isSelectElement =
                          this._isSelectOneElement ||
                          this._isSelectMultipleElement),
                        (this.config.searchEnabled =
                          this._isSelectMultipleElement ||
                          this.config.searchEnabled),
                        ["auto", "always"].includes(
                          "".concat(this.config.renderSelectedChoices)
                        ) || (this.config.renderSelectedChoices = "auto"),
                        i.addItemFilter && "function" != typeof i.addItemFilter)
                      ) {
                        var l =
                          i.addItemFilter instanceof RegExp
                            ? i.addItemFilter
                            : new RegExp(i.addItemFilter);
                        this.config.addItemFilter = l.test.bind(l);
                      }
                      if (
                        (this._isTextElement
                          ? (this.passedElement = new u.WrappedInput({
                              element: a,
                              classNames: this.config.classNames,
                              delimiter: this.config.delimiter,
                            }))
                          : (this.passedElement = new u.WrappedSelect({
                              element: a,
                              classNames: this.config.classNames,
                              template: function (e) {
                                return s._templates.option(e);
                              },
                            })),
                        (this.initialised = !1),
                        (this._store = new g.default()),
                        (this._initialState = m.defaultState),
                        (this._currentState = m.defaultState),
                        (this._prevState = m.defaultState),
                        (this._currentValue = ""),
                        (this._canSearch = !!this.config.searchEnabled),
                        (this._isScrollingOnIe = !1),
                        (this._highlightPosition = 0),
                        (this._wasTap = !0),
                        (this._placeholderValue =
                          this._generatePlaceholderValue()),
                        (this._baseId = (0, f.generateId)(
                          this.passedElement.element,
                          "choices-"
                        )),
                        (this._direction = this.passedElement.dir),
                        !this._direction)
                      ) {
                        var c = window.getComputedStyle(
                          this.passedElement.element
                        ).direction;
                        c !==
                          window.getComputedStyle(document.documentElement)
                            .direction && (this._direction = c);
                      }
                      if (
                        ((this._idNames = { itemChoice: "item-choice" }),
                        this._isSelectElement &&
                          ((this._presetGroups =
                            this.passedElement.optionGroups),
                          (this._presetOptions = this.passedElement.options)),
                        (this._presetChoices = this.config.choices),
                        (this._presetItems = this.config.items),
                        this.passedElement.value && this._isTextElement)
                      ) {
                        var d = this.passedElement.value.split(
                          this.config.delimiter
                        );
                        this._presetItems = this._presetItems.concat(d);
                      }
                      if (
                        (this.passedElement.options &&
                          this.passedElement.options.forEach(function (e) {
                            s._presetChoices.push({
                              value: e.value,
                              label: e.innerHTML,
                              selected: !!e.selected,
                              disabled: e.disabled || e.parentNode.disabled,
                              placeholder:
                                "" === e.value || e.hasAttribute("placeholder"),
                              customProperties: (0, f.parseCustomProperties)(
                                e.dataset.customProperties
                              ),
                            });
                          }),
                        (this._render = this._render.bind(this)),
                        (this._onFocus = this._onFocus.bind(this)),
                        (this._onBlur = this._onBlur.bind(this)),
                        (this._onKeyUp = this._onKeyUp.bind(this)),
                        (this._onKeyDown = this._onKeyDown.bind(this)),
                        (this._onClick = this._onClick.bind(this)),
                        (this._onTouchMove = this._onTouchMove.bind(this)),
                        (this._onTouchEnd = this._onTouchEnd.bind(this)),
                        (this._onMouseDown = this._onMouseDown.bind(this)),
                        (this._onMouseOver = this._onMouseOver.bind(this)),
                        (this._onFormReset = this._onFormReset.bind(this)),
                        (this._onSelectKey = this._onSelectKey.bind(this)),
                        (this._onEnterKey = this._onEnterKey.bind(this)),
                        (this._onEscapeKey = this._onEscapeKey.bind(this)),
                        (this._onDirectionKey =
                          this._onDirectionKey.bind(this)),
                        (this._onDeleteKey = this._onDeleteKey.bind(this)),
                        this.passedElement.isActive)
                      )
                        return (
                          this.config.silent ||
                            console.warn(
                              "Trying to initialise Choices on element already initialised",
                              { element: t }
                            ),
                          void (this.initialised = !0)
                        );
                      this.init();
                    }
                    return (
                      Object.defineProperty(e, "defaults", {
                        get: function () {
                          return Object.preventExtensions({
                            get options() {
                              return y;
                            },
                            get templates() {
                              return v.default;
                            },
                          });
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.init = function () {
                        if (!this.initialised) {
                          this._createTemplates(),
                            this._createElements(),
                            this._createStructure(),
                            this._store.subscribe(this._render),
                            this._render(),
                            this._addEventListeners(),
                            (!this.config.addItems ||
                              this.passedElement.element.hasAttribute(
                                "disabled"
                              )) &&
                              this.disable(),
                            (this.initialised = !0);
                          var e = this.config.callbackOnInit;
                          e && "function" == typeof e && e.call(this);
                        }
                      }),
                      (e.prototype.destroy = function () {
                        this.initialised &&
                          (this._removeEventListeners(),
                          this.passedElement.reveal(),
                          this.containerOuter.unwrap(
                            this.passedElement.element
                          ),
                          this.clearStore(),
                          this._isSelectElement &&
                            (this.passedElement.options = this._presetOptions),
                          (this._templates = v.default),
                          (this.initialised = !1));
                      }),
                      (e.prototype.enable = function () {
                        return (
                          this.passedElement.isDisabled &&
                            this.passedElement.enable(),
                          this.containerOuter.isDisabled &&
                            (this._addEventListeners(),
                            this.input.enable(),
                            this.containerOuter.enable()),
                          this
                        );
                      }),
                      (e.prototype.disable = function () {
                        return (
                          this.passedElement.isDisabled ||
                            this.passedElement.disable(),
                          this.containerOuter.isDisabled ||
                            (this._removeEventListeners(),
                            this.input.disable(),
                            this.containerOuter.disable()),
                          this
                        );
                      }),
                      (e.prototype.highlightItem = function (e, t) {
                        if ((void 0 === t && (t = !0), !e || !e.id))
                          return this;
                        var i = e.id,
                          n = e.groupId,
                          s = void 0 === n ? -1 : n,
                          r = e.value,
                          o = void 0 === r ? "" : r,
                          a = e.label,
                          l = void 0 === a ? "" : a,
                          d = s >= 0 ? this._store.getGroupById(s) : null;
                        return (
                          this._store.dispatch((0, c.highlightItem)(i, !0)),
                          t &&
                            this.passedElement.triggerEvent(
                              h.EVENTS.highlightItem,
                              {
                                id: i,
                                value: o,
                                label: l,
                                groupValue: d && d.value ? d.value : null,
                              }
                            ),
                          this
                        );
                      }),
                      (e.prototype.unhighlightItem = function (e) {
                        if (!e || !e.id) return this;
                        var t = e.id,
                          i = e.groupId,
                          n = void 0 === i ? -1 : i,
                          s = e.value,
                          r = void 0 === s ? "" : s,
                          o = e.label,
                          a = void 0 === o ? "" : o,
                          l = n >= 0 ? this._store.getGroupById(n) : null;
                        return (
                          this._store.dispatch((0, c.highlightItem)(t, !1)),
                          this.passedElement.triggerEvent(
                            h.EVENTS.highlightItem,
                            {
                              id: t,
                              value: r,
                              label: a,
                              groupValue: l && l.value ? l.value : null,
                            }
                          ),
                          this
                        );
                      }),
                      (e.prototype.highlightAll = function () {
                        var e = this;
                        return (
                          this._store.items.forEach(function (t) {
                            return e.highlightItem(t);
                          }),
                          this
                        );
                      }),
                      (e.prototype.unhighlightAll = function () {
                        var e = this;
                        return (
                          this._store.items.forEach(function (t) {
                            return e.unhighlightItem(t);
                          }),
                          this
                        );
                      }),
                      (e.prototype.removeActiveItemsByValue = function (e) {
                        var t = this;
                        return (
                          this._store.activeItems
                            .filter(function (t) {
                              return t.value === e;
                            })
                            .forEach(function (e) {
                              return t._removeItem(e);
                            }),
                          this
                        );
                      }),
                      (e.prototype.removeActiveItems = function (e) {
                        var t = this;
                        return (
                          this._store.activeItems
                            .filter(function (t) {
                              return t.id !== e;
                            })
                            .forEach(function (e) {
                              return t._removeItem(e);
                            }),
                          this
                        );
                      }),
                      (e.prototype.removeHighlightedItems = function (e) {
                        var t = this;
                        return (
                          void 0 === e && (e = !1),
                          this._store.highlightedActiveItems.forEach(function (
                            i
                          ) {
                            t._removeItem(i), e && t._triggerChange(i.value);
                          }),
                          this
                        );
                      }),
                      (e.prototype.showDropdown = function (e) {
                        var t = this;
                        return (
                          this.dropdown.isActive ||
                            requestAnimationFrame(function () {
                              t.dropdown.show(),
                                t.containerOuter.open(
                                  t.dropdown.distanceFromTopWindow
                                ),
                                !e && t._canSearch && t.input.focus(),
                                t.passedElement.triggerEvent(
                                  h.EVENTS.showDropdown,
                                  {}
                                );
                            }),
                          this
                        );
                      }),
                      (e.prototype.hideDropdown = function (e) {
                        var t = this;
                        return this.dropdown.isActive
                          ? (requestAnimationFrame(function () {
                              t.dropdown.hide(),
                                t.containerOuter.close(),
                                !e &&
                                  t._canSearch &&
                                  (t.input.removeActiveDescendant(),
                                  t.input.blur()),
                                t.passedElement.triggerEvent(
                                  h.EVENTS.hideDropdown,
                                  {}
                                );
                            }),
                            this)
                          : this;
                      }),
                      (e.prototype.getValue = function (e) {
                        void 0 === e && (e = !1);
                        var t = this._store.activeItems.reduce(function (t, i) {
                          var n = e ? i.value : i;
                          return t.push(n), t;
                        }, []);
                        return this._isSelectOneElement ? t[0] : t;
                      }),
                      (e.prototype.setValue = function (e) {
                        var t = this;
                        return this.initialised
                          ? (e.forEach(function (e) {
                              return t._setChoiceOrItem(e);
                            }),
                            this)
                          : this;
                      }),
                      (e.prototype.setChoiceByValue = function (e) {
                        var t = this;
                        return (
                          !this.initialised ||
                            this._isTextElement ||
                            (Array.isArray(e) ? e : [e]).forEach(function (e) {
                              return t._findAndSelectChoiceByValue(e);
                            }),
                          this
                        );
                      }),
                      (e.prototype.setChoices = function (e, t, i, n) {
                        var s = this;
                        if (
                          (void 0 === e && (e = []),
                          void 0 === t && (t = "value"),
                          void 0 === i && (i = "label"),
                          void 0 === n && (n = !1),
                          !this.initialised)
                        )
                          throw new ReferenceError(
                            "setChoices was called on a non-initialized instance of Choices"
                          );
                        if (!this._isSelectElement)
                          throw new TypeError(
                            "setChoices can't be used with INPUT based Choices"
                          );
                        if ("string" != typeof t || !t)
                          throw new TypeError(
                            "value parameter must be a name of 'value' field in passed objects"
                          );
                        if (
                          (n && this.clearChoices(), "function" == typeof e)
                        ) {
                          var r = e(this);
                          if (
                            "function" == typeof Promise &&
                            r instanceof Promise
                          )
                            return new Promise(function (e) {
                              return requestAnimationFrame(e);
                            })
                              .then(function () {
                                return s._handleLoadingState(!0);
                              })
                              .then(function () {
                                return r;
                              })
                              .then(function (e) {
                                return s.setChoices(e, t, i, n);
                              })
                              .catch(function (e) {
                                s.config.silent || console.error(e);
                              })
                              .then(function () {
                                return s._handleLoadingState(!1);
                              })
                              .then(function () {
                                return s;
                              });
                          if (!Array.isArray(r))
                            throw new TypeError(
                              ".setChoices first argument function must return either array of choices or Promise, got: ".concat(
                                typeof r
                              )
                            );
                          return this.setChoices(r, t, i, !1);
                        }
                        if (!Array.isArray(e))
                          throw new TypeError(
                            ".setChoices must be called either with array of choices with a function resulting into Promise of array of choices"
                          );
                        return (
                          this.containerOuter.removeLoadingState(),
                          this._startLoading(),
                          e.forEach(function (e) {
                            if (e.choices)
                              s._addGroup({
                                id: e.id ? parseInt("".concat(e.id), 10) : null,
                                group: e,
                                valueKey: t,
                                labelKey: i,
                              });
                            else {
                              var n = e;
                              s._addChoice({
                                value: n[t],
                                label: n[i],
                                isSelected: !!n.selected,
                                isDisabled: !!n.disabled,
                                placeholder: !!n.placeholder,
                                customProperties: n.customProperties,
                              });
                            }
                          }),
                          this._stopLoading(),
                          this
                        );
                      }),
                      (e.prototype.clearChoices = function () {
                        return (
                          this._store.dispatch((0, a.clearChoices)()), this
                        );
                      }),
                      (e.prototype.clearStore = function () {
                        return this._store.dispatch((0, d.clearAll)()), this;
                      }),
                      (e.prototype.clearInput = function () {
                        var e = !this._isSelectOneElement;
                        return (
                          this.input.clear(e),
                          !this._isTextElement &&
                            this._canSearch &&
                            ((this._isSearching = !1),
                            this._store.dispatch((0, a.activateChoices)(!0))),
                          this
                        );
                      }),
                      (e.prototype._render = function () {
                        if (!this._store.isLoading()) {
                          this._currentState = this._store.state;
                          var e =
                              this._currentState.choices !==
                                this._prevState.choices ||
                              this._currentState.groups !==
                                this._prevState.groups ||
                              this._currentState.items !==
                                this._prevState.items,
                            t = this._isSelectElement,
                            i =
                              this._currentState.items !==
                              this._prevState.items;
                          e &&
                            (t && this._renderChoices(),
                            i && this._renderItems(),
                            (this._prevState = this._currentState));
                        }
                      }),
                      (e.prototype._renderChoices = function () {
                        var e = this,
                          t = this._store,
                          i = t.activeGroups,
                          n = t.activeChoices,
                          s = document.createDocumentFragment();
                        if (
                          (this.choiceList.clear(),
                          this.config.resetScrollPosition &&
                            requestAnimationFrame(function () {
                              return e.choiceList.scrollToTop();
                            }),
                          i.length >= 1 && !this._isSearching)
                        ) {
                          var r = n.filter(function (e) {
                            return !0 === e.placeholder && -1 === e.groupId;
                          });
                          r.length >= 1 &&
                            (s = this._createChoicesFragment(r, s)),
                            (s = this._createGroupsFragment(i, n, s));
                        } else
                          n.length >= 1 &&
                            (s = this._createChoicesFragment(n, s));
                        if (s.childNodes && s.childNodes.length > 0) {
                          var o = this._store.activeItems,
                            a = this._canAddItem(o, this.input.value);
                          if (a.response)
                            this.choiceList.append(s), this._highlightChoice();
                          else {
                            var l = this._getTemplate("notice", a.notice);
                            this.choiceList.append(l);
                          }
                        } else {
                          var c = void 0;
                          (l = void 0),
                            this._isSearching
                              ? ((l =
                                  "function" == typeof this.config.noResultsText
                                    ? this.config.noResultsText()
                                    : this.config.noResultsText),
                                (c = this._getTemplate(
                                  "notice",
                                  l,
                                  "no-results"
                                )))
                              : ((l =
                                  "function" == typeof this.config.noChoicesText
                                    ? this.config.noChoicesText()
                                    : this.config.noChoicesText),
                                (c = this._getTemplate(
                                  "notice",
                                  l,
                                  "no-choices"
                                ))),
                            this.choiceList.append(c);
                        }
                      }),
                      (e.prototype._renderItems = function () {
                        var e = this._store.activeItems || [];
                        this.itemList.clear();
                        var t = this._createItemsFragment(e);
                        t.childNodes && this.itemList.append(t);
                      }),
                      (e.prototype._createGroupsFragment = function (e, t, i) {
                        var n = this;
                        return (
                          void 0 === i &&
                            (i = document.createDocumentFragment()),
                          this.config.shouldSort && e.sort(this.config.sorter),
                          e.forEach(function (e) {
                            var s = (function (e) {
                              return t.filter(function (t) {
                                return n._isSelectOneElement
                                  ? t.groupId === e.id
                                  : t.groupId === e.id &&
                                      ("always" ===
                                        n.config.renderSelectedChoices ||
                                        !t.selected);
                              });
                            })(e);
                            if (s.length >= 1) {
                              var r = n._getTemplate("choiceGroup", e);
                              i.appendChild(r),
                                n._createChoicesFragment(s, i, !0);
                            }
                          }),
                          i
                        );
                      }),
                      (e.prototype._createChoicesFragment = function (e, t, i) {
                        var s = this;
                        void 0 === t && (t = document.createDocumentFragment()),
                          void 0 === i && (i = !1);
                        var r = this.config,
                          o = r.renderSelectedChoices,
                          a = r.searchResultLimit,
                          l = r.renderChoiceLimit,
                          c = this._isSearching
                            ? f.sortByScore
                            : this.config.sorter,
                          d = function (e) {
                            if (
                              "auto" !== o ||
                              s._isSelectOneElement ||
                              !e.selected
                            ) {
                              var i = s._getTemplate(
                                "choice",
                                e,
                                s.config.itemSelectText
                              );
                              t.appendChild(i);
                            }
                          },
                          u = e;
                        "auto" !== o ||
                          this._isSelectOneElement ||
                          (u = e.filter(function (e) {
                            return !e.selected;
                          }));
                        var h = u.reduce(
                            function (e, t) {
                              return (
                                t.placeholder
                                  ? e.placeholderChoices.push(t)
                                  : e.normalChoices.push(t),
                                e
                              );
                            },
                            { placeholderChoices: [], normalChoices: [] }
                          ),
                          p = h.placeholderChoices,
                          m = h.normalChoices;
                        (this.config.shouldSort || this._isSearching) &&
                          m.sort(c);
                        var g = u.length,
                          v = this._isSelectOneElement
                            ? n(n([], p, !0), m, !0)
                            : m;
                        this._isSearching
                          ? (g = a)
                          : l && l > 0 && !i && (g = l);
                        for (var b = 0; b < g; b += 1) v[b] && d(v[b]);
                        return t;
                      }),
                      (e.prototype._createItemsFragment = function (e, t) {
                        var i = this;
                        void 0 === t && (t = document.createDocumentFragment());
                        var n = this.config,
                          s = n.shouldSortItems,
                          r = n.sorter,
                          o = n.removeItemButton;
                        return (
                          s && !this._isSelectOneElement && e.sort(r),
                          this._isTextElement
                            ? (this.passedElement.value = e
                                .map(function (e) {
                                  return e.value;
                                })
                                .join(this.config.delimiter))
                            : (this.passedElement.options = e),
                          e.forEach(function (e) {
                            var n = i._getTemplate("item", e, o);
                            t.appendChild(n);
                          }),
                          t
                        );
                      }),
                      (e.prototype._triggerChange = function (e) {
                        null != e &&
                          this.passedElement.triggerEvent(h.EVENTS.change, {
                            value: e,
                          });
                      }),
                      (e.prototype._selectPlaceholderChoice = function (e) {
                        this._addItem({
                          value: e.value,
                          label: e.label,
                          choiceId: e.id,
                          groupId: e.groupId,
                          placeholder: e.placeholder,
                        }),
                          this._triggerChange(e.value);
                      }),
                      (e.prototype._handleButtonAction = function (e, t) {
                        if (
                          e &&
                          t &&
                          this.config.removeItems &&
                          this.config.removeItemButton
                        ) {
                          var i = t.parentNode && t.parentNode.dataset.id,
                            n =
                              i &&
                              e.find(function (e) {
                                return e.id === parseInt(i, 10);
                              });
                          n &&
                            (this._removeItem(n),
                            this._triggerChange(n.value),
                            this._isSelectOneElement &&
                              this._store.placeholderChoice &&
                              this._selectPlaceholderChoice(
                                this._store.placeholderChoice
                              ));
                        }
                      }),
                      (e.prototype._handleItemAction = function (e, t, i) {
                        var n = this;
                        if (
                          (void 0 === i && (i = !1),
                          e &&
                            t &&
                            this.config.removeItems &&
                            !this._isSelectOneElement)
                        ) {
                          var s = t.dataset.id;
                          e.forEach(function (e) {
                            e.id !== parseInt("".concat(s), 10) || e.highlighted
                              ? !i && e.highlighted && n.unhighlightItem(e)
                              : n.highlightItem(e);
                          }),
                            this.input.focus();
                        }
                      }),
                      (e.prototype._handleChoiceAction = function (e, t) {
                        if (e && t) {
                          var i = t.dataset.id,
                            n = i && this._store.getChoiceById(i);
                          if (n) {
                            var s =
                                e[0] && e[0].keyCode ? e[0].keyCode : void 0,
                              r = this.dropdown.isActive;
                            (n.keyCode = s),
                              this.passedElement.triggerEvent(h.EVENTS.choice, {
                                choice: n,
                              }),
                              n.selected ||
                                n.disabled ||
                                (this._canAddItem(e, n.value).response &&
                                  (this._addItem({
                                    value: n.value,
                                    label: n.label,
                                    choiceId: n.id,
                                    groupId: n.groupId,
                                    customProperties: n.customProperties,
                                    placeholder: n.placeholder,
                                    keyCode: n.keyCode,
                                  }),
                                  this._triggerChange(n.value))),
                              this.clearInput(),
                              r &&
                                this._isSelectOneElement &&
                                (this.hideDropdown(!0),
                                this.containerOuter.focus());
                          }
                        }
                      }),
                      (e.prototype._handleBackspace = function (e) {
                        if (this.config.removeItems && e) {
                          var t = e[e.length - 1],
                            i = e.some(function (e) {
                              return e.highlighted;
                            });
                          this.config.editItems && !i && t
                            ? ((this.input.value = t.value),
                              this.input.setWidth(),
                              this._removeItem(t),
                              this._triggerChange(t.value))
                            : (i || this.highlightItem(t, !1),
                              this.removeHighlightedItems(!0));
                        }
                      }),
                      (e.prototype._startLoading = function () {
                        this._store.dispatch((0, d.setIsLoading)(!0));
                      }),
                      (e.prototype._stopLoading = function () {
                        this._store.dispatch((0, d.setIsLoading)(!1));
                      }),
                      (e.prototype._handleLoadingState = function (e) {
                        void 0 === e && (e = !0);
                        var t = this.itemList.getChild(
                          ".".concat(this.config.classNames.placeholder)
                        );
                        e
                          ? (this.disable(),
                            this.containerOuter.addLoadingState(),
                            this._isSelectOneElement
                              ? t
                                ? (t.innerHTML = this.config.loadingText)
                                : (t = this._getTemplate(
                                    "placeholder",
                                    this.config.loadingText
                                  )) && this.itemList.append(t)
                              : (this.input.placeholder =
                                  this.config.loadingText))
                          : (this.enable(),
                            this.containerOuter.removeLoadingState(),
                            this._isSelectOneElement
                              ? t &&
                                (t.innerHTML = this._placeholderValue || "")
                              : (this.input.placeholder =
                                  this._placeholderValue || ""));
                      }),
                      (e.prototype._handleSearch = function (e) {
                        if (this.input.isFocussed) {
                          var t = this._store.choices,
                            i = this.config,
                            n = i.searchFloor,
                            s = i.searchChoices,
                            r = t.some(function (e) {
                              return !e.active;
                            });
                          if (null != e && e.length >= n) {
                            var o = s ? this._searchChoices(e) : 0;
                            this.passedElement.triggerEvent(h.EVENTS.search, {
                              value: e,
                              resultCount: o,
                            });
                          } else
                            r &&
                              ((this._isSearching = !1),
                              this._store.dispatch((0, a.activateChoices)(!0)));
                        }
                      }),
                      (e.prototype._canAddItem = function (e, t) {
                        var i = !0,
                          n =
                            "function" == typeof this.config.addItemText
                              ? this.config.addItemText(t)
                              : this.config.addItemText;
                        if (!this._isSelectOneElement) {
                          var s = (0, f.existsInArray)(e, t);
                          this.config.maxItemCount > 0 &&
                            this.config.maxItemCount <= e.length &&
                            ((i = !1),
                            (n =
                              "function" == typeof this.config.maxItemText
                                ? this.config.maxItemText(
                                    this.config.maxItemCount
                                  )
                                : this.config.maxItemText)),
                            !this.config.duplicateItemsAllowed &&
                              s &&
                              i &&
                              ((i = !1),
                              (n =
                                "function" == typeof this.config.uniqueItemText
                                  ? this.config.uniqueItemText(t)
                                  : this.config.uniqueItemText)),
                            this._isTextElement &&
                              this.config.addItems &&
                              i &&
                              "function" == typeof this.config.addItemFilter &&
                              !this.config.addItemFilter(t) &&
                              ((i = !1),
                              (n =
                                "function" ==
                                typeof this.config.customAddItemText
                                  ? this.config.customAddItemText(t)
                                  : this.config.customAddItemText));
                        }
                        return { response: i, notice: n };
                      }),
                      (e.prototype._searchChoices = function (e) {
                        var t = "string" == typeof e ? e.trim() : e,
                          i =
                            "string" == typeof this._currentValue
                              ? this._currentValue.trim()
                              : this._currentValue;
                        if (t.length < 1 && t === "".concat(i, " ")) return 0;
                        var s = this._store.searchableChoices,
                          r = t,
                          l = Object.assign(this.config.fuseOptions, {
                            keys: n([], this.config.searchFields, !0),
                            includeMatches: !0,
                          }),
                          c = new o.default(s, l).search(r);
                        return (
                          (this._currentValue = t),
                          (this._highlightPosition = 0),
                          (this._isSearching = !0),
                          this._store.dispatch((0, a.filterChoices)(c)),
                          c.length
                        );
                      }),
                      (e.prototype._addEventListeners = function () {
                        var e = document.documentElement;
                        e.addEventListener("touchend", this._onTouchEnd, !0),
                          this.containerOuter.element.addEventListener(
                            "keydown",
                            this._onKeyDown,
                            !0
                          ),
                          this.containerOuter.element.addEventListener(
                            "mousedown",
                            this._onMouseDown,
                            !0
                          ),
                          e.addEventListener("click", this._onClick, {
                            passive: !0,
                          }),
                          e.addEventListener("touchmove", this._onTouchMove, {
                            passive: !0,
                          }),
                          this.dropdown.element.addEventListener(
                            "mouseover",
                            this._onMouseOver,
                            { passive: !0 }
                          ),
                          this._isSelectOneElement &&
                            (this.containerOuter.element.addEventListener(
                              "focus",
                              this._onFocus,
                              { passive: !0 }
                            ),
                            this.containerOuter.element.addEventListener(
                              "blur",
                              this._onBlur,
                              { passive: !0 }
                            )),
                          this.input.element.addEventListener(
                            "keyup",
                            this._onKeyUp,
                            { passive: !0 }
                          ),
                          this.input.element.addEventListener(
                            "focus",
                            this._onFocus,
                            { passive: !0 }
                          ),
                          this.input.element.addEventListener(
                            "blur",
                            this._onBlur,
                            { passive: !0 }
                          ),
                          this.input.element.form &&
                            this.input.element.form.addEventListener(
                              "reset",
                              this._onFormReset,
                              { passive: !0 }
                            ),
                          this.input.addEventListeners();
                      }),
                      (e.prototype._removeEventListeners = function () {
                        var e = document.documentElement;
                        e.removeEventListener("touchend", this._onTouchEnd, !0),
                          this.containerOuter.element.removeEventListener(
                            "keydown",
                            this._onKeyDown,
                            !0
                          ),
                          this.containerOuter.element.removeEventListener(
                            "mousedown",
                            this._onMouseDown,
                            !0
                          ),
                          e.removeEventListener("click", this._onClick),
                          e.removeEventListener("touchmove", this._onTouchMove),
                          this.dropdown.element.removeEventListener(
                            "mouseover",
                            this._onMouseOver
                          ),
                          this._isSelectOneElement &&
                            (this.containerOuter.element.removeEventListener(
                              "focus",
                              this._onFocus
                            ),
                            this.containerOuter.element.removeEventListener(
                              "blur",
                              this._onBlur
                            )),
                          this.input.element.removeEventListener(
                            "keyup",
                            this._onKeyUp
                          ),
                          this.input.element.removeEventListener(
                            "focus",
                            this._onFocus
                          ),
                          this.input.element.removeEventListener(
                            "blur",
                            this._onBlur
                          ),
                          this.input.element.form &&
                            this.input.element.form.removeEventListener(
                              "reset",
                              this._onFormReset
                            ),
                          this.input.removeEventListeners();
                      }),
                      (e.prototype._onKeyDown = function (e) {
                        var t = e.keyCode,
                          i = this._store.activeItems,
                          n = this.input.isFocussed,
                          s = this.dropdown.isActive,
                          r = this.itemList.hasChildren(),
                          o = String.fromCharCode(t),
                          a = /[^\x00-\x1F]/.test(o),
                          l = h.KEY_CODES.BACK_KEY,
                          c = h.KEY_CODES.DELETE_KEY,
                          d = h.KEY_CODES.ENTER_KEY,
                          u = h.KEY_CODES.A_KEY,
                          p = h.KEY_CODES.ESC_KEY,
                          f = h.KEY_CODES.UP_KEY,
                          m = h.KEY_CODES.DOWN_KEY,
                          g = h.KEY_CODES.PAGE_UP_KEY,
                          v = h.KEY_CODES.PAGE_DOWN_KEY;
                        switch (
                          (this._isTextElement ||
                            s ||
                            !a ||
                            (this.showDropdown(),
                            this.input.isFocussed ||
                              (this.input.value += e.key.toLowerCase())),
                          t)
                        ) {
                          case u:
                            return this._onSelectKey(e, r);
                          case d:
                            return this._onEnterKey(e, i, s);
                          case p:
                            return this._onEscapeKey(s);
                          case f:
                          case g:
                          case m:
                          case v:
                            return this._onDirectionKey(e, s);
                          case c:
                          case l:
                            return this._onDeleteKey(e, i, n);
                        }
                      }),
                      (e.prototype._onKeyUp = function (e) {
                        var t = e.target,
                          i = e.keyCode,
                          n = this.input.value,
                          s = this._store.activeItems,
                          r = this._canAddItem(s, n),
                          o = h.KEY_CODES.BACK_KEY,
                          l = h.KEY_CODES.DELETE_KEY;
                        if (this._isTextElement)
                          if (r.notice && n) {
                            var c = this._getTemplate("notice", r.notice);
                            (this.dropdown.element.innerHTML = c.outerHTML),
                              this.showDropdown(!0);
                          } else this.hideDropdown(!0);
                        else {
                          var d = (i === o || i === l) && t && !t.value,
                            u = !this._isTextElement && this._isSearching,
                            p = this._canSearch && r.response;
                          d && u
                            ? ((this._isSearching = !1),
                              this._store.dispatch((0, a.activateChoices)(!0)))
                            : p && this._handleSearch(this.input.rawValue);
                        }
                        this._canSearch = this.config.searchEnabled;
                      }),
                      (e.prototype._onSelectKey = function (e, t) {
                        var i = e.ctrlKey,
                          n = e.metaKey;
                        (i || n) &&
                          t &&
                          ((this._canSearch = !1),
                          this.config.removeItems &&
                            !this.input.value &&
                            this.input.element === document.activeElement &&
                            this.highlightAll());
                      }),
                      (e.prototype._onEnterKey = function (e, t, i) {
                        var n = e.target,
                          s = h.KEY_CODES.ENTER_KEY,
                          r = n && n.hasAttribute("data-button");
                        if (this._isTextElement && n && n.value) {
                          var o = this.input.value;
                          this._canAddItem(t, o).response &&
                            (this.hideDropdown(!0),
                            this._addItem({ value: o }),
                            this._triggerChange(o),
                            this.clearInput());
                        }
                        if (
                          (r &&
                            (this._handleButtonAction(t, n),
                            e.preventDefault()),
                          i)
                        ) {
                          var a = this.dropdown.getChild(
                            ".".concat(this.config.classNames.highlightedState)
                          );
                          a &&
                            (t[0] && (t[0].keyCode = s),
                            this._handleChoiceAction(t, a)),
                            e.preventDefault();
                        } else
                          this._isSelectOneElement &&
                            (this.showDropdown(), e.preventDefault());
                      }),
                      (e.prototype._onEscapeKey = function (e) {
                        e &&
                          (this.hideDropdown(!0), this.containerOuter.focus());
                      }),
                      (e.prototype._onDirectionKey = function (e, t) {
                        var i = e.keyCode,
                          n = e.metaKey,
                          s = h.KEY_CODES.DOWN_KEY,
                          r = h.KEY_CODES.PAGE_UP_KEY,
                          o = h.KEY_CODES.PAGE_DOWN_KEY;
                        if (t || this._isSelectOneElement) {
                          this.showDropdown(), (this._canSearch = !1);
                          var a = i === s || i === o ? 1 : -1,
                            l = "[data-choice-selectable]",
                            c = void 0;
                          if (n || i === o || i === r)
                            c =
                              a > 0
                                ? this.dropdown.element.querySelector(
                                    "".concat(l, ":last-of-type")
                                  )
                                : this.dropdown.element.querySelector(l);
                          else {
                            var d = this.dropdown.element.querySelector(
                              ".".concat(
                                this.config.classNames.highlightedState
                              )
                            );
                            c = d
                              ? (0, f.getAdjacentEl)(d, l, a)
                              : this.dropdown.element.querySelector(l);
                          }
                          c &&
                            ((0, f.isScrolledIntoView)(
                              c,
                              this.choiceList.element,
                              a
                            ) || this.choiceList.scrollToChildElement(c, a),
                            this._highlightChoice(c)),
                            e.preventDefault();
                        }
                      }),
                      (e.prototype._onDeleteKey = function (e, t, i) {
                        var n = e.target;
                        this._isSelectOneElement ||
                          n.value ||
                          !i ||
                          (this._handleBackspace(t), e.preventDefault());
                      }),
                      (e.prototype._onTouchMove = function () {
                        this._wasTap && (this._wasTap = !1);
                      }),
                      (e.prototype._onTouchEnd = function (e) {
                        var t = (e || e.touches[0]).target;
                        this._wasTap &&
                          this.containerOuter.element.contains(t) &&
                          ((t === this.containerOuter.element ||
                            t === this.containerInner.element) &&
                            (this._isTextElement
                              ? this.input.focus()
                              : this._isSelectMultipleElement &&
                                this.showDropdown()),
                          e.stopPropagation()),
                          (this._wasTap = !0);
                      }),
                      (e.prototype._onMouseDown = function (e) {
                        var t = e.target;
                        if (t instanceof HTMLElement) {
                          if (b && this.choiceList.element.contains(t)) {
                            var i = this.choiceList.element.firstElementChild,
                              n =
                                "ltr" === this._direction
                                  ? e.offsetX >= i.offsetWidth
                                  : e.offsetX < i.offsetLeft;
                            this._isScrollingOnIe = n;
                          }
                          if (t !== this.input.element) {
                            var s = t.closest(
                              "[data-button],[data-item],[data-choice]"
                            );
                            if (s instanceof HTMLElement) {
                              var r = e.shiftKey,
                                o = this._store.activeItems,
                                a = s.dataset;
                              "button" in a
                                ? this._handleButtonAction(o, s)
                                : "item" in a
                                ? this._handleItemAction(o, s, r)
                                : "choice" in a &&
                                  this._handleChoiceAction(o, s);
                            }
                            e.preventDefault();
                          }
                        }
                      }),
                      (e.prototype._onMouseOver = function (e) {
                        var t = e.target;
                        t instanceof HTMLElement &&
                          "choice" in t.dataset &&
                          this._highlightChoice(t);
                      }),
                      (e.prototype._onClick = function (e) {
                        var t = e.target;
                        this.containerOuter.element.contains(t)
                          ? this.dropdown.isActive ||
                            this.containerOuter.isDisabled
                            ? this._isSelectOneElement &&
                              t !== this.input.element &&
                              !this.dropdown.element.contains(t) &&
                              this.hideDropdown()
                            : this._isTextElement
                            ? document.activeElement !== this.input.element &&
                              this.input.focus()
                            : (this.showDropdown(), this.containerOuter.focus())
                          : (this._store.highlightedActiveItems.length > 0 &&
                              this.unhighlightAll(),
                            this.containerOuter.removeFocusState(),
                            this.hideDropdown(!0));
                      }),
                      (e.prototype._onFocus = function (e) {
                        var t,
                          i = this,
                          n = e.target;
                        n &&
                          this.containerOuter.element.contains(n) &&
                          (((t = {})[h.TEXT_TYPE] = function () {
                            n === i.input.element &&
                              i.containerOuter.addFocusState();
                          }),
                          (t[h.SELECT_ONE_TYPE] = function () {
                            i.containerOuter.addFocusState(),
                              n === i.input.element && i.showDropdown(!0);
                          }),
                          (t[h.SELECT_MULTIPLE_TYPE] = function () {
                            n === i.input.element &&
                              (i.showDropdown(!0),
                              i.containerOuter.addFocusState());
                          }),
                          t)[this.passedElement.element.type]();
                      }),
                      (e.prototype._onBlur = function (e) {
                        var t,
                          i = this,
                          n = e.target;
                        if (
                          n &&
                          this.containerOuter.element.contains(n) &&
                          !this._isScrollingOnIe
                        ) {
                          var s = this._store.activeItems.some(function (e) {
                            return e.highlighted;
                          });
                          (((t = {})[h.TEXT_TYPE] = function () {
                            n === i.input.element &&
                              (i.containerOuter.removeFocusState(),
                              s && i.unhighlightAll(),
                              i.hideDropdown(!0));
                          }),
                          (t[h.SELECT_ONE_TYPE] = function () {
                            i.containerOuter.removeFocusState(),
                              (n === i.input.element ||
                                (n === i.containerOuter.element &&
                                  !i._canSearch)) &&
                                i.hideDropdown(!0);
                          }),
                          (t[h.SELECT_MULTIPLE_TYPE] = function () {
                            n === i.input.element &&
                              (i.containerOuter.removeFocusState(),
                              i.hideDropdown(!0),
                              s && i.unhighlightAll());
                          }),
                          t)[this.passedElement.element.type]();
                        } else
                          (this._isScrollingOnIe = !1),
                            this.input.element.focus();
                      }),
                      (e.prototype._onFormReset = function () {
                        this._store.dispatch(
                          (0, d.resetTo)(this._initialState)
                        );
                      }),
                      (e.prototype._highlightChoice = function (e) {
                        var t = this;
                        void 0 === e && (e = null);
                        var i = Array.from(
                          this.dropdown.element.querySelectorAll(
                            "[data-choice-selectable]"
                          )
                        );
                        if (i.length) {
                          var n = e;
                          Array.from(
                            this.dropdown.element.querySelectorAll(
                              ".".concat(
                                this.config.classNames.highlightedState
                              )
                            )
                          ).forEach(function (e) {
                            e.classList.remove(
                              t.config.classNames.highlightedState
                            ),
                              e.setAttribute("aria-selected", "false");
                          }),
                            n
                              ? (this._highlightPosition = i.indexOf(n))
                              : (n =
                                  i.length > this._highlightPosition
                                    ? i[this._highlightPosition]
                                    : i[i.length - 1]) || (n = i[0]),
                            n.classList.add(
                              this.config.classNames.highlightedState
                            ),
                            n.setAttribute("aria-selected", "true"),
                            this.passedElement.triggerEvent(
                              h.EVENTS.highlightChoice,
                              { el: n }
                            ),
                            this.dropdown.isActive &&
                              (this.input.setActiveDescendant(n.id),
                              this.containerOuter.setActiveDescendant(n.id));
                        }
                      }),
                      (e.prototype._addItem = function (e) {
                        var t = e.value,
                          i = e.label,
                          n = void 0 === i ? null : i,
                          s = e.choiceId,
                          r = void 0 === s ? -1 : s,
                          o = e.groupId,
                          a = void 0 === o ? -1 : o,
                          l = e.customProperties,
                          d = void 0 === l ? {} : l,
                          u = e.placeholder,
                          p = void 0 !== u && u,
                          f = e.keyCode,
                          m = void 0 === f ? -1 : f,
                          g = "string" == typeof t ? t.trim() : t,
                          v = this._store.items,
                          b = n || g,
                          y = r || -1,
                          E = a >= 0 ? this._store.getGroupById(a) : null,
                          _ = v ? v.length + 1 : 1;
                        this.config.prependValue &&
                          (g = this.config.prependValue + g.toString()),
                          this.config.appendValue &&
                            (g += this.config.appendValue.toString()),
                          this._store.dispatch(
                            (0, c.addItem)({
                              value: g,
                              label: b,
                              id: _,
                              choiceId: y,
                              groupId: a,
                              customProperties: d,
                              placeholder: p,
                              keyCode: m,
                            })
                          ),
                          this._isSelectOneElement && this.removeActiveItems(_),
                          this.passedElement.triggerEvent(h.EVENTS.addItem, {
                            id: _,
                            value: g,
                            label: b,
                            customProperties: d,
                            groupValue: E && E.value ? E.value : null,
                            keyCode: m,
                          });
                      }),
                      (e.prototype._removeItem = function (e) {
                        var t = e.id,
                          i = e.value,
                          n = e.label,
                          s = e.customProperties,
                          r = e.choiceId,
                          o = e.groupId,
                          a = o && o >= 0 ? this._store.getGroupById(o) : null;
                        t &&
                          r &&
                          (this._store.dispatch((0, c.removeItem)(t, r)),
                          this.passedElement.triggerEvent(h.EVENTS.removeItem, {
                            id: t,
                            value: i,
                            label: n,
                            customProperties: s,
                            groupValue: a && a.value ? a.value : null,
                          }));
                      }),
                      (e.prototype._addChoice = function (e) {
                        var t = e.value,
                          i = e.label,
                          n = void 0 === i ? null : i,
                          s = e.isSelected,
                          r = void 0 !== s && s,
                          o = e.isDisabled,
                          l = void 0 !== o && o,
                          c = e.groupId,
                          d = void 0 === c ? -1 : c,
                          u = e.customProperties,
                          h = void 0 === u ? {} : u,
                          p = e.placeholder,
                          f = void 0 !== p && p,
                          m = e.keyCode,
                          g = void 0 === m ? -1 : m;
                        if (null != t) {
                          var v = this._store.choices,
                            b = n || t,
                            y = v ? v.length + 1 : 1,
                            E = ""
                              .concat(this._baseId, "-")
                              .concat(this._idNames.itemChoice, "-")
                              .concat(y);
                          this._store.dispatch(
                            (0, a.addChoice)({
                              id: y,
                              groupId: d,
                              elementId: E,
                              value: t,
                              label: b,
                              disabled: l,
                              customProperties: h,
                              placeholder: f,
                              keyCode: g,
                            })
                          ),
                            r &&
                              this._addItem({
                                value: t,
                                label: b,
                                choiceId: y,
                                customProperties: h,
                                placeholder: f,
                                keyCode: g,
                              });
                        }
                      }),
                      (e.prototype._addGroup = function (e) {
                        var t = this,
                          i = e.group,
                          n = e.id,
                          s = e.valueKey,
                          r = void 0 === s ? "value" : s,
                          o = e.labelKey,
                          a = void 0 === o ? "label" : o,
                          c = (0, f.isType)("Object", i)
                            ? i.choices
                            : Array.from(i.getElementsByTagName("OPTION")),
                          d =
                            n ||
                            Math.floor(new Date().valueOf() * Math.random()),
                          u = !!i.disabled && i.disabled;
                        c
                          ? (this._store.dispatch(
                              (0, l.addGroup)({
                                value: i.label,
                                id: d,
                                active: !0,
                                disabled: u,
                              })
                            ),
                            c.forEach(function (e) {
                              var i =
                                e.disabled ||
                                (e.parentNode && e.parentNode.disabled);
                              t._addChoice({
                                value: e[r],
                                label: (0, f.isType)("Object", e)
                                  ? e[a]
                                  : e.innerHTML,
                                isSelected: e.selected,
                                isDisabled: i,
                                groupId: d,
                                customProperties: e.customProperties,
                                placeholder: e.placeholder,
                              });
                            }))
                          : this._store.dispatch(
                              (0, l.addGroup)({
                                value: i.label,
                                id: i.id,
                                active: !1,
                                disabled: i.disabled,
                              })
                            );
                      }),
                      (e.prototype._getTemplate = function (e) {
                        for (var t, i = [], s = 1; s < arguments.length; s++)
                          i[s - 1] = arguments[s];
                        return (t = this._templates[e]).call.apply(
                          t,
                          n([this, this.config], i, !1)
                        );
                      }),
                      (e.prototype._createTemplates = function () {
                        var e = this.config.callbackOnCreateTemplates,
                          t = {};
                        e &&
                          "function" == typeof e &&
                          (t = e.call(this, f.strToEl)),
                          (this._templates = (0, r.default)(v.default, t));
                      }),
                      (e.prototype._createElements = function () {
                        (this.containerOuter = new u.Container({
                          element: this._getTemplate(
                            "containerOuter",
                            this._direction,
                            this._isSelectElement,
                            this._isSelectOneElement,
                            this.config.searchEnabled,
                            this.passedElement.element.type,
                            this.config.labelId
                          ),
                          classNames: this.config.classNames,
                          type: this.passedElement.element.type,
                          position: this.config.position,
                        })),
                          (this.containerInner = new u.Container({
                            element: this._getTemplate("containerInner"),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            position: this.config.position,
                          })),
                          (this.input = new u.Input({
                            element: this._getTemplate(
                              "input",
                              this._placeholderValue
                            ),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            preventPaste: !this.config.paste,
                          })),
                          (this.choiceList = new u.List({
                            element: this._getTemplate(
                              "choiceList",
                              this._isSelectOneElement
                            ),
                          })),
                          (this.itemList = new u.List({
                            element: this._getTemplate(
                              "itemList",
                              this._isSelectOneElement
                            ),
                          })),
                          (this.dropdown = new u.Dropdown({
                            element: this._getTemplate("dropdown"),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                          }));
                      }),
                      (e.prototype._createStructure = function () {
                        this.passedElement.conceal(),
                          this.containerInner.wrap(this.passedElement.element),
                          this.containerOuter.wrap(this.containerInner.element),
                          this._isSelectOneElement
                            ? (this.input.placeholder =
                                this.config.searchPlaceholderValue || "")
                            : this._placeholderValue &&
                              ((this.input.placeholder =
                                this._placeholderValue),
                              this.input.setWidth()),
                          this.containerOuter.element.appendChild(
                            this.containerInner.element
                          ),
                          this.containerOuter.element.appendChild(
                            this.dropdown.element
                          ),
                          this.containerInner.element.appendChild(
                            this.itemList.element
                          ),
                          this._isTextElement ||
                            this.dropdown.element.appendChild(
                              this.choiceList.element
                            ),
                          this._isSelectOneElement
                            ? this.config.searchEnabled &&
                              this.dropdown.element.insertBefore(
                                this.input.element,
                                this.dropdown.element.firstChild
                              )
                            : this.containerInner.element.appendChild(
                                this.input.element
                              ),
                          this._isSelectElement &&
                            ((this._highlightPosition = 0),
                            (this._isSearching = !1),
                            this._startLoading(),
                            this._presetGroups.length
                              ? this._addPredefinedGroups(this._presetGroups)
                              : this._addPredefinedChoices(this._presetChoices),
                            this._stopLoading()),
                          this._isTextElement &&
                            this._addPredefinedItems(this._presetItems);
                      }),
                      (e.prototype._addPredefinedGroups = function (e) {
                        var t = this,
                          i = this.passedElement.placeholderOption;
                        i &&
                          i.parentNode &&
                          "SELECT" === i.parentNode.tagName &&
                          this._addChoice({
                            value: i.value,
                            label: i.innerHTML,
                            isSelected: i.selected,
                            isDisabled: i.disabled,
                            placeholder: !0,
                          }),
                          e.forEach(function (e) {
                            return t._addGroup({ group: e, id: e.id || null });
                          });
                      }),
                      (e.prototype._addPredefinedChoices = function (e) {
                        var t = this;
                        this.config.shouldSort && e.sort(this.config.sorter);
                        var i = e.some(function (e) {
                            return e.selected;
                          }),
                          n = e.findIndex(function (e) {
                            return void 0 === e.disabled || !e.disabled;
                          });
                        e.forEach(function (e, s) {
                          var r = e.value,
                            o = void 0 === r ? "" : r,
                            a = e.label,
                            l = e.customProperties,
                            c = e.placeholder;
                          if (t._isSelectElement)
                            if (e.choices)
                              t._addGroup({ group: e, id: e.id || null });
                            else {
                              var d =
                                  !(!t._isSelectOneElement || i || s !== n) ||
                                  e.selected,
                                u = e.disabled;
                              t._addChoice({
                                value: o,
                                label: a,
                                isSelected: !!d,
                                isDisabled: !!u,
                                placeholder: !!c,
                                customProperties: l,
                              });
                            }
                          else
                            t._addChoice({
                              value: o,
                              label: a,
                              isSelected: !!e.selected,
                              isDisabled: !!e.disabled,
                              placeholder: !!e.placeholder,
                              customProperties: l,
                            });
                        });
                      }),
                      (e.prototype._addPredefinedItems = function (e) {
                        var t = this;
                        e.forEach(function (e) {
                          "object" == typeof e &&
                            e.value &&
                            t._addItem({
                              value: e.value,
                              label: e.label,
                              choiceId: e.id,
                              customProperties: e.customProperties,
                              placeholder: e.placeholder,
                            }),
                            "string" == typeof e && t._addItem({ value: e });
                        });
                      }),
                      (e.prototype._setChoiceOrItem = function (e) {
                        var t = this;
                        ({
                          object: function () {
                            e.value &&
                              (t._isTextElement
                                ? t._addItem({
                                    value: e.value,
                                    label: e.label,
                                    choiceId: e.id,
                                    customProperties: e.customProperties,
                                    placeholder: e.placeholder,
                                  })
                                : t._addChoice({
                                    value: e.value,
                                    label: e.label,
                                    isSelected: !0,
                                    isDisabled: !1,
                                    customProperties: e.customProperties,
                                    placeholder: e.placeholder,
                                  }));
                          },
                          string: function () {
                            t._isTextElement
                              ? t._addItem({ value: e })
                              : t._addChoice({
                                  value: e,
                                  label: e,
                                  isSelected: !0,
                                  isDisabled: !1,
                                });
                          },
                        })[(0, f.getType)(e).toLowerCase()]();
                      }),
                      (e.prototype._findAndSelectChoiceByValue = function (e) {
                        var t = this,
                          i = this._store.choices.find(function (i) {
                            return t.config.valueComparer(i.value, e);
                          });
                        i &&
                          !i.selected &&
                          this._addItem({
                            value: i.value,
                            label: i.label,
                            choiceId: i.id,
                            groupId: i.groupId,
                            customProperties: i.customProperties,
                            placeholder: i.placeholder,
                            keyCode: i.keyCode,
                          });
                      }),
                      (e.prototype._generatePlaceholderValue = function () {
                        if (
                          this._isSelectElement &&
                          this.passedElement.placeholderOption
                        ) {
                          var e = this.passedElement.placeholderOption;
                          return e ? e.text : null;
                        }
                        var t = this.config,
                          i = t.placeholder,
                          n = t.placeholderValue,
                          s = this.passedElement.element.dataset;
                        if (i) {
                          if (n) return n;
                          if (s.placeholder) return s.placeholder;
                        }
                        return null;
                      }),
                      e
                    );
                  })();
                t.default = E;
              },
              613: function (e, t, i) {
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = i(799),
                  s = i(883),
                  r = (function () {
                    function e(e) {
                      var t = e.element,
                        i = e.type,
                        n = e.classNames,
                        s = e.position;
                      (this.element = t),
                        (this.classNames = n),
                        (this.type = i),
                        (this.position = s),
                        (this.isOpen = !1),
                        (this.isFlipped = !1),
                        (this.isFocussed = !1),
                        (this.isDisabled = !1),
                        (this.isLoading = !1),
                        (this._onFocus = this._onFocus.bind(this)),
                        (this._onBlur = this._onBlur.bind(this));
                    }
                    return (
                      (e.prototype.addEventListeners = function () {
                        this.element.addEventListener("focus", this._onFocus),
                          this.element.addEventListener("blur", this._onBlur);
                      }),
                      (e.prototype.removeEventListeners = function () {
                        this.element.removeEventListener(
                          "focus",
                          this._onFocus
                        ),
                          this.element.removeEventListener(
                            "blur",
                            this._onBlur
                          );
                      }),
                      (e.prototype.shouldFlip = function (e) {
                        if ("number" != typeof e) return !1;
                        var t = !1;
                        return (
                          "auto" === this.position
                            ? (t = !window.matchMedia(
                                "(min-height: ".concat(e + 1, "px)")
                              ).matches)
                            : "top" === this.position && (t = !0),
                          t
                        );
                      }),
                      (e.prototype.setActiveDescendant = function (e) {
                        this.element.setAttribute("aria-activedescendant", e);
                      }),
                      (e.prototype.removeActiveDescendant = function () {
                        this.element.removeAttribute("aria-activedescendant");
                      }),
                      (e.prototype.open = function (e) {
                        this.element.classList.add(this.classNames.openState),
                          this.element.setAttribute("aria-expanded", "true"),
                          (this.isOpen = !0),
                          this.shouldFlip(e) &&
                            (this.element.classList.add(
                              this.classNames.flippedState
                            ),
                            (this.isFlipped = !0));
                      }),
                      (e.prototype.close = function () {
                        this.element.classList.remove(
                          this.classNames.openState
                        ),
                          this.element.setAttribute("aria-expanded", "false"),
                          this.removeActiveDescendant(),
                          (this.isOpen = !1),
                          this.isFlipped &&
                            (this.element.classList.remove(
                              this.classNames.flippedState
                            ),
                            (this.isFlipped = !1));
                      }),
                      (e.prototype.focus = function () {
                        this.isFocussed || this.element.focus();
                      }),
                      (e.prototype.addFocusState = function () {
                        this.element.classList.add(this.classNames.focusState);
                      }),
                      (e.prototype.removeFocusState = function () {
                        this.element.classList.remove(
                          this.classNames.focusState
                        );
                      }),
                      (e.prototype.enable = function () {
                        this.element.classList.remove(
                          this.classNames.disabledState
                        ),
                          this.element.removeAttribute("aria-disabled"),
                          this.type === s.SELECT_ONE_TYPE &&
                            this.element.setAttribute("tabindex", "0"),
                          (this.isDisabled = !1);
                      }),
                      (e.prototype.disable = function () {
                        this.element.classList.add(
                          this.classNames.disabledState
                        ),
                          this.element.setAttribute("aria-disabled", "true"),
                          this.type === s.SELECT_ONE_TYPE &&
                            this.element.setAttribute("tabindex", "-1"),
                          (this.isDisabled = !0);
                      }),
                      (e.prototype.wrap = function (e) {
                        (0, n.wrap)(e, this.element);
                      }),
                      (e.prototype.unwrap = function (e) {
                        this.element.parentNode &&
                          (this.element.parentNode.insertBefore(
                            e,
                            this.element
                          ),
                          this.element.parentNode.removeChild(this.element));
                      }),
                      (e.prototype.addLoadingState = function () {
                        this.element.classList.add(
                          this.classNames.loadingState
                        ),
                          this.element.setAttribute("aria-busy", "true"),
                          (this.isLoading = !0);
                      }),
                      (e.prototype.removeLoadingState = function () {
                        this.element.classList.remove(
                          this.classNames.loadingState
                        ),
                          this.element.removeAttribute("aria-busy"),
                          (this.isLoading = !1);
                      }),
                      (e.prototype._onFocus = function () {
                        this.isFocussed = !0;
                      }),
                      (e.prototype._onBlur = function () {
                        this.isFocussed = !1;
                      }),
                      e
                    );
                  })();
                t.default = r;
              },
              217: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
                var i = (function () {
                  function e(e) {
                    var t = e.element,
                      i = e.type,
                      n = e.classNames;
                    (this.element = t),
                      (this.classNames = n),
                      (this.type = i),
                      (this.isActive = !1);
                  }
                  return (
                    Object.defineProperty(
                      e.prototype,
                      "distanceFromTopWindow",
                      {
                        get: function () {
                          return this.element.getBoundingClientRect().bottom;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }
                    ),
                    (e.prototype.getChild = function (e) {
                      return this.element.querySelector(e);
                    }),
                    (e.prototype.show = function () {
                      return (
                        this.element.classList.add(this.classNames.activeState),
                        this.element.setAttribute("aria-expanded", "true"),
                        (this.isActive = !0),
                        this
                      );
                    }),
                    (e.prototype.hide = function () {
                      return (
                        this.element.classList.remove(
                          this.classNames.activeState
                        ),
                        this.element.setAttribute("aria-expanded", "false"),
                        (this.isActive = !1),
                        this
                      );
                    }),
                    e
                  );
                })();
                t.default = i;
              },
              520: function (e, t, i) {
                var n =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.WrappedSelect =
                    t.WrappedInput =
                    t.List =
                    t.Input =
                    t.Container =
                    t.Dropdown =
                      void 0);
                var s = n(i(217));
                t.Dropdown = s.default;
                var r = n(i(613));
                t.Container = r.default;
                var o = n(i(11));
                t.Input = o.default;
                var a = n(i(624));
                t.List = a.default;
                var l = n(i(541));
                t.WrappedInput = l.default;
                var c = n(i(982));
                t.WrappedSelect = c.default;
              },
              11: function (e, t, i) {
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = i(799),
                  s = i(883),
                  r = (function () {
                    function e(e) {
                      var t = e.element,
                        i = e.type,
                        n = e.classNames,
                        s = e.preventPaste;
                      (this.element = t),
                        (this.type = i),
                        (this.classNames = n),
                        (this.preventPaste = s),
                        (this.isFocussed = this.element.isEqualNode(
                          document.activeElement
                        )),
                        (this.isDisabled = t.disabled),
                        (this._onPaste = this._onPaste.bind(this)),
                        (this._onInput = this._onInput.bind(this)),
                        (this._onFocus = this._onFocus.bind(this)),
                        (this._onBlur = this._onBlur.bind(this));
                    }
                    return (
                      Object.defineProperty(e.prototype, "placeholder", {
                        set: function (e) {
                          this.element.placeholder = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "value", {
                        get: function () {
                          return (0, n.sanitise)(this.element.value);
                        },
                        set: function (e) {
                          this.element.value = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "rawValue", {
                        get: function () {
                          return this.element.value;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.addEventListeners = function () {
                        this.element.addEventListener("paste", this._onPaste),
                          this.element.addEventListener(
                            "input",
                            this._onInput,
                            { passive: !0 }
                          ),
                          this.element.addEventListener(
                            "focus",
                            this._onFocus,
                            { passive: !0 }
                          ),
                          this.element.addEventListener("blur", this._onBlur, {
                            passive: !0,
                          });
                      }),
                      (e.prototype.removeEventListeners = function () {
                        this.element.removeEventListener(
                          "input",
                          this._onInput
                        ),
                          this.element.removeEventListener(
                            "paste",
                            this._onPaste
                          ),
                          this.element.removeEventListener(
                            "focus",
                            this._onFocus
                          ),
                          this.element.removeEventListener(
                            "blur",
                            this._onBlur
                          );
                      }),
                      (e.prototype.enable = function () {
                        this.element.removeAttribute("disabled"),
                          (this.isDisabled = !1);
                      }),
                      (e.prototype.disable = function () {
                        this.element.setAttribute("disabled", ""),
                          (this.isDisabled = !0);
                      }),
                      (e.prototype.focus = function () {
                        this.isFocussed || this.element.focus();
                      }),
                      (e.prototype.blur = function () {
                        this.isFocussed && this.element.blur();
                      }),
                      (e.prototype.clear = function (e) {
                        return (
                          void 0 === e && (e = !0),
                          this.element.value && (this.element.value = ""),
                          e && this.setWidth(),
                          this
                        );
                      }),
                      (e.prototype.setWidth = function () {
                        var e = this.element,
                          t = e.style,
                          i = e.value,
                          n = e.placeholder;
                        (t.minWidth = "".concat(n.length + 1, "ch")),
                          (t.width = "".concat(i.length + 1, "ch"));
                      }),
                      (e.prototype.setActiveDescendant = function (e) {
                        this.element.setAttribute("aria-activedescendant", e);
                      }),
                      (e.prototype.removeActiveDescendant = function () {
                        this.element.removeAttribute("aria-activedescendant");
                      }),
                      (e.prototype._onInput = function () {
                        this.type !== s.SELECT_ONE_TYPE && this.setWidth();
                      }),
                      (e.prototype._onPaste = function (e) {
                        this.preventPaste && e.preventDefault();
                      }),
                      (e.prototype._onFocus = function () {
                        this.isFocussed = !0;
                      }),
                      (e.prototype._onBlur = function () {
                        this.isFocussed = !1;
                      }),
                      e
                    );
                  })();
                t.default = r;
              },
              624: function (e, t, i) {
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = i(883),
                  s = (function () {
                    function e(e) {
                      var t = e.element;
                      (this.element = t),
                        (this.scrollPos = this.element.scrollTop),
                        (this.height = this.element.offsetHeight);
                    }
                    return (
                      (e.prototype.clear = function () {
                        this.element.innerHTML = "";
                      }),
                      (e.prototype.append = function (e) {
                        this.element.appendChild(e);
                      }),
                      (e.prototype.getChild = function (e) {
                        return this.element.querySelector(e);
                      }),
                      (e.prototype.hasChildren = function () {
                        return this.element.hasChildNodes();
                      }),
                      (e.prototype.scrollToTop = function () {
                        this.element.scrollTop = 0;
                      }),
                      (e.prototype.scrollToChildElement = function (e, t) {
                        var i = this;
                        if (e) {
                          var n = this.element.offsetHeight,
                            s = this.element.scrollTop + n,
                            r = e.offsetHeight,
                            o = e.offsetTop + r,
                            a =
                              t > 0
                                ? this.element.scrollTop + o - s
                                : e.offsetTop;
                          requestAnimationFrame(function () {
                            i._animateScroll(a, t);
                          });
                        }
                      }),
                      (e.prototype._scrollDown = function (e, t, i) {
                        var n = (i - e) / t,
                          s = n > 1 ? n : 1;
                        this.element.scrollTop = e + s;
                      }),
                      (e.prototype._scrollUp = function (e, t, i) {
                        var n = (e - i) / t,
                          s = n > 1 ? n : 1;
                        this.element.scrollTop = e - s;
                      }),
                      (e.prototype._animateScroll = function (e, t) {
                        var i = this,
                          s = n.SCROLLING_SPEED,
                          r = this.element.scrollTop,
                          o = !1;
                        t > 0
                          ? (this._scrollDown(r, s, e), r < e && (o = !0))
                          : (this._scrollUp(r, s, e), r > e && (o = !0)),
                          o &&
                            requestAnimationFrame(function () {
                              i._animateScroll(e, t);
                            });
                      }),
                      e
                    );
                  })();
                t.default = s;
              },
              730: function (e, t, i) {
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = i(799),
                  s = (function () {
                    function e(e) {
                      var t = e.element,
                        i = e.classNames;
                      if (
                        ((this.element = t),
                        (this.classNames = i),
                        !(
                          t instanceof HTMLInputElement ||
                          t instanceof HTMLSelectElement
                        ))
                      )
                        throw new TypeError("Invalid element passed");
                      this.isDisabled = !1;
                    }
                    return (
                      Object.defineProperty(e.prototype, "isActive", {
                        get: function () {
                          return "active" === this.element.dataset.choice;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "dir", {
                        get: function () {
                          return this.element.dir;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "value", {
                        get: function () {
                          return this.element.value;
                        },
                        set: function (e) {
                          this.element.value = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.conceal = function () {
                        this.element.classList.add(this.classNames.input),
                          (this.element.hidden = !0),
                          (this.element.tabIndex = -1);
                        var e = this.element.getAttribute("style");
                        e &&
                          this.element.setAttribute(
                            "data-choice-orig-style",
                            e
                          ),
                          this.element.setAttribute("data-choice", "active");
                      }),
                      (e.prototype.reveal = function () {
                        this.element.classList.remove(this.classNames.input),
                          (this.element.hidden = !1),
                          this.element.removeAttribute("tabindex");
                        var e = this.element.getAttribute(
                          "data-choice-orig-style"
                        );
                        e
                          ? (this.element.removeAttribute(
                              "data-choice-orig-style"
                            ),
                            this.element.setAttribute("style", e))
                          : this.element.removeAttribute("style"),
                          this.element.removeAttribute("data-choice"),
                          (this.element.value = this.element.value);
                      }),
                      (e.prototype.enable = function () {
                        this.element.removeAttribute("disabled"),
                          (this.element.disabled = !1),
                          (this.isDisabled = !1);
                      }),
                      (e.prototype.disable = function () {
                        this.element.setAttribute("disabled", ""),
                          (this.element.disabled = !0),
                          (this.isDisabled = !0);
                      }),
                      (e.prototype.triggerEvent = function (e, t) {
                        (0, n.dispatchEvent)(this.element, e, t);
                      }),
                      e
                    );
                  })();
                t.default = s;
              },
              541: function (e, t, i) {
                var n,
                  s =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var i in t)
                              Object.prototype.hasOwnProperty.call(t, i) &&
                                (e[i] = t[i]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Class extends value " +
                            String(t) +
                            " is not a constructor or null"
                        );
                      function i() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((i.prototype = t.prototype), new i()));
                    }),
                  r =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t(t) {
                    var i = t.element,
                      n = t.classNames,
                      s = t.delimiter,
                      r = e.call(this, { element: i, classNames: n }) || this;
                    return (r.delimiter = s), r;
                  }
                  return (
                    s(t, e),
                    Object.defineProperty(t.prototype, "value", {
                      get: function () {
                        return this.element.value;
                      },
                      set: function (e) {
                        this.element.setAttribute("value", e),
                          (this.element.value = e);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    t
                  );
                })(r(i(730)).default);
                t.default = o;
              },
              982: function (e, t, i) {
                var n,
                  s =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var i in t)
                              Object.prototype.hasOwnProperty.call(t, i) &&
                                (e[i] = t[i]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Class extends value " +
                            String(t) +
                            " is not a constructor or null"
                        );
                      function i() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((i.prototype = t.prototype), new i()));
                    }),
                  r =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t(t) {
                    var i = t.element,
                      n = t.classNames,
                      s = t.template,
                      r = e.call(this, { element: i, classNames: n }) || this;
                    return (r.template = s), r;
                  }
                  return (
                    s(t, e),
                    Object.defineProperty(t.prototype, "placeholderOption", {
                      get: function () {
                        return (
                          this.element.querySelector('option[value=""]') ||
                          this.element.querySelector("option[placeholder]")
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "optionGroups", {
                      get: function () {
                        return Array.from(
                          this.element.getElementsByTagName("OPTGROUP")
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "options", {
                      get: function () {
                        return Array.from(this.element.options);
                      },
                      set: function (e) {
                        var t = this,
                          i = document.createDocumentFragment();
                        e.forEach(function (e) {
                          return (
                            (n = e), (s = t.template(n)), void i.appendChild(s)
                          );
                          var n, s;
                        }),
                          this.appendDocFragment(i);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.appendDocFragment = function (e) {
                      (this.element.innerHTML = ""),
                        this.element.appendChild(e);
                    }),
                    t
                  );
                })(r(i(730)).default);
                t.default = o;
              },
              883: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.SCROLLING_SPEED =
                    t.SELECT_MULTIPLE_TYPE =
                    t.SELECT_ONE_TYPE =
                    t.TEXT_TYPE =
                    t.KEY_CODES =
                    t.ACTION_TYPES =
                    t.EVENTS =
                      void 0),
                  (t.EVENTS = {
                    showDropdown: "showDropdown",
                    hideDropdown: "hideDropdown",
                    change: "change",
                    choice: "choice",
                    search: "search",
                    addItem: "addItem",
                    removeItem: "removeItem",
                    highlightItem: "highlightItem",
                    highlightChoice: "highlightChoice",
                    unhighlightItem: "unhighlightItem",
                  }),
                  (t.ACTION_TYPES = {
                    ADD_CHOICE: "ADD_CHOICE",
                    FILTER_CHOICES: "FILTER_CHOICES",
                    ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                    CLEAR_CHOICES: "CLEAR_CHOICES",
                    ADD_GROUP: "ADD_GROUP",
                    ADD_ITEM: "ADD_ITEM",
                    REMOVE_ITEM: "REMOVE_ITEM",
                    HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                    CLEAR_ALL: "CLEAR_ALL",
                    RESET_TO: "RESET_TO",
                    SET_IS_LOADING: "SET_IS_LOADING",
                  }),
                  (t.KEY_CODES = {
                    BACK_KEY: 46,
                    DELETE_KEY: 8,
                    ENTER_KEY: 13,
                    A_KEY: 65,
                    ESC_KEY: 27,
                    UP_KEY: 38,
                    DOWN_KEY: 40,
                    PAGE_UP_KEY: 33,
                    PAGE_DOWN_KEY: 34,
                  }),
                  (t.TEXT_TYPE = "text"),
                  (t.SELECT_ONE_TYPE = "select-one"),
                  (t.SELECT_MULTIPLE_TYPE = "select-multiple"),
                  (t.SCROLLING_SPEED = 4);
              },
              789: function (e, t, i) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.DEFAULT_CONFIG = t.DEFAULT_CLASSNAMES = void 0);
                var n = i(799);
                (t.DEFAULT_CLASSNAMES = {
                  containerOuter: "choices",
                  containerInner: "choices__inner",
                  input: "choices__input",
                  inputCloned: "choices__input--cloned",
                  list: "choices__list",
                  listItems: "choices__list--multiple",
                  listSingle: "choices__list--single",
                  listDropdown: "choices__list--dropdown",
                  item: "choices__item",
                  itemSelectable: "choices__item--selectable",
                  itemDisabled: "choices__item--disabled",
                  itemChoice: "choices__item--choice",
                  placeholder: "choices__placeholder",
                  group: "choices__group",
                  groupHeading: "choices__heading",
                  button: "choices__button",
                  activeState: "is-active",
                  focusState: "is-focused",
                  openState: "is-open",
                  disabledState: "is-disabled",
                  highlightedState: "is-highlighted",
                  selectedState: "is-selected",
                  flippedState: "is-flipped",
                  loadingState: "is-loading",
                  noResults: "has-no-results",
                  noChoices: "has-no-choices",
                }),
                  (t.DEFAULT_CONFIG = {
                    items: [],
                    choices: [],
                    silent: !1,
                    renderChoiceLimit: -1,
                    maxItemCount: -1,
                    addItems: !0,
                    addItemFilter: null,
                    removeItems: !0,
                    removeItemButton: !1,
                    editItems: !1,
                    allowHTML: !0,
                    duplicateItemsAllowed: !0,
                    delimiter: ",",
                    paste: !0,
                    searchEnabled: !0,
                    searchChoices: !0,
                    searchFloor: 1,
                    searchResultLimit: 4,
                    searchFields: ["label", "value"],
                    position: "auto",
                    resetScrollPosition: !0,
                    shouldSort: !0,
                    shouldSortItems: !1,
                    sorter: n.sortByAlpha,
                    placeholder: !0,
                    placeholderValue: null,
                    searchPlaceholderValue: null,
                    prependValue: null,
                    appendValue: null,
                    renderSelectedChoices: "auto",
                    loadingText: "Loading...",
                    noResultsText: "No results found",
                    noChoicesText: "No choices to choose from",
                    itemSelectText: "Press to select",
                    uniqueItemText: "Only unique values can be added",
                    customAddItemText:
                      "Only values matching specific conditions can be added",
                    addItemText: function (e) {
                      return 'Press Enter to add <b>"'.concat(
                        (0, n.sanitise)(e),
                        '"</b>'
                      );
                    },
                    maxItemText: function (e) {
                      return "Only ".concat(e, " values can be added");
                    },
                    valueComparer: function (e, t) {
                      return e === t;
                    },
                    fuseOptions: { includeScore: !0 },
                    labelId: "",
                    callbackOnInit: null,
                    callbackOnCreateTemplates: null,
                    classNames: t.DEFAULT_CLASSNAMES,
                  });
              },
              18: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              978: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              948: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              359: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              285: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              533: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              187: function (e, t, i) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, i, n) {
                          void 0 === n && (n = i);
                          var s = Object.getOwnPropertyDescriptor(t, i);
                          (s &&
                            !("get" in s
                              ? !t.__esModule
                              : s.writable || s.configurable)) ||
                            (s = {
                              enumerable: !0,
                              get: function () {
                                return t[i];
                              },
                            }),
                            Object.defineProperty(e, n, s);
                        }
                      : function (e, t, i, n) {
                          void 0 === n && (n = i), (e[n] = t[i]);
                        }),
                  s =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var i in e)
                        "default" === i ||
                          Object.prototype.hasOwnProperty.call(t, i) ||
                          n(t, e, i);
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  s(i(18), t),
                  s(i(978), t),
                  s(i(948), t),
                  s(i(359), t),
                  s(i(285), t),
                  s(i(533), t),
                  s(i(287), t),
                  s(i(132), t),
                  s(i(837), t),
                  s(i(598), t),
                  s(i(369), t),
                  s(i(37), t),
                  s(i(47), t),
                  s(i(923), t),
                  s(i(876), t);
              },
              287: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              132: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              837: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              598: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              37: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              369: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              47: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              923: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              876: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
              },
              799: function (e, t) {
                var i;
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.parseCustomProperties =
                    t.diff =
                    t.cloneObject =
                    t.existsInArray =
                    t.dispatchEvent =
                    t.sortByScore =
                    t.sortByAlpha =
                    t.strToEl =
                    t.sanitise =
                    t.isScrolledIntoView =
                    t.getAdjacentEl =
                    t.wrap =
                    t.isType =
                    t.getType =
                    t.generateId =
                    t.generateChars =
                    t.getRandomNumber =
                      void 0),
                  (t.getRandomNumber = function (e, t) {
                    return Math.floor(Math.random() * (t - e) + e);
                  }),
                  (t.generateChars = function (e) {
                    return Array.from({ length: e }, function () {
                      return (0, t.getRandomNumber)(0, 36).toString(36);
                    }).join("");
                  }),
                  (t.generateId = function (e, i) {
                    var n =
                      e.id ||
                      (e.name &&
                        ""
                          .concat(e.name, "-")
                          .concat((0, t.generateChars)(2))) ||
                      (0, t.generateChars)(4);
                    return (
                      (n = n.replace(/(:|\.|\[|\]|,)/g, "")),
                      "".concat(i, "-").concat(n)
                    );
                  }),
                  (t.getType = function (e) {
                    return Object.prototype.toString.call(e).slice(8, -1);
                  }),
                  (t.isType = function (e, i) {
                    return null != i && (0, t.getType)(i) === e;
                  }),
                  (t.wrap = function (e, t) {
                    return (
                      void 0 === t && (t = document.createElement("div")),
                      e.parentNode &&
                        (e.nextSibling
                          ? e.parentNode.insertBefore(t, e.nextSibling)
                          : e.parentNode.appendChild(t)),
                      t.appendChild(e)
                    );
                  }),
                  (t.getAdjacentEl = function (e, t, i) {
                    void 0 === i && (i = 1);
                    for (
                      var n = "".concat(
                          i > 0 ? "next" : "previous",
                          "ElementSibling"
                        ),
                        s = e[n];
                      s;

                    ) {
                      if (s.matches(t)) return s;
                      s = s[n];
                    }
                    return s;
                  }),
                  (t.isScrolledIntoView = function (e, t, i) {
                    return (
                      void 0 === i && (i = 1),
                      !!e &&
                        (i > 0
                          ? t.scrollTop + t.offsetHeight >=
                            e.offsetTop + e.offsetHeight
                          : e.offsetTop >= t.scrollTop)
                    );
                  }),
                  (t.sanitise = function (e) {
                    return "string" != typeof e
                      ? e
                      : e
                          .replace(/&/g, "&amp;")
                          .replace(/>/g, "&gt;")
                          .replace(/</g, "&lt;")
                          .replace(/"/g, "&quot;");
                  }),
                  (t.strToEl =
                    ((i = document.createElement("div")),
                    function (e) {
                      var t = e.trim();
                      i.innerHTML = t;
                      for (var n = i.children[0]; i.firstChild; )
                        i.removeChild(i.firstChild);
                      return n;
                    })),
                  (t.sortByAlpha = function (e, t) {
                    var i = e.value,
                      n = e.label,
                      s = void 0 === n ? i : n,
                      r = t.value,
                      o = t.label,
                      a = void 0 === o ? r : o;
                    return s.localeCompare(a, [], {
                      sensitivity: "base",
                      ignorePunctuation: !0,
                      numeric: !0,
                    });
                  }),
                  (t.sortByScore = function (e, t) {
                    var i = e.score,
                      n = void 0 === i ? 0 : i,
                      s = t.score;
                    return n - (void 0 === s ? 0 : s);
                  }),
                  (t.dispatchEvent = function (e, t, i) {
                    void 0 === i && (i = null);
                    var n = new CustomEvent(t, {
                      detail: i,
                      bubbles: !0,
                      cancelable: !0,
                    });
                    return e.dispatchEvent(n);
                  }),
                  (t.existsInArray = function (e, t, i) {
                    return (
                      void 0 === i && (i = "value"),
                      e.some(function (e) {
                        return "string" == typeof t
                          ? e[i] === t.trim()
                          : e[i] === t;
                      })
                    );
                  }),
                  (t.cloneObject = function (e) {
                    return JSON.parse(JSON.stringify(e));
                  }),
                  (t.diff = function (e, t) {
                    var i = Object.keys(e).sort(),
                      n = Object.keys(t).sort();
                    return i.filter(function (e) {
                      return n.indexOf(e) < 0;
                    });
                  }),
                  (t.parseCustomProperties = function (e) {
                    if (void 0 !== e)
                      try {
                        return JSON.parse(e);
                      } catch (t) {
                        return e;
                      }
                    return {};
                  });
              },
              273: function (e, t) {
                var i =
                  (this && this.__spreadArray) ||
                  function (e, t, i) {
                    if (i || 2 === arguments.length)
                      for (var n, s = 0, r = t.length; s < r; s++)
                        (!n && s in t) ||
                          (n || (n = Array.prototype.slice.call(t, 0, s)),
                          (n[s] = t[s]));
                    return e.concat(n || Array.prototype.slice.call(t));
                  };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.defaultState = void 0),
                  (t.defaultState = []),
                  (t.default = function (e, n) {
                    switch (
                      (void 0 === e && (e = t.defaultState),
                      void 0 === n && (n = {}),
                      n.type)
                    ) {
                      case "ADD_CHOICE":
                        var s = n,
                          r = {
                            id: s.id,
                            elementId: s.elementId,
                            groupId: s.groupId,
                            value: s.value,
                            label: s.label || s.value,
                            disabled: s.disabled || !1,
                            selected: !1,
                            active: !0,
                            score: 9999,
                            customProperties: s.customProperties,
                            placeholder: s.placeholder || !1,
                          };
                        return i(i([], e, !0), [r], !1);
                      case "ADD_ITEM":
                        var o = n;
                        return o.choiceId > -1
                          ? e.map(function (e) {
                              var t = e;
                              return (
                                t.id === parseInt("".concat(o.choiceId), 10) &&
                                  (t.selected = !0),
                                t
                              );
                            })
                          : e;
                      case "REMOVE_ITEM":
                        var a = n;
                        return a.choiceId && a.choiceId > -1
                          ? e.map(function (e) {
                              var t = e;
                              return (
                                t.id === parseInt("".concat(a.choiceId), 10) &&
                                  (t.selected = !1),
                                t
                              );
                            })
                          : e;
                      case "FILTER_CHOICES":
                        var l = n;
                        return e.map(function (e) {
                          var t = e;
                          return (
                            (t.active = l.results.some(function (e) {
                              var i = e.item,
                                n = e.score;
                              return i.id === t.id && ((t.score = n), !0);
                            })),
                            t
                          );
                        });
                      case "ACTIVATE_CHOICES":
                        var c = n;
                        return e.map(function (e) {
                          var t = e;
                          return (t.active = c.active), t;
                        });
                      case "CLEAR_CHOICES":
                        return t.defaultState;
                      default:
                        return e;
                    }
                  });
              },
              871: function (e, t) {
                var i =
                  (this && this.__spreadArray) ||
                  function (e, t, i) {
                    if (i || 2 === arguments.length)
                      for (var n, s = 0, r = t.length; s < r; s++)
                        (!n && s in t) ||
                          (n || (n = Array.prototype.slice.call(t, 0, s)),
                          (n[s] = t[s]));
                    return e.concat(n || Array.prototype.slice.call(t));
                  };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.defaultState = void 0),
                  (t.defaultState = []),
                  (t.default = function (e, n) {
                    switch (
                      (void 0 === e && (e = t.defaultState),
                      void 0 === n && (n = {}),
                      n.type)
                    ) {
                      case "ADD_GROUP":
                        var s = n;
                        return i(
                          i([], e, !0),
                          [
                            {
                              id: s.id,
                              value: s.value,
                              active: s.active,
                              disabled: s.disabled,
                            },
                          ],
                          !1
                        );
                      case "CLEAR_CHOICES":
                        return [];
                      default:
                        return e;
                    }
                  });
              },
              655: function (e, t, i) {
                var n =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.defaultState = void 0);
                var s = i(791),
                  r = n(i(52)),
                  o = n(i(871)),
                  a = n(i(273)),
                  l = n(i(502)),
                  c = i(799);
                t.defaultState = {
                  groups: [],
                  items: [],
                  choices: [],
                  loading: !1,
                };
                var d = (0, s.combineReducers)({
                  items: r.default,
                  groups: o.default,
                  choices: a.default,
                  loading: l.default,
                });
                t.default = function (e, i) {
                  var n = e;
                  if ("CLEAR_ALL" === i.type) n = t.defaultState;
                  else if ("RESET_TO" === i.type)
                    return (0, c.cloneObject)(i.state);
                  return d(n, i);
                };
              },
              52: function (e, t) {
                var i =
                  (this && this.__spreadArray) ||
                  function (e, t, i) {
                    if (i || 2 === arguments.length)
                      for (var n, s = 0, r = t.length; s < r; s++)
                        (!n && s in t) ||
                          (n || (n = Array.prototype.slice.call(t, 0, s)),
                          (n[s] = t[s]));
                    return e.concat(n || Array.prototype.slice.call(t));
                  };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.defaultState = void 0),
                  (t.defaultState = []),
                  (t.default = function (e, n) {
                    switch (
                      (void 0 === e && (e = t.defaultState),
                      void 0 === n && (n = {}),
                      n.type)
                    ) {
                      case "ADD_ITEM":
                        var s = n;
                        return i(
                          i([], e, !0),
                          [
                            {
                              id: s.id,
                              choiceId: s.choiceId,
                              groupId: s.groupId,
                              value: s.value,
                              label: s.label,
                              active: !0,
                              highlighted: !1,
                              customProperties: s.customProperties,
                              placeholder: s.placeholder || !1,
                              keyCode: null,
                            },
                          ],
                          !1
                        ).map(function (e) {
                          var t = e;
                          return (t.highlighted = !1), t;
                        });
                      case "REMOVE_ITEM":
                        return e.map(function (e) {
                          var t = e;
                          return t.id === n.id && (t.active = !1), t;
                        });
                      case "HIGHLIGHT_ITEM":
                        var r = n;
                        return e.map(function (e) {
                          var t = e;
                          return (
                            t.id === r.id && (t.highlighted = r.highlighted), t
                          );
                        });
                      default:
                        return e;
                    }
                  });
              },
              502: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.defaultState = void 0),
                  (t.defaultState = !1),
                  (t.default = function (e, i) {
                    return (
                      void 0 === e && (e = t.defaultState),
                      void 0 === i && (i = {}),
                      "SET_IS_LOADING" === i.type ? i.isLoading : e
                    );
                  });
              },
              744: function (e, t, i) {
                var n =
                    (this && this.__spreadArray) ||
                    function (e, t, i) {
                      if (i || 2 === arguments.length)
                        for (var n, s = 0, r = t.length; s < r; s++)
                          (!n && s in t) ||
                            (n || (n = Array.prototype.slice.call(t, 0, s)),
                            (n[s] = t[s]));
                      return e.concat(n || Array.prototype.slice.call(t));
                    },
                  s =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r = i(791),
                  o = s(i(655)),
                  a = (function () {
                    function e() {
                      this._store = (0, r.createStore)(
                        o.default,
                        window.__REDUX_DEVTOOLS_EXTENSION__ &&
                          window.__REDUX_DEVTOOLS_EXTENSION__()
                      );
                    }
                    return (
                      (e.prototype.subscribe = function (e) {
                        this._store.subscribe(e);
                      }),
                      (e.prototype.dispatch = function (e) {
                        this._store.dispatch(e);
                      }),
                      Object.defineProperty(e.prototype, "state", {
                        get: function () {
                          return this._store.getState();
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "items", {
                        get: function () {
                          return this.state.items;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "activeItems", {
                        get: function () {
                          return this.items.filter(function (e) {
                            return !0 === e.active;
                          });
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(
                        e.prototype,
                        "highlightedActiveItems",
                        {
                          get: function () {
                            return this.items.filter(function (e) {
                              return e.active && e.highlighted;
                            });
                          },
                          enumerable: !1,
                          configurable: !0,
                        }
                      ),
                      Object.defineProperty(e.prototype, "choices", {
                        get: function () {
                          return this.state.choices;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "activeChoices", {
                        get: function () {
                          return this.choices.filter(function (e) {
                            return !0 === e.active;
                          });
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "selectableChoices", {
                        get: function () {
                          return this.choices.filter(function (e) {
                            return !0 !== e.disabled;
                          });
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "searchableChoices", {
                        get: function () {
                          return this.selectableChoices.filter(function (e) {
                            return !0 !== e.placeholder;
                          });
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "placeholderChoice", {
                        get: function () {
                          return n([], this.choices, !0)
                            .reverse()
                            .find(function (e) {
                              return !0 === e.placeholder;
                            });
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "groups", {
                        get: function () {
                          return this.state.groups;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "activeGroups", {
                        get: function () {
                          var e = this.groups,
                            t = this.choices;
                          return e.filter(function (e) {
                            var i = !0 === e.active && !1 === e.disabled,
                              n = t.some(function (e) {
                                return !0 === e.active && !1 === e.disabled;
                              });
                            return i && n;
                          }, []);
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.isLoading = function () {
                        return this.state.loading;
                      }),
                      (e.prototype.getChoiceById = function (e) {
                        return this.activeChoices.find(function (t) {
                          return t.id === parseInt(e, 10);
                        });
                      }),
                      (e.prototype.getGroupById = function (e) {
                        return this.groups.find(function (t) {
                          return t.id === e;
                        });
                      }),
                      e
                    );
                  })();
                t.default = a;
              },
              686: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
                var i = {
                  containerOuter: function (e, t, i, n, s, r, o) {
                    var a = e.classNames.containerOuter,
                      l = Object.assign(document.createElement("div"), {
                        className: a,
                      });
                    return (
                      (l.dataset.type = r),
                      t && (l.dir = t),
                      n && (l.tabIndex = 0),
                      i &&
                        (l.setAttribute("role", s ? "combobox" : "listbox"),
                        s && l.setAttribute("aria-autocomplete", "list")),
                      l.setAttribute("aria-haspopup", "true"),
                      l.setAttribute("aria-expanded", "false"),
                      o && l.setAttribute("aria-labelledby", o),
                      l
                    );
                  },
                  containerInner: function (e) {
                    var t = e.classNames.containerInner;
                    return Object.assign(document.createElement("div"), {
                      className: t,
                    });
                  },
                  itemList: function (e, t) {
                    var i = e.classNames,
                      n = i.list,
                      s = i.listSingle,
                      r = i.listItems;
                    return Object.assign(document.createElement("div"), {
                      className: "".concat(n, " ").concat(t ? s : r),
                    });
                  },
                  placeholder: function (e, t) {
                    var i,
                      n = e.allowHTML,
                      s = e.classNames.placeholder;
                    return Object.assign(
                      document.createElement("div"),
                      (((i = { className: s })[n ? "innerHTML" : "innerText"] =
                        t),
                      i)
                    );
                  },
                  item: function (e, t, i) {
                    var n,
                      s,
                      r = e.allowHTML,
                      o = e.classNames,
                      a = o.item,
                      l = o.button,
                      c = o.highlightedState,
                      d = o.itemSelectable,
                      u = o.placeholder,
                      h = t.id,
                      p = t.value,
                      f = t.label,
                      m = t.customProperties,
                      g = t.active,
                      v = t.disabled,
                      b = t.highlighted,
                      y = t.placeholder,
                      E = Object.assign(
                        document.createElement("div"),
                        (((n = { className: a })[
                          r ? "innerHTML" : "innerText"
                        ] = f),
                        n)
                      );
                    if (
                      (Object.assign(E.dataset, {
                        item: "",
                        id: h,
                        value: p,
                        customProperties: m,
                      }),
                      g && E.setAttribute("aria-selected", "true"),
                      v && E.setAttribute("aria-disabled", "true"),
                      y && E.classList.add(u),
                      E.classList.add(b ? c : d),
                      i)
                    ) {
                      v && E.classList.remove(d), (E.dataset.deletable = "");
                      var _ = "Remove item",
                        S = Object.assign(
                          document.createElement("button"),
                          (((s = { type: "button", className: l })[
                            r ? "innerHTML" : "innerText"
                          ] = _),
                          s)
                        );
                      S.setAttribute(
                        "aria-label",
                        "".concat(_, ": '").concat(p, "'")
                      ),
                        (S.dataset.button = ""),
                        E.appendChild(S);
                    }
                    return E;
                  },
                  choiceList: function (e, t) {
                    var i = e.classNames.list,
                      n = Object.assign(document.createElement("div"), {
                        className: i,
                      });
                    return (
                      t || n.setAttribute("aria-multiselectable", "true"),
                      n.setAttribute("role", "listbox"),
                      n
                    );
                  },
                  choiceGroup: function (e, t) {
                    var i,
                      n = e.allowHTML,
                      s = e.classNames,
                      r = s.group,
                      o = s.groupHeading,
                      a = s.itemDisabled,
                      l = t.id,
                      c = t.value,
                      d = t.disabled,
                      u = Object.assign(document.createElement("div"), {
                        className: "".concat(r, " ").concat(d ? a : ""),
                      });
                    return (
                      u.setAttribute("role", "group"),
                      Object.assign(u.dataset, { group: "", id: l, value: c }),
                      d && u.setAttribute("aria-disabled", "true"),
                      u.appendChild(
                        Object.assign(
                          document.createElement("div"),
                          (((i = { className: o })[
                            n ? "innerHTML" : "innerText"
                          ] = c),
                          i)
                        )
                      ),
                      u
                    );
                  },
                  choice: function (e, t, i) {
                    var n,
                      s = e.allowHTML,
                      r = e.classNames,
                      o = r.item,
                      a = r.itemChoice,
                      l = r.itemSelectable,
                      c = r.selectedState,
                      d = r.itemDisabled,
                      u = r.placeholder,
                      h = t.id,
                      p = t.value,
                      f = t.label,
                      m = t.groupId,
                      g = t.elementId,
                      v = t.disabled,
                      b = t.selected,
                      y = t.placeholder,
                      E = Object.assign(
                        document.createElement("div"),
                        (((n = { id: g })[s ? "innerHTML" : "innerText"] = f),
                        (n.className = "".concat(o, " ").concat(a)),
                        n)
                      );
                    return (
                      b && E.classList.add(c),
                      y && E.classList.add(u),
                      E.setAttribute(
                        "role",
                        m && m > 0 ? "treeitem" : "option"
                      ),
                      Object.assign(E.dataset, {
                        choice: "",
                        id: h,
                        value: p,
                        selectText: i,
                      }),
                      v
                        ? (E.classList.add(d),
                          (E.dataset.choiceDisabled = ""),
                          E.setAttribute("aria-disabled", "true"))
                        : (E.classList.add(l),
                          (E.dataset.choiceSelectable = "")),
                      E
                    );
                  },
                  input: function (e, t) {
                    var i = e.classNames,
                      n = i.input,
                      s = i.inputCloned,
                      r = Object.assign(document.createElement("input"), {
                        type: "search",
                        name: "search_terms",
                        className: "".concat(n, " ").concat(s),
                        autocomplete: "off",
                        autocapitalize: "off",
                        spellcheck: !1,
                      });
                    return (
                      r.setAttribute("role", "textbox"),
                      r.setAttribute("aria-autocomplete", "list"),
                      r.setAttribute("aria-label", t),
                      r
                    );
                  },
                  dropdown: function (e) {
                    var t = e.classNames,
                      i = t.list,
                      n = t.listDropdown,
                      s = document.createElement("div");
                    return (
                      s.classList.add(i, n),
                      s.setAttribute("aria-expanded", "false"),
                      s
                    );
                  },
                  notice: function (e, t, i) {
                    var n,
                      s = e.allowHTML,
                      r = e.classNames,
                      o = r.item,
                      a = r.itemChoice,
                      l = r.noResults,
                      c = r.noChoices;
                    void 0 === i && (i = "");
                    var d = [o, a];
                    return (
                      "no-choices" === i
                        ? d.push(c)
                        : "no-results" === i && d.push(l),
                      Object.assign(
                        document.createElement("div"),
                        (((n = {})[s ? "innerHTML" : "innerText"] = t),
                        (n.className = d.join(" ")),
                        n)
                      )
                    );
                  },
                  option: function (e) {
                    var t = e.label,
                      i = e.value,
                      n = e.customProperties,
                      s = e.active,
                      r = e.disabled,
                      o = new Option(t, i, !1, s);
                    return (
                      n && (o.dataset.customProperties = "".concat(n)),
                      (o.disabled = !!r),
                      o
                    );
                  },
                };
                t.default = i;
              },
              996: function (e) {
                var t = function (e) {
                    return (
                      (function (e) {
                        return !!e && "object" == typeof e;
                      })(e) &&
                      !(function (e) {
                        var t = Object.prototype.toString.call(e);
                        return (
                          "[object RegExp]" === t ||
                          "[object Date]" === t ||
                          (function (e) {
                            return e.$$typeof === i;
                          })(e)
                        );
                      })(e)
                    );
                  },
                  i =
                    "function" == typeof Symbol && Symbol.for
                      ? Symbol.for("react.element")
                      : 60103;
                function n(e, t) {
                  return !1 !== t.clone && t.isMergeableObject(e)
                    ? a(((i = e), Array.isArray(i) ? [] : {}), e, t)
                    : e;
                  var i;
                }
                function s(e, t, i) {
                  return e.concat(t).map(function (e) {
                    return n(e, i);
                  });
                }
                function r(e) {
                  return Object.keys(e).concat(
                    (function (e) {
                      return Object.getOwnPropertySymbols
                        ? Object.getOwnPropertySymbols(e).filter(function (t) {
                            return e.propertyIsEnumerable(t);
                          })
                        : [];
                    })(e)
                  );
                }
                function o(e, t) {
                  try {
                    return t in e;
                  } catch (e) {
                    return !1;
                  }
                }
                function a(e, i, l) {
                  ((l = l || {}).arrayMerge = l.arrayMerge || s),
                    (l.isMergeableObject = l.isMergeableObject || t),
                    (l.cloneUnlessOtherwiseSpecified = n);
                  var c = Array.isArray(i);
                  return c === Array.isArray(e)
                    ? c
                      ? l.arrayMerge(e, i, l)
                      : (function (e, t, i) {
                          var s = {};
                          return (
                            i.isMergeableObject(e) &&
                              r(e).forEach(function (t) {
                                s[t] = n(e[t], i);
                              }),
                            r(t).forEach(function (r) {
                              (function (e, t) {
                                return (
                                  o(e, t) &&
                                  !(
                                    Object.hasOwnProperty.call(e, t) &&
                                    Object.propertyIsEnumerable.call(e, t)
                                  )
                                );
                              })(e, r) ||
                                (o(e, r) && i.isMergeableObject(t[r])
                                  ? (s[r] = (function (e, t) {
                                      if (!t.customMerge) return a;
                                      var i = t.customMerge(e);
                                      return "function" == typeof i ? i : a;
                                    })(r, i)(e[r], t[r], i))
                                  : (s[r] = n(t[r], i)));
                            }),
                            s
                          );
                        })(e, i, l)
                    : n(i, l);
                }
                a.all = function (e, t) {
                  if (!Array.isArray(e))
                    throw new Error("first argument should be an array");
                  return e.reduce(function (e, i) {
                    return a(e, i, t);
                  }, {});
                };
                var l = a;
                e.exports = l;
              },
              221: function (e, t, i) {
                function n(e) {
                  return Array.isArray
                    ? Array.isArray(e)
                    : "[object Array]" === c(e);
                }
                function s(e) {
                  return "string" == typeof e;
                }
                function r(e) {
                  return "number" == typeof e;
                }
                function o(e) {
                  return "object" == typeof e;
                }
                function a(e) {
                  return null != e;
                }
                function l(e) {
                  return !e.trim().length;
                }
                function c(e) {
                  return null == e
                    ? void 0 === e
                      ? "[object Undefined]"
                      : "[object Null]"
                    : Object.prototype.toString.call(e);
                }
                i.r(t),
                  i.d(t, {
                    default: function () {
                      return G;
                    },
                  });
                const d = Object.prototype.hasOwnProperty;
                class u {
                  constructor(e) {
                    (this._keys = []), (this._keyMap = {});
                    let t = 0;
                    e.forEach((e) => {
                      let i = h(e);
                      (t += i.weight),
                        this._keys.push(i),
                        (this._keyMap[i.id] = i),
                        (t += i.weight);
                    }),
                      this._keys.forEach((e) => {
                        e.weight /= t;
                      });
                  }
                  get(e) {
                    return this._keyMap[e];
                  }
                  keys() {
                    return this._keys;
                  }
                  toJSON() {
                    return JSON.stringify(this._keys);
                  }
                }
                function h(e) {
                  let t = null,
                    i = null,
                    r = null,
                    o = 1,
                    a = null;
                  if (s(e) || n(e)) (r = e), (t = p(e)), (i = f(e));
                  else {
                    if (!d.call(e, "name"))
                      throw new Error("Missing name property in key");
                    const n = e.name;
                    if (
                      ((r = n), d.call(e, "weight") && ((o = e.weight), o <= 0))
                    )
                      throw new Error(
                        ((e) =>
                          `Property 'weight' in key '${e}' must be a positive integer`)(
                          n
                        )
                      );
                    (t = p(n)), (i = f(n)), (a = e.getFn);
                  }
                  return { path: t, id: i, weight: o, src: r, getFn: a };
                }
                function p(e) {
                  return n(e) ? e : e.split(".");
                }
                function f(e) {
                  return n(e) ? e.join(".") : e;
                }
                var m = {
                  isCaseSensitive: !1,
                  includeScore: !1,
                  keys: [],
                  shouldSort: !0,
                  sortFn: (e, t) =>
                    e.score === t.score
                      ? e.idx < t.idx
                        ? -1
                        : 1
                      : e.score < t.score
                      ? -1
                      : 1,
                  includeMatches: !1,
                  findAllMatches: !1,
                  minMatchCharLength: 1,
                  location: 0,
                  threshold: 0.6,
                  distance: 100,
                  useExtendedSearch: !1,
                  getFn: function (e, t) {
                    let i = [],
                      l = !1;
                    const d = (e, t, u) => {
                      if (a(e))
                        if (t[u]) {
                          const h = e[t[u]];
                          if (!a(h)) return;
                          if (
                            u === t.length - 1 &&
                            (s(h) ||
                              r(h) ||
                              (function (e) {
                                return (
                                  !0 === e ||
                                  !1 === e ||
                                  ((function (e) {
                                    return o(e) && null !== e;
                                  })(e) &&
                                    "[object Boolean]" == c(e))
                                );
                              })(h))
                          )
                            i.push(
                              (function (e) {
                                return null == e
                                  ? ""
                                  : (function (e) {
                                      if ("string" == typeof e) return e;
                                      let t = e + "";
                                      return "0" == t && 1 / e == -1 / 0
                                        ? "-0"
                                        : t;
                                    })(e);
                              })(h)
                            );
                          else if (n(h)) {
                            l = !0;
                            for (let e = 0, i = h.length; e < i; e += 1)
                              d(h[e], t, u + 1);
                          } else t.length && d(h, t, u + 1);
                        } else i.push(e);
                    };
                    return d(e, s(t) ? t.split(".") : t, 0), l ? i : i[0];
                  },
                  ignoreLocation: !1,
                  ignoreFieldNorm: !1,
                  fieldNormWeight: 1,
                };
                const g = /[^ ]+/g;
                class v {
                  constructor() {
                    let {
                      getFn: e = m.getFn,
                      fieldNormWeight: t = m.fieldNormWeight,
                    } =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.norm = (function () {
                      let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1,
                        t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 3;
                      const i = new Map(),
                        n = Math.pow(10, t);
                      return {
                        get(t) {
                          const s = t.match(g).length;
                          if (i.has(s)) return i.get(s);
                          const r = 1 / Math.pow(s, 0.5 * e),
                            o = parseFloat(Math.round(r * n) / n);
                          return i.set(s, o), o;
                        },
                        clear() {
                          i.clear();
                        },
                      };
                    })(t, 3)),
                      (this.getFn = e),
                      (this.isCreated = !1),
                      this.setIndexRecords();
                  }
                  setSources() {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [];
                    this.docs = e;
                  }
                  setIndexRecords() {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [];
                    this.records = e;
                  }
                  setKeys() {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [];
                    (this.keys = e),
                      (this._keysMap = {}),
                      e.forEach((e, t) => {
                        this._keysMap[e.id] = t;
                      });
                  }
                  create() {
                    !this.isCreated &&
                      this.docs.length &&
                      ((this.isCreated = !0),
                      s(this.docs[0])
                        ? this.docs.forEach((e, t) => {
                            this._addString(e, t);
                          })
                        : this.docs.forEach((e, t) => {
                            this._addObject(e, t);
                          }),
                      this.norm.clear());
                  }
                  add(e) {
                    const t = this.size();
                    s(e) ? this._addString(e, t) : this._addObject(e, t);
                  }
                  removeAt(e) {
                    this.records.splice(e, 1);
                    for (let t = e, i = this.size(); t < i; t += 1)
                      this.records[t].i -= 1;
                  }
                  getValueForItemAtKeyId(e, t) {
                    return e[this._keysMap[t]];
                  }
                  size() {
                    return this.records.length;
                  }
                  _addString(e, t) {
                    if (!a(e) || l(e)) return;
                    let i = { v: e, i: t, n: this.norm.get(e) };
                    this.records.push(i);
                  }
                  _addObject(e, t) {
                    let i = { i: t, $: {} };
                    this.keys.forEach((t, r) => {
                      let o = t.getFn ? t.getFn(e) : this.getFn(e, t.path);
                      if (a(o))
                        if (n(o)) {
                          let e = [];
                          const t = [{ nestedArrIndex: -1, value: o }];
                          for (; t.length; ) {
                            const { nestedArrIndex: i, value: r } = t.pop();
                            if (a(r))
                              if (s(r) && !l(r)) {
                                let t = { v: r, i, n: this.norm.get(r) };
                                e.push(t);
                              } else
                                n(r) &&
                                  r.forEach((e, i) => {
                                    t.push({ nestedArrIndex: i, value: e });
                                  });
                          }
                          i.$[r] = e;
                        } else if (s(o) && !l(o)) {
                          let e = { v: o, n: this.norm.get(o) };
                          i.$[r] = e;
                        }
                    }),
                      this.records.push(i);
                  }
                  toJSON() {
                    return { keys: this.keys, records: this.records };
                  }
                }
                function b(e, t) {
                  let {
                    getFn: i = m.getFn,
                    fieldNormWeight: n = m.fieldNormWeight,
                  } =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  const s = new v({ getFn: i, fieldNormWeight: n });
                  return s.setKeys(e.map(h)), s.setSources(t), s.create(), s;
                }
                function y(e) {
                  let {
                    errors: t = 0,
                    currentLocation: i = 0,
                    expectedLocation: n = 0,
                    distance: s = m.distance,
                    ignoreLocation: r = m.ignoreLocation,
                  } = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                  const o = t / e.length;
                  if (r) return o;
                  const a = Math.abs(n - i);
                  return s ? o + a / s : a ? 1 : o;
                }
                const E = 32;
                function _(e) {
                  let t = {};
                  for (let i = 0, n = e.length; i < n; i += 1) {
                    const s = e.charAt(i);
                    t[s] = (t[s] || 0) | (1 << (n - i - 1));
                  }
                  return t;
                }
                class S {
                  constructor(e) {
                    let {
                      location: t = m.location,
                      threshold: i = m.threshold,
                      distance: n = m.distance,
                      includeMatches: s = m.includeMatches,
                      findAllMatches: r = m.findAllMatches,
                      minMatchCharLength: o = m.minMatchCharLength,
                      isCaseSensitive: a = m.isCaseSensitive,
                      ignoreLocation: l = m.ignoreLocation,
                    } = arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                    if (
                      ((this.options = {
                        location: t,
                        threshold: i,
                        distance: n,
                        includeMatches: s,
                        findAllMatches: r,
                        minMatchCharLength: o,
                        isCaseSensitive: a,
                        ignoreLocation: l,
                      }),
                      (this.pattern = a ? e : e.toLowerCase()),
                      (this.chunks = []),
                      !this.pattern.length)
                    )
                      return;
                    const c = (e, t) => {
                        this.chunks.push({
                          pattern: e,
                          alphabet: _(e),
                          startIndex: t,
                        });
                      },
                      d = this.pattern.length;
                    if (d > E) {
                      let e = 0;
                      const t = d % E,
                        i = d - t;
                      for (; e < i; ) c(this.pattern.substr(e, E), e), (e += E);
                      if (t) {
                        const e = d - E;
                        c(this.pattern.substr(e), e);
                      }
                    } else c(this.pattern, 0);
                  }
                  searchIn(e) {
                    const { isCaseSensitive: t, includeMatches: i } =
                      this.options;
                    if ((t || (e = e.toLowerCase()), this.pattern === e)) {
                      let t = { isMatch: !0, score: 0 };
                      return i && (t.indices = [[0, e.length - 1]]), t;
                    }
                    const {
                      location: n,
                      distance: s,
                      threshold: r,
                      findAllMatches: o,
                      minMatchCharLength: a,
                      ignoreLocation: l,
                    } = this.options;
                    let c = [],
                      d = 0,
                      u = !1;
                    this.chunks.forEach((t) => {
                      let { pattern: h, alphabet: p, startIndex: f } = t;
                      const {
                        isMatch: g,
                        score: v,
                        indices: b,
                      } = (function (e, t, i) {
                        let {
                          location: n = m.location,
                          distance: s = m.distance,
                          threshold: r = m.threshold,
                          findAllMatches: o = m.findAllMatches,
                          minMatchCharLength: a = m.minMatchCharLength,
                          includeMatches: l = m.includeMatches,
                          ignoreLocation: c = m.ignoreLocation,
                        } = arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : {};
                        if (t.length > E)
                          throw new Error("Pattern length exceeds max of 32.");
                        const d = t.length,
                          u = e.length,
                          h = Math.max(0, Math.min(n, u));
                        let p = r,
                          f = h;
                        const g = a > 1 || l,
                          v = g ? Array(u) : [];
                        let b;
                        for (; (b = e.indexOf(t, f)) > -1; ) {
                          let e = y(t, {
                            currentLocation: b,
                            expectedLocation: h,
                            distance: s,
                            ignoreLocation: c,
                          });
                          if (((p = Math.min(e, p)), (f = b + d), g)) {
                            let e = 0;
                            for (; e < d; ) (v[b + e] = 1), (e += 1);
                          }
                        }
                        f = -1;
                        let _ = [],
                          S = 1,
                          w = d + u;
                        const C = 1 << (d - 1);
                        for (let n = 0; n < d; n += 1) {
                          let r = 0,
                            a = w;
                          for (; r < a; )
                            y(t, {
                              errors: n,
                              currentLocation: h + a,
                              expectedLocation: h,
                              distance: s,
                              ignoreLocation: c,
                            }) <= p
                              ? (r = a)
                              : (w = a),
                              (a = Math.floor((w - r) / 2 + r));
                          w = a;
                          let l = Math.max(1, h - a + 1),
                            m = o ? u : Math.min(h + a, u) + d,
                            b = Array(m + 2);
                          b[m + 1] = (1 << n) - 1;
                          for (let r = m; r >= l; r -= 1) {
                            let o = r - 1,
                              a = i[e.charAt(o)];
                            if (
                              (g && (v[o] = +!!a),
                              (b[r] = ((b[r + 1] << 1) | 1) & a),
                              n &&
                                (b[r] |=
                                  ((_[r + 1] | _[r]) << 1) | 1 | _[r + 1]),
                              b[r] & C &&
                                ((S = y(t, {
                                  errors: n,
                                  currentLocation: o,
                                  expectedLocation: h,
                                  distance: s,
                                  ignoreLocation: c,
                                })),
                                S <= p))
                            ) {
                              if (((p = S), (f = o), f <= h)) break;
                              l = Math.max(1, 2 * h - f);
                            }
                          }
                          if (
                            y(t, {
                              errors: n + 1,
                              currentLocation: h,
                              expectedLocation: h,
                              distance: s,
                              ignoreLocation: c,
                            }) > p
                          )
                            break;
                          _ = b;
                        }
                        const T = {
                          isMatch: f >= 0,
                          score: Math.max(0.001, S),
                        };
                        if (g) {
                          const e = (function () {
                            let e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : [],
                              t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : m.minMatchCharLength,
                              i = [],
                              n = -1,
                              s = -1,
                              r = 0;
                            for (let o = e.length; r < o; r += 1) {
                              let o = e[r];
                              o && -1 === n
                                ? (n = r)
                                : o ||
                                  -1 === n ||
                                  ((s = r - 1),
                                  s - n + 1 >= t && i.push([n, s]),
                                  (n = -1));
                            }
                            return (
                              e[r - 1] && r - n >= t && i.push([n, r - 1]), i
                            );
                          })(v, a);
                          e.length ? l && (T.indices = e) : (T.isMatch = !1);
                        }
                        return T;
                      })(e, h, p, {
                        location: n + f,
                        distance: s,
                        threshold: r,
                        findAllMatches: o,
                        minMatchCharLength: a,
                        includeMatches: i,
                        ignoreLocation: l,
                      });
                      g && (u = !0), (d += v), g && b && (c = [...c, ...b]);
                    });
                    let h = {
                      isMatch: u,
                      score: u ? d / this.chunks.length : 1,
                    };
                    return u && i && (h.indices = c), h;
                  }
                }
                class w {
                  constructor(e) {
                    this.pattern = e;
                  }
                  static isMultiMatch(e) {
                    return C(e, this.multiRegex);
                  }
                  static isSingleMatch(e) {
                    return C(e, this.singleRegex);
                  }
                  search() {}
                }
                function C(e, t) {
                  const i = e.match(t);
                  return i ? i[1] : null;
                }
                class T extends w {
                  constructor(e) {
                    let {
                      location: t = m.location,
                      threshold: i = m.threshold,
                      distance: n = m.distance,
                      includeMatches: s = m.includeMatches,
                      findAllMatches: r = m.findAllMatches,
                      minMatchCharLength: o = m.minMatchCharLength,
                      isCaseSensitive: a = m.isCaseSensitive,
                      ignoreLocation: l = m.ignoreLocation,
                    } = arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                    super(e),
                      (this._bitapSearch = new S(e, {
                        location: t,
                        threshold: i,
                        distance: n,
                        includeMatches: s,
                        findAllMatches: r,
                        minMatchCharLength: o,
                        isCaseSensitive: a,
                        ignoreLocation: l,
                      }));
                  }
                  static get type() {
                    return "fuzzy";
                  }
                  static get multiRegex() {
                    return /^"(.*)"$/;
                  }
                  static get singleRegex() {
                    return /^(.*)$/;
                  }
                  search(e) {
                    return this._bitapSearch.searchIn(e);
                  }
                }
                class L extends w {
                  constructor(e) {
                    super(e);
                  }
                  static get type() {
                    return "include";
                  }
                  static get multiRegex() {
                    return /^'"(.*)"$/;
                  }
                  static get singleRegex() {
                    return /^'(.*)$/;
                  }
                  search(e) {
                    let t,
                      i = 0;
                    const n = [],
                      s = this.pattern.length;
                    for (; (t = e.indexOf(this.pattern, i)) > -1; )
                      (i = t + s), n.push([t, i - 1]);
                    const r = !!n.length;
                    return { isMatch: r, score: r ? 0 : 1, indices: n };
                  }
                }
                const O = [
                    class extends w {
                      constructor(e) {
                        super(e);
                      }
                      static get type() {
                        return "exact";
                      }
                      static get multiRegex() {
                        return /^="(.*)"$/;
                      }
                      static get singleRegex() {
                        return /^=(.*)$/;
                      }
                      search(e) {
                        const t = e === this.pattern;
                        return {
                          isMatch: t,
                          score: t ? 0 : 1,
                          indices: [0, this.pattern.length - 1],
                        };
                      }
                    },
                    L,
                    class extends w {
                      constructor(e) {
                        super(e);
                      }
                      static get type() {
                        return "prefix-exact";
                      }
                      static get multiRegex() {
                        return /^\^"(.*)"$/;
                      }
                      static get singleRegex() {
                        return /^\^(.*)$/;
                      }
                      search(e) {
                        const t = e.startsWith(this.pattern);
                        return {
                          isMatch: t,
                          score: t ? 0 : 1,
                          indices: [0, this.pattern.length - 1],
                        };
                      }
                    },
                    class extends w {
                      constructor(e) {
                        super(e);
                      }
                      static get type() {
                        return "inverse-prefix-exact";
                      }
                      static get multiRegex() {
                        return /^!\^"(.*)"$/;
                      }
                      static get singleRegex() {
                        return /^!\^(.*)$/;
                      }
                      search(e) {
                        const t = !e.startsWith(this.pattern);
                        return {
                          isMatch: t,
                          score: t ? 0 : 1,
                          indices: [0, e.length - 1],
                        };
                      }
                    },
                    class extends w {
                      constructor(e) {
                        super(e);
                      }
                      static get type() {
                        return "inverse-suffix-exact";
                      }
                      static get multiRegex() {
                        return /^!"(.*)"\$$/;
                      }
                      static get singleRegex() {
                        return /^!(.*)\$$/;
                      }
                      search(e) {
                        const t = !e.endsWith(this.pattern);
                        return {
                          isMatch: t,
                          score: t ? 0 : 1,
                          indices: [0, e.length - 1],
                        };
                      }
                    },
                    class extends w {
                      constructor(e) {
                        super(e);
                      }
                      static get type() {
                        return "suffix-exact";
                      }
                      static get multiRegex() {
                        return /^"(.*)"\$$/;
                      }
                      static get singleRegex() {
                        return /^(.*)\$$/;
                      }
                      search(e) {
                        const t = e.endsWith(this.pattern);
                        return {
                          isMatch: t,
                          score: t ? 0 : 1,
                          indices: [
                            e.length - this.pattern.length,
                            e.length - 1,
                          ],
                        };
                      }
                    },
                    class extends w {
                      constructor(e) {
                        super(e);
                      }
                      static get type() {
                        return "inverse-exact";
                      }
                      static get multiRegex() {
                        return /^!"(.*)"$/;
                      }
                      static get singleRegex() {
                        return /^!(.*)$/;
                      }
                      search(e) {
                        const t = -1 === e.indexOf(this.pattern);
                        return {
                          isMatch: t,
                          score: t ? 0 : 1,
                          indices: [0, e.length - 1],
                        };
                      }
                    },
                    T,
                  ],
                  x = O.length,
                  I = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
                  M = new Set([T.type, L.type]),
                  A = [];
                function P(e, t) {
                  for (let i = 0, n = A.length; i < n; i += 1) {
                    let n = A[i];
                    if (n.condition(e, t)) return new n(e, t);
                  }
                  return new S(e, t);
                }
                const k = "$and",
                  N = (e) => !(!e.$and && !e.$or),
                  D = (e) => ({
                    [k]: Object.keys(e).map((t) => ({ [t]: e[t] })),
                  });
                function j(e, t) {
                  let { auto: i = !0 } =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  const r = (e) => {
                    let a = Object.keys(e);
                    const l = ((e) => !!e.$path)(e);
                    if (!l && a.length > 1 && !N(e)) return r(D(e));
                    if (((e) => !n(e) && o(e) && !N(e))(e)) {
                      const n = l ? e.$path : a[0],
                        r = l ? e.$val : e[n];
                      if (!s(r))
                        throw new Error(
                          ((e) => `Invalid value for key ${e}`)(n)
                        );
                      const o = { keyId: f(n), pattern: r };
                      return i && (o.searcher = P(r, t)), o;
                    }
                    let c = { children: [], operator: a[0] };
                    return (
                      a.forEach((t) => {
                        const i = e[t];
                        n(i) &&
                          i.forEach((e) => {
                            c.children.push(r(e));
                          });
                      }),
                      c
                    );
                  };
                  return N(e) || (e = D(e)), r(e);
                }
                function $(e, t) {
                  const i = e.matches;
                  (t.matches = []),
                    a(i) &&
                      i.forEach((e) => {
                        if (!a(e.indices) || !e.indices.length) return;
                        const { indices: i, value: n } = e;
                        let s = { indices: i, value: n };
                        e.key && (s.key = e.key.src),
                          e.idx > -1 && (s.refIndex = e.idx),
                          t.matches.push(s);
                      });
                }
                function F(e, t) {
                  t.score = e.score;
                }
                class G {
                  constructor(e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      i = arguments.length > 2 ? arguments[2] : void 0;
                    (this.options = { ...m, ...t }),
                      this.options.useExtendedSearch,
                      (this._keyStore = new u(this.options.keys)),
                      this.setCollection(e, i);
                  }
                  setCollection(e, t) {
                    if (((this._docs = e), t && !(t instanceof v)))
                      throw new Error("Incorrect 'index' type");
                    this._myIndex =
                      t ||
                      b(this.options.keys, this._docs, {
                        getFn: this.options.getFn,
                        fieldNormWeight: this.options.fieldNormWeight,
                      });
                  }
                  add(e) {
                    a(e) && (this._docs.push(e), this._myIndex.add(e));
                  }
                  remove() {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : () => !1;
                    const t = [];
                    for (let i = 0, n = this._docs.length; i < n; i += 1) {
                      const s = this._docs[i];
                      e(s, i) &&
                        (this.removeAt(i), (i -= 1), (n -= 1), t.push(s));
                    }
                    return t;
                  }
                  removeAt(e) {
                    this._docs.splice(e, 1), this._myIndex.removeAt(e);
                  }
                  getIndex() {
                    return this._myIndex;
                  }
                  search(e) {
                    let { limit: t = -1 } =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    const {
                      includeMatches: i,
                      includeScore: n,
                      shouldSort: o,
                      sortFn: a,
                      ignoreFieldNorm: l,
                    } = this.options;
                    let c = s(e)
                      ? s(this._docs[0])
                        ? this._searchStringList(e)
                        : this._searchObjectList(e)
                      : this._searchLogical(e);
                    return (
                      (function (e, t) {
                        let { ignoreFieldNorm: i = m.ignoreFieldNorm } = t;
                        e.forEach((e) => {
                          let t = 1;
                          e.matches.forEach((e) => {
                            let { key: n, norm: s, score: r } = e;
                            const o = n ? n.weight : null;
                            t *= Math.pow(
                              0 === r && o ? Number.EPSILON : r,
                              (o || 1) * (i ? 1 : s)
                            );
                          }),
                            (e.score = t);
                        });
                      })(c, { ignoreFieldNorm: l }),
                      o && c.sort(a),
                      r(t) && t > -1 && (c = c.slice(0, t)),
                      (function (e, t) {
                        let {
                          includeMatches: i = m.includeMatches,
                          includeScore: n = m.includeScore,
                        } =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        const s = [];
                        return (
                          i && s.push($),
                          n && s.push(F),
                          e.map((e) => {
                            const { idx: i } = e,
                              n = { item: t[i], refIndex: i };
                            return (
                              s.length &&
                                s.forEach((t) => {
                                  t(e, n);
                                }),
                              n
                            );
                          })
                        );
                      })(c, this._docs, { includeMatches: i, includeScore: n })
                    );
                  }
                  _searchStringList(e) {
                    const t = P(e, this.options),
                      { records: i } = this._myIndex,
                      n = [];
                    return (
                      i.forEach((e) => {
                        let { v: i, i: s, n: r } = e;
                        if (!a(i)) return;
                        const {
                          isMatch: o,
                          score: l,
                          indices: c,
                        } = t.searchIn(i);
                        o &&
                          n.push({
                            item: i,
                            idx: s,
                            matches: [
                              { score: l, value: i, norm: r, indices: c },
                            ],
                          });
                      }),
                      n
                    );
                  }
                  _searchLogical(e) {
                    const t = j(e, this.options),
                      i = (e, t, n) => {
                        if (!e.children) {
                          const { keyId: i, searcher: s } = e,
                            r = this._findMatches({
                              key: this._keyStore.get(i),
                              value: this._myIndex.getValueForItemAtKeyId(t, i),
                              searcher: s,
                            });
                          return r && r.length
                            ? [{ idx: n, item: t, matches: r }]
                            : [];
                        }
                        const s = [];
                        for (let r = 0, o = e.children.length; r < o; r += 1) {
                          const o = e.children[r],
                            a = i(o, t, n);
                          if (a.length) s.push(...a);
                          else if (e.operator === k) return [];
                        }
                        return s;
                      },
                      n = this._myIndex.records,
                      s = {},
                      r = [];
                    return (
                      n.forEach((e) => {
                        let { $: n, i: o } = e;
                        if (a(n)) {
                          let e = i(t, n, o);
                          e.length &&
                            (s[o] ||
                              ((s[o] = { idx: o, item: n, matches: [] }),
                              r.push(s[o])),
                            e.forEach((e) => {
                              let { matches: t } = e;
                              s[o].matches.push(...t);
                            }));
                        }
                      }),
                      r
                    );
                  }
                  _searchObjectList(e) {
                    const t = P(e, this.options),
                      { keys: i, records: n } = this._myIndex,
                      s = [];
                    return (
                      n.forEach((e) => {
                        let { $: n, i: r } = e;
                        if (!a(n)) return;
                        let o = [];
                        i.forEach((e, i) => {
                          o.push(
                            ...this._findMatches({
                              key: e,
                              value: n[i],
                              searcher: t,
                            })
                          );
                        }),
                          o.length && s.push({ idx: r, item: n, matches: o });
                      }),
                      s
                    );
                  }
                  _findMatches(e) {
                    let { key: t, value: i, searcher: s } = e;
                    if (!a(i)) return [];
                    let r = [];
                    if (n(i))
                      i.forEach((e) => {
                        let { v: i, i: n, n: o } = e;
                        if (!a(i)) return;
                        const {
                          isMatch: l,
                          score: c,
                          indices: d,
                        } = s.searchIn(i);
                        l &&
                          r.push({
                            score: c,
                            key: t,
                            value: i,
                            idx: n,
                            norm: o,
                            indices: d,
                          });
                      });
                    else {
                      const { v: e, n } = i,
                        { isMatch: o, score: a, indices: l } = s.searchIn(e);
                      o &&
                        r.push({
                          score: a,
                          key: t,
                          value: e,
                          norm: n,
                          indices: l,
                        });
                    }
                    return r;
                  }
                }
                (G.version = "6.6.2"),
                  (G.createIndex = b),
                  (G.parseIndex = function (e) {
                    let {
                      getFn: t = m.getFn,
                      fieldNormWeight: i = m.fieldNormWeight,
                    } =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    const { keys: n, records: s } = e,
                      r = new v({ getFn: t, fieldNormWeight: i });
                    return r.setKeys(n), r.setIndexRecords(s), r;
                  }),
                  (G.config = m),
                  (G.parseQuery = j),
                  (function () {
                    A.push(...arguments);
                  })(
                    class {
                      constructor(e) {
                        let {
                          isCaseSensitive: t = m.isCaseSensitive,
                          includeMatches: i = m.includeMatches,
                          minMatchCharLength: n = m.minMatchCharLength,
                          ignoreLocation: s = m.ignoreLocation,
                          findAllMatches: r = m.findAllMatches,
                          location: o = m.location,
                          threshold: a = m.threshold,
                          distance: l = m.distance,
                        } = arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                        (this.query = null),
                          (this.options = {
                            isCaseSensitive: t,
                            includeMatches: i,
                            minMatchCharLength: n,
                            findAllMatches: r,
                            ignoreLocation: s,
                            location: o,
                            threshold: a,
                            distance: l,
                          }),
                          (this.pattern = t ? e : e.toLowerCase()),
                          (this.query = (function (e) {
                            let t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            return e.split("|").map((e) => {
                              let i = e
                                  .trim()
                                  .split(I)
                                  .filter((e) => e && !!e.trim()),
                                n = [];
                              for (let e = 0, s = i.length; e < s; e += 1) {
                                const s = i[e];
                                let r = !1,
                                  o = -1;
                                for (; !r && ++o < x; ) {
                                  const e = O[o];
                                  let i = e.isMultiMatch(s);
                                  i && (n.push(new e(i, t)), (r = !0));
                                }
                                if (!r)
                                  for (o = -1; ++o < x; ) {
                                    const e = O[o];
                                    let i = e.isSingleMatch(s);
                                    if (i) {
                                      n.push(new e(i, t));
                                      break;
                                    }
                                  }
                              }
                              return n;
                            });
                          })(this.pattern, this.options));
                      }
                      static condition(e, t) {
                        return t.useExtendedSearch;
                      }
                      searchIn(e) {
                        const t = this.query;
                        if (!t) return { isMatch: !1, score: 1 };
                        const { includeMatches: i, isCaseSensitive: n } =
                          this.options;
                        e = n ? e : e.toLowerCase();
                        let s = 0,
                          r = [],
                          o = 0;
                        for (let n = 0, a = t.length; n < a; n += 1) {
                          const a = t[n];
                          (r.length = 0), (s = 0);
                          for (let t = 0, n = a.length; t < n; t += 1) {
                            const n = a[t],
                              {
                                isMatch: l,
                                indices: c,
                                score: d,
                              } = n.search(e);
                            if (!l) {
                              (o = 0), (s = 0), (r.length = 0);
                              break;
                            }
                            if (((s += 1), (o += d), i)) {
                              const e = n.constructor.type;
                              M.has(e) ? (r = [...r, ...c]) : r.push(c);
                            }
                          }
                          if (s) {
                            let e = { isMatch: !0, score: o / s };
                            return i && (e.indices = r), e;
                          }
                        }
                        return { isMatch: !1, score: 1 };
                      }
                    }
                  );
              },
              791: function (e, t, i) {
                function n(e) {
                  return (
                    (n =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          }),
                    n(e)
                  );
                }
                function s(e, t, i) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" !== n(e) || null === e) return e;
                        var i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                          var s = i.call(e, "string");
                          if ("object" !== n(s)) return s;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(e);
                      return "symbol" === n(t) ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = i),
                    e
                  );
                }
                function r(e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                      (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      i.push.apply(i, n);
                  }
                  return i;
                }
                function o(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? r(Object(i), !0).forEach(function (t) {
                          s(e, t, i[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(i)
                        )
                      : r(Object(i)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(i, t)
                          );
                        });
                  }
                  return e;
                }
                function a(e) {
                  return (
                    "Minified Redux error #" +
                    e +
                    "; visit https://redux.js.org/Errors?code=" +
                    e +
                    " for the full message or use the non-minified dev environment for full errors. "
                  );
                }
                i.r(t),
                  i.d(t, {
                    __DO_NOT_USE__ActionTypes: function () {
                      return d;
                    },
                    applyMiddleware: function () {
                      return b;
                    },
                    bindActionCreators: function () {
                      return g;
                    },
                    combineReducers: function () {
                      return f;
                    },
                    compose: function () {
                      return v;
                    },
                    createStore: function () {
                      return h;
                    },
                    legacy_createStore: function () {
                      return p;
                    },
                  });
                var l =
                    ("function" == typeof Symbol && Symbol.observable) ||
                    "@@observable",
                  c = function () {
                    return Math.random()
                      .toString(36)
                      .substring(7)
                      .split("")
                      .join(".");
                  },
                  d = {
                    INIT: "@@redux/INIT" + c(),
                    REPLACE: "@@redux/REPLACE" + c(),
                    PROBE_UNKNOWN_ACTION: function () {
                      return "@@redux/PROBE_UNKNOWN_ACTION" + c();
                    },
                  };
                function u(e) {
                  if ("object" != typeof e || null === e) return !1;
                  for (var t = e; null !== Object.getPrototypeOf(t); )
                    t = Object.getPrototypeOf(t);
                  return Object.getPrototypeOf(e) === t;
                }
                function h(e, t, i) {
                  var n;
                  if (
                    ("function" == typeof t && "function" == typeof i) ||
                    ("function" == typeof i &&
                      "function" == typeof arguments[3])
                  )
                    throw new Error(a(0));
                  if (
                    ("function" == typeof t &&
                      void 0 === i &&
                      ((i = t), (t = void 0)),
                    void 0 !== i)
                  ) {
                    if ("function" != typeof i) throw new Error(a(1));
                    return i(h)(e, t);
                  }
                  if ("function" != typeof e) throw new Error(a(2));
                  var s = e,
                    r = t,
                    o = [],
                    c = o,
                    p = !1;
                  function f() {
                    c === o && (c = o.slice());
                  }
                  function m() {
                    if (p) throw new Error(a(3));
                    return r;
                  }
                  function g(e) {
                    if ("function" != typeof e) throw new Error(a(4));
                    if (p) throw new Error(a(5));
                    var t = !0;
                    return (
                      f(),
                      c.push(e),
                      function () {
                        if (t) {
                          if (p) throw new Error(a(6));
                          (t = !1), f();
                          var i = c.indexOf(e);
                          c.splice(i, 1), (o = null);
                        }
                      }
                    );
                  }
                  function v(e) {
                    if (!u(e)) throw new Error(a(7));
                    if (void 0 === e.type) throw new Error(a(8));
                    if (p) throw new Error(a(9));
                    try {
                      (p = !0), (r = s(r, e));
                    } finally {
                      p = !1;
                    }
                    for (var t = (o = c), i = 0; i < t.length; i++) (0, t[i])();
                    return e;
                  }
                  function b(e) {
                    if ("function" != typeof e) throw new Error(a(10));
                    (s = e), v({ type: d.REPLACE });
                  }
                  function y() {
                    var e,
                      t = g;
                    return (
                      ((e = {
                        subscribe: function (e) {
                          if ("object" != typeof e || null === e)
                            throw new Error(a(11));
                          function i() {
                            e.next && e.next(m());
                          }
                          return i(), { unsubscribe: t(i) };
                        },
                      })[l] = function () {
                        return this;
                      }),
                      e
                    );
                  }
                  return (
                    v({ type: d.INIT }),
                    ((n = {
                      dispatch: v,
                      subscribe: g,
                      getState: m,
                      replaceReducer: b,
                    })[l] = y),
                    n
                  );
                }
                var p = h;
                function f(e) {
                  for (
                    var t = Object.keys(e), i = {}, n = 0;
                    n < t.length;
                    n++
                  ) {
                    var s = t[n];
                    "function" == typeof e[s] && (i[s] = e[s]);
                  }
                  var r,
                    o = Object.keys(i);
                  try {
                    !(function (e) {
                      Object.keys(e).forEach(function (t) {
                        var i = e[t];
                        if (void 0 === i(void 0, { type: d.INIT }))
                          throw new Error(a(12));
                        if (
                          void 0 ===
                          i(void 0, { type: d.PROBE_UNKNOWN_ACTION() })
                        )
                          throw new Error(a(13));
                      });
                    })(i);
                  } catch (e) {
                    r = e;
                  }
                  return function (e, t) {
                    if ((void 0 === e && (e = {}), r)) throw r;
                    for (var n = !1, s = {}, l = 0; l < o.length; l++) {
                      var c = o[l],
                        d = i[c],
                        u = e[c],
                        h = d(u, t);
                      if (void 0 === h) throw (t && t.type, new Error(a(14)));
                      (s[c] = h), (n = n || h !== u);
                    }
                    return (n = n || o.length !== Object.keys(e).length)
                      ? s
                      : e;
                  };
                }
                function m(e, t) {
                  return function () {
                    return t(e.apply(this, arguments));
                  };
                }
                function g(e, t) {
                  if ("function" == typeof e) return m(e, t);
                  if ("object" != typeof e || null === e)
                    throw new Error(a(16));
                  var i = {};
                  for (var n in e) {
                    var s = e[n];
                    "function" == typeof s && (i[n] = m(s, t));
                  }
                  return i;
                }
                function v() {
                  for (
                    var e = arguments.length, t = new Array(e), i = 0;
                    i < e;
                    i++
                  )
                    t[i] = arguments[i];
                  return 0 === t.length
                    ? function (e) {
                        return e;
                      }
                    : 1 === t.length
                    ? t[0]
                    : t.reduce(function (e, t) {
                        return function () {
                          return e(t.apply(void 0, arguments));
                        };
                      });
                }
                function b() {
                  for (
                    var e = arguments.length, t = new Array(e), i = 0;
                    i < e;
                    i++
                  )
                    t[i] = arguments[i];
                  return function (e) {
                    return function () {
                      var i = e.apply(void 0, arguments),
                        n = function () {
                          throw new Error(a(15));
                        },
                        s = {
                          getState: i.getState,
                          dispatch: function () {
                            return n.apply(void 0, arguments);
                          },
                        },
                        r = t.map(function (e) {
                          return e(s);
                        });
                      return (
                        (n = v.apply(void 0, r)(i.dispatch)),
                        o(o({}, i), {}, { dispatch: n })
                      );
                    };
                  };
                }
              },
            },
            t = {};
          function i(n) {
            var s = t[n];
            if (void 0 !== s) return s.exports;
            var r = (t[n] = { exports: {} });
            return e[n].call(r.exports, r, r.exports, i), r.exports;
          }
          (i.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return i.d(t, { a: t }), t;
          }),
            (i.d = function (e, t) {
              for (var n in t)
                i.o(t, n) &&
                  !i.o(e, n) &&
                  Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
            (i.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            });
          var n,
            s,
            r = {};
          (n = i(373)),
            (s = i.n(n)),
            i(187),
            i(883),
            i(789),
            i(686),
            (r.default = s()),
            (window.Choices = r.default);
        })();
      },
      598: () => {
        function e(e) {
          var t = !0,
            i = !1,
            n = null,
            s = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function r(e) {
            return !!(
              e &&
              e !== document &&
              "HTML" !== e.nodeName &&
              "BODY" !== e.nodeName &&
              "classList" in e &&
              "contains" in e.classList
            );
          }
          function o(e) {
            e.classList.contains("focus-visible") ||
              (e.classList.add("focus-visible"),
              e.setAttribute("data-focus-visible-added", ""));
          }
          function a(e) {
            t = !1;
          }
          function l() {
            document.addEventListener("mousemove", c),
              document.addEventListener("mousedown", c),
              document.addEventListener("mouseup", c),
              document.addEventListener("pointermove", c),
              document.addEventListener("pointerdown", c),
              document.addEventListener("pointerup", c),
              document.addEventListener("touchmove", c),
              document.addEventListener("touchstart", c),
              document.addEventListener("touchend", c);
          }
          function c(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
              ((t = !1),
              document.removeEventListener("mousemove", c),
              document.removeEventListener("mousedown", c),
              document.removeEventListener("mouseup", c),
              document.removeEventListener("pointermove", c),
              document.removeEventListener("pointerdown", c),
              document.removeEventListener("pointerup", c),
              document.removeEventListener("touchmove", c),
              document.removeEventListener("touchstart", c),
              document.removeEventListener("touchend", c));
          }
          document.addEventListener(
            "keydown",
            function (i) {
              i.metaKey ||
                i.altKey ||
                i.ctrlKey ||
                (r(e.activeElement) && o(e.activeElement), (t = !0));
            },
            !0
          ),
            document.addEventListener("mousedown", a, !0),
            document.addEventListener("pointerdown", a, !0),
            document.addEventListener("touchstart", a, !0),
            document.addEventListener(
              "visibilitychange",
              function (e) {
                "hidden" === document.visibilityState && (i && (t = !0), l());
              },
              !0
            ),
            l(),
            e.addEventListener(
              "focus",
              function (e) {
                var i, n, a;
                r(e.target) &&
                  (t ||
                    ((n = (i = e.target).type),
                    ("INPUT" === (a = i.tagName) && s[n] && !i.readOnly) ||
                      ("TEXTAREA" === a && !i.readOnly) ||
                      i.isContentEditable)) &&
                  o(e.target);
              },
              !0
            ),
            e.addEventListener(
              "blur",
              function (e) {
                var t;
                r(e.target) &&
                  (e.target.classList.contains("focus-visible") ||
                    e.target.hasAttribute("data-focus-visible-added")) &&
                  ((i = !0),
                  window.clearTimeout(n),
                  (n = window.setTimeout(function () {
                    i = !1;
                  }, 100)),
                  (t = e.target).hasAttribute("data-focus-visible-added") &&
                    (t.classList.remove("focus-visible"),
                    t.removeAttribute("data-focus-visible-added")));
              },
              !0
            ),
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
              ? e.host.setAttribute("data-js-focus-visible", "")
              : e.nodeType === Node.DOCUMENT_NODE &&
                (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute(
                  "data-js-focus-visible",
                  ""
                ));
        }
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t;
          window.applyFocusVisiblePolyfill = e;
          try {
            t = new CustomEvent("focus-visible-polyfill-ready");
          } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent(
              "focus-visible-polyfill-ready",
              !1,
              !1,
              {}
            );
          }
          window.dispatchEvent(t);
        }
        "undefined" != typeof document && e(document);
      },
    },
    t = {};
  function i(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var r = (t[n] = { exports: {} });
    return e[n](r, r.exports, i), r.exports;
  }
  (() => {
    "use strict";
    i(598), i(676);
    const e = {
      windowEl: window,
      documentEl: document,
      htmlEl: document.documentElement,
      bodyEl: document.body,
    };
    console.log(
      (() => {
        const t = navigator.userAgent || navigator.vendor || window.opera;
        return /android/i.test(t)
          ? (e.htmlEl.classList.add("page--android"), "Android")
          : /iPad|iPhone|iPod/.test(t) && !window.MSStream
          ? (e.htmlEl.classList.add("page--ios"), "iOS")
          : "unknown";
      })()
    );
    const t = () => {
      const t = document?.querySelectorAll(".fixed-block"),
        i = (document.body, parseInt(e.bodyEl.dataset.position, 10));
      t.forEach((e) => {
        e.style.paddingRight = "0px";
      }),
        (e.bodyEl.style.paddingRight = "0px"),
        (e.bodyEl.style.top = "auto"),
        e.bodyEl.classList.remove("dis-scroll"),
        window.scroll({ top: i, left: 0 }),
        e.bodyEl.removeAttribute("data-position"),
        (e.htmlEl.style.scrollBehavior = "smooth");
    };
    function n(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function s(e = {}, t = {}) {
      Object.keys(t).forEach((i) => {
        void 0 === e[i]
          ? (e[i] = t[i])
          : n(t[i]) && n(e[i]) && Object.keys(t[i]).length > 0 && s(e[i], t[i]);
      });
    }
    !(function () {
      const i = document?.querySelector("[data-burger]"),
        n = document?.querySelector("[data-menu]"),
        s = document?.querySelectorAll("[data-menu-item]"),
        r = document?.querySelector("[data-menu-overlay]");
      i?.addEventListener("click", (s) => {
        i?.classList.toggle("burger--active"),
          n?.classList.toggle("menu--active"),
          n?.classList.contains("menu--active")
            ? (i?.setAttribute("aria-expanded", "true"),
              i?.setAttribute("aria-label", "Закрыть меню"),
              (() => {
                const t = document?.querySelectorAll(".fixed-block"),
                  i = window.scrollY,
                  n = window.innerWidth - e.bodyEl.offsetWidth + "px";
                (e.htmlEl.style.scrollBehavior = "none"),
                  t.forEach((e) => {
                    e.style.paddingRight = n;
                  }),
                  (e.bodyEl.style.paddingRight = n),
                  e.bodyEl.classList.add("dis-scroll"),
                  (e.bodyEl.dataset.position = i),
                  (e.bodyEl.style.top = `-${i}px`);
              })())
            : (i?.setAttribute("aria-expanded", "false"),
              i?.setAttribute("aria-label", "Открыть меню"),
              t());
      }),
        r?.addEventListener("click", () => {
          i?.setAttribute("aria-expanded", "false"),
            i?.setAttribute("aria-label", "Открыть меню"),
            i.classList.remove("burger--active"),
            n.classList.remove("menu--active"),
            t();
        }),
        s?.forEach((e) => {
          e.addEventListener("click", () => {
            i?.setAttribute("aria-expanded", "false"),
              i?.setAttribute("aria-label", "Открыть меню"),
              i.classList.remove("burger--active"),
              n.classList.remove("menu--active"),
              t();
          });
        });
    })(),
      i(595),
      i(154),
      i(392),
      i(255);
    const r = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function o() {
      const e = "undefined" != typeof document ? document : {};
      return s(e, r), e;
    }
    const a = {
      document: r,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function l() {
      const e = "undefined" != typeof window ? window : {};
      return s(e, a), e;
    }
    class c extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function d(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...d(e)) : t.push(e);
        }),
        t
      );
    }
    function u(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function h(e, t) {
      const i = l(),
        n = o();
      let s = [];
      if (!t && e instanceof c) return e;
      if (!e) return new c(s);
      if ("string" == typeof e) {
        const i = e.trim();
        if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
          let e = "div";
          0 === i.indexOf("<li") && (e = "ul"),
            0 === i.indexOf("<tr") && (e = "tbody"),
            (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
            0 === i.indexOf("<tbody") && (e = "table"),
            0 === i.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = i;
          for (let e = 0; e < t.childNodes.length; e += 1)
            s.push(t.childNodes[e]);
        } else
          s = (function (e, t) {
            if ("string" != typeof e) return [e];
            const i = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) i.push(n[e]);
            return i;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === i || e === n) s.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof c) return e;
        s = e;
      }
      return new c(
        (function (e) {
          const t = [];
          for (let i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        })(s)
      );
    }
    h.fn = c.prototype;
    const p = "resize scroll".split(" ");
    function f(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            p.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : h(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    f("click"),
      f("blur"),
      f("focus"),
      f("focusin"),
      f("focusout"),
      f("keyup"),
      f("keydown"),
      f("keypress"),
      f("submit"),
      f("change"),
      f("mousedown"),
      f("mousemove"),
      f("mouseup"),
      f("mouseenter"),
      f("mouseleave"),
      f("mouseout"),
      f("mouseover"),
      f("touchstart"),
      f("touchend"),
      f("touchmove"),
      f("resize"),
      f("scroll");
    const m = {
      addClass: function (...e) {
        const t = d(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = d(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = d(e.map((e) => e.split(" ")));
        return (
          u(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = d(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (const t in e)
              (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, i, n, s] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const s = e.target.dom7EventData || [];
          if ((s.indexOf(e) < 0 && s.unshift(e), h(t).is(i))) n.apply(t, s);
          else {
            const e = h(t).parents();
            for (let t = 0; t < e.length; t += 1)
              h(e[t]).is(i) && n.apply(e[t], s);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, s] = e), (i = void 0)),
          s || (s = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, s);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: o }),
                t.addEventListener(e, o, s);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, i, n, s] = e;
        "function" == typeof e[1] && (([t, n, s] = e), (i = void 0)),
          s || (s = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!i && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : i && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const i = o[e];
                (n && i.listener === n) ||
                (n &&
                  i.listener &&
                  i.listener.dom7proxy &&
                  i.listener.dom7proxy === n)
                  ? (r.removeEventListener(t, i.proxyListener, s),
                    o.splice(e, 1))
                  : n ||
                    (r.removeEventListener(t, i.proxyListener, s),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = l(),
          i = e[0].split(" "),
          n = e[1];
        for (let s = 0; s < i.length; s += 1) {
          const r = i[s];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i];
            if (t.CustomEvent) {
              const i = new t.CustomEvent(r, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (s.dom7EventData = e.filter((e, t) => t > 0)),
                s.dispatchEvent(i),
                (s.dom7EventData = []),
                delete s.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function i(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", i));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = l(),
            t = o(),
            i = this[0],
            n = i.getBoundingClientRect(),
            s = t.body,
            r = i.clientTop || s.clientTop || 0,
            a = i.clientLeft || s.clientLeft || 0,
            c = i === e ? e.scrollY : i.scrollTop,
            d = i === e ? e.scrollX : i.scrollLeft;
          return { top: n.top + c - r, left: n.left + d - a };
        }
        return null;
      },
      css: function (e, t) {
        const i = l();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, i) => {
              e.apply(t, [t, i]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = l(),
          i = o(),
          n = this[0];
        let s, r;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (s = h(e), r = 0; r < s.length; r += 1) if (s[r] === n) return !0;
          return !1;
        }
        if (e === i) return n === i;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof c) {
          for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
            if (s[r] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return h([]);
        if (e < 0) {
          const i = t + e;
          return h(i < 0 ? [] : [this[i]]);
        }
        return h([this[e]]);
      },
      append: function (...e) {
        let t;
        const i = o();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = i.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof c)
              for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = o();
        let i, n;
        for (i = 0; i < this.length; i += 1)
          if ("string" == typeof e) {
            const s = t.createElement("div");
            for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n -= 1)
              this[i].insertBefore(s.childNodes[n], this[i].childNodes[0]);
          } else if (e instanceof c)
            for (n = 0; n < e.length; n += 1)
              this[i].insertBefore(e[n], this[i].childNodes[0]);
          else this[i].insertBefore(e, this[i].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e)
              ? h([this[0].nextElementSibling])
              : h([])
            : this[0].nextElementSibling
            ? h([this[0].nextElementSibling])
            : h([])
          : h([]);
      },
      nextAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return h([]);
        for (; i.nextElementSibling; ) {
          const n = i.nextElementSibling;
          e ? h(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return h(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && h(t.previousElementSibling).is(e)
              ? h([t.previousElementSibling])
              : h([])
            : t.previousElementSibling
            ? h([t.previousElementSibling])
            : h([]);
        }
        return h([]);
      },
      prevAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return h([]);
        for (; i.previousElementSibling; ) {
          const n = i.previousElementSibling;
          e ? h(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return h(t);
      },
      parent: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? h(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return h(t);
      },
      parents: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          let n = this[i].parentNode;
          for (; n; )
            e ? h(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return h(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return h(t);
      },
      children: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i].children;
          for (let i = 0; i < n.length; i += 1)
            (e && !h(n[i]).is(e)) || t.push(n[i]);
        }
        return h(t);
      },
      filter: function (e) {
        return h(u(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(m).forEach((e) => {
      Object.defineProperty(h.fn, e, { value: m[e], writable: !0 });
    });
    const g = h;
    function v(e, t = 0) {
      return setTimeout(e, t);
    }
    function b() {
      return Date.now();
    }
    function y(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function E(...e) {
      const t = Object(e[0]),
        i = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < e.length; s += 1) {
        const r = e[s];
        if (
          null != r &&
          ((n = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => i.indexOf(e) < 0);
          for (let i = 0, n = e.length; i < n; i += 1) {
            const n = e[i],
              s = Object.getOwnPropertyDescriptor(r, n);
            void 0 !== s &&
              s.enumerable &&
              (y(t[n]) && y(r[n])
                ? r[n].__swiper__
                  ? (t[n] = r[n])
                  : E(t[n], r[n])
                : !y(t[n]) && y(r[n])
                ? ((t[n] = {}), r[n].__swiper__ ? (t[n] = r[n]) : E(t[n], r[n]))
                : (t[n] = r[n]));
          }
        }
      }
      var n;
      return t;
    }
    function _(e, t, i) {
      e.style.setProperty(t, i);
    }
    function S({ swiper: e, targetPosition: t, side: i }) {
      const n = l(),
        s = -e.translate;
      let r,
        o = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const c = t > s ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (r = new Date().getTime()), null === o && (o = r);
          const l = Math.max(Math.min((r - o) / a, 1), 0),
            c = 0.5 - Math.cos(l * Math.PI) / 2;
          let h = s + c * (t - s);
          if ((d(h, t) && (h = t), e.wrapperEl.scrollTo({ [i]: h }), d(h, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [i]: h });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(u);
        };
      u();
    }
    let w, C, T;
    function L() {
      return (
        w ||
          (w = (function () {
            const e = l(),
              t = o();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const i = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, i);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        w
      );
    }
    const O = {
        on(e, t, i) {
          const n = this;
          if ("function" != typeof t) return n;
          const s = i ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              n.eventsListeners[e] || (n.eventsListeners[e] = []),
                n.eventsListeners[e][s](t);
            }),
            n
          );
        },
        once(e, t, i) {
          const n = this;
          if ("function" != typeof t) return n;
          function s(...i) {
            n.off(e, s),
              s.__emitterProxy && delete s.__emitterProxy,
              t.apply(n, i);
          }
          return (s.__emitterProxy = t), n.on(e, s, i);
        },
        onAny(e, t) {
          const i = this;
          if ("function" != typeof e) return i;
          const n = t ? "unshift" : "push";
          return (
            i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[n](e), i
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const i = t.eventsAnyListeners.indexOf(e);
          return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
        },
        off(e, t) {
          const i = this;
          return i.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach((n, s) => {
                      (n === t ||
                        (n.__emitterProxy && n.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(s, 1);
                    });
              }),
              i)
            : i;
        },
        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let i, n, s;
          return (
            "string" == typeof e[0] || Array.isArray(e[0])
              ? ((i = e[0]), (n = e.slice(1, e.length)), (s = t))
              : ((i = e[0].events), (n = e[0].data), (s = e[0].context || t)),
            n.unshift(s),
            (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(s, [e, ...n]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(s, n);
                  });
            }),
            t
          );
        },
      },
      x = {
        updateSize: function () {
          const e = this;
          let t, i;
          const n = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : n[0].clientWidth),
            (i =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : n[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === i && e.isVertical()) ||
              ((t =
                t -
                parseInt(n.css("padding-left") || 0, 10) -
                parseInt(n.css("padding-right") || 0, 10)),
              (i =
                i -
                parseInt(n.css("padding-top") || 0, 10) -
                parseInt(n.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(i) && (i = 0),
              Object.assign(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function i(e, i) {
            return parseFloat(e.getPropertyValue(t(i)) || 0);
          }
          const n = e.params,
            { $wrapperEl: s, size: r, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && n.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = s.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let h = [];
          const p = [],
            f = [];
          let m = n.slidesOffsetBefore;
          "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
          let g = n.slidesOffsetAfter;
          "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = n.spaceBetween,
            E = -m,
            S = 0,
            w = 0;
          if (void 0 === r) return;
          "string" == typeof y &&
            y.indexOf("%") >= 0 &&
            (y = (parseFloat(y.replace("%", "")) / 100) * r),
            (e.virtualSize = -y),
            o
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            n.centeredSlides &&
              n.cssMode &&
              (_(e.wrapperEl, "--swiper-centered-offset-before", ""),
              _(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const C = n.grid && n.grid.rows > 1 && e.grid;
          let T;
          C && e.grid.initSlides(u);
          const L =
            "auto" === n.slidesPerView &&
            n.breakpoints &&
            Object.keys(n.breakpoints).filter(
              (e) => void 0 !== n.breakpoints[e].slidesPerView
            ).length > 0;
          for (let s = 0; s < u; s += 1) {
            T = 0;
            const o = d.eq(s);
            if (
              (C && e.grid.updateSlide(s, o, u, t), "none" !== o.css("display"))
            ) {
              if ("auto" === n.slidesPerView) {
                L && (d[s].style[t("width")] = "");
                const r = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  n.roundLengths)
                )
                  T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = i(r, "width"),
                    t = i(r, "padding-left"),
                    n = i(r, "padding-right"),
                    s = i(r, "margin-left"),
                    a = i(r, "margin-right"),
                    l = r.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = e + s + a;
                  else {
                    const { clientWidth: i, offsetWidth: r } = o[0];
                    T = e + t + n + s + a + (r - i);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  n.roundLengths && (T = Math.floor(T));
              } else
                (T = (r - (n.slidesPerView - 1) * y) / n.slidesPerView),
                  n.roundLengths && (T = Math.floor(T)),
                  d[s] && (d[s].style[t("width")] = `${T}px`);
              d[s] && (d[s].swiperSlideSize = T),
                f.push(T),
                n.centeredSlides
                  ? ((E = E + T / 2 + S / 2 + y),
                    0 === S && 0 !== s && (E = E - r / 2 - y),
                    0 === s && (E = E - r / 2 - y),
                    Math.abs(E) < 0.001 && (E = 0),
                    n.roundLengths && (E = Math.floor(E)),
                    w % n.slidesPerGroup == 0 && h.push(E),
                    p.push(E))
                  : (n.roundLengths && (E = Math.floor(E)),
                    (w - Math.min(e.params.slidesPerGroupSkip, w)) %
                      e.params.slidesPerGroup ==
                      0 && h.push(E),
                    p.push(E),
                    (E = E + T + y)),
                (e.virtualSize += T + y),
                (S = T),
                (w += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + g),
            o &&
              a &&
              ("slide" === n.effect || "coverflow" === n.effect) &&
              s.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
            n.setWrapperSize &&
              s.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
            C && e.grid.updateWrapperSize(T, h, t),
            !n.centeredSlides)
          ) {
            const t = [];
            for (let i = 0; i < h.length; i += 1) {
              let s = h[i];
              n.roundLengths && (s = Math.floor(s)),
                h[i] <= e.virtualSize - r && t.push(s);
            }
            (h = t),
              Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 &&
                h.push(e.virtualSize - r);
          }
          if ((0 === h.length && (h = [0]), 0 !== n.spaceBetween)) {
            const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !n.cssMode || t !== d.length - 1).css({
              [i]: `${y}px`,
            });
          }
          if (n.centeredSlides && n.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
              (e -= n.spaceBetween);
            const t = e - r;
            h = h.map((e) => (e < 0 ? -m : e > t ? t + g : e));
          }
          if (n.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((t) => {
                e += t + (n.spaceBetween ? n.spaceBetween : 0);
              }),
              (e -= n.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2;
              h.forEach((e, i) => {
                h[i] = e - t;
              }),
                p.forEach((e, i) => {
                  p[i] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: h,
              slidesGrid: p,
              slidesSizesGrid: f,
            }),
            n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
          ) {
            _(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"),
              _(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              i = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + i));
          }
          u !== c && e.emit("slidesLengthChange"),
            h.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            p.length !== b && e.emit("slidesGridLengthChange"),
            n.watchSlidesProgress && e.updateSlidesOffset();
        },
        updateAutoHeight: function (e) {
          const t = this,
            i = [],
            n = t.virtual && t.params.virtual.enabled;
          let s,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            n
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                i.push(e);
              });
            else
              for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                const e = t.activeIndex + s;
                if (e > t.slides.length && !n) break;
                i.push(o(e));
              }
          else i.push(o(t.activeIndex));
          for (s = 0; s < i.length; s += 1)
            if (void 0 !== i[s]) {
              const e = i[s].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset = e.isHorizontal()
              ? t[i].offsetLeft
              : t[i].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            i = t.params,
            { slides: n, rtlTranslate: s, snapGrid: r } = t;
          if (0 === n.length) return;
          void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          s && (o = e),
            n.removeClass(i.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < n.length; e += 1) {
            const a = n[e];
            let l = a.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (l -= n[0].swiperSlideOffset);
            const c =
                (o + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + i.spaceBetween),
              d =
                (o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + i.spaceBetween),
              u = -(o - l),
              h = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (h > 1 && h <= t.size) ||
              (u <= 0 && h >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              n.eq(e).addClass(i.slideVisibleClass)),
              (a.progress = s ? -c : c),
              (a.originalProgress = s ? -d : d);
          }
          t.visibleSlides = g(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const i = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * i) || 0;
          }
          const i = t.params,
            n = t.maxTranslate() - t.minTranslate();
          let { progress: s, isBeginning: r, isEnd: o } = t;
          const a = r,
            l = o;
          0 === n
            ? ((s = 0), (r = !0), (o = !0))
            : ((s = (e - t.minTranslate()) / n), (r = s <= 0), (o = s >= 1)),
            Object.assign(t, { progress: s, isBeginning: r, isEnd: o }),
            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !r) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", s);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: i,
              $wrapperEl: n,
              activeIndex: s,
              realIndex: r,
            } = e,
            o = e.virtual && i.virtual.enabled;
          let a;
          t.removeClass(
            `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${i.slideClass}[data-swiper-slide-index="${s}"]`
                )
              : t.eq(s)),
            a.addClass(i.slideActiveClass),
            i.loop &&
              (a.hasClass(i.slideDuplicateClass)
                ? n
                    .children(
                      `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : n
                    .children(
                      `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(i.slideNextClass));
          let c = a
            .prevAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? n
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass)
                : n
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass),
              c.hasClass(i.slideDuplicateClass)
                ? n
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : n
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            i = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: n,
              snapGrid: s,
              params: r,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < n.length; e += 1)
              void 0 !== n[e + 1]
                ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2
                  ? (d = e)
                  : i >= n[e] && i < n[e + 1] && (d = e + 1)
                : i >= n[e] && (d = e);
            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (s.indexOf(i) >= 0) c = s.indexOf(i);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / r.slidesPerGroup);
          }
          if ((c >= s.length && (c = s.length - 1), d === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            i = t.params,
            n = g(e).closest(`.${i.slideClass}`)[0];
          let s,
            r = !1;
          if (n)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === n) {
                (r = !0), (s = e);
                break;
              }
          if (!n || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = n),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  g(n).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = s),
            i.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
    function I({ swiper: e, runCallbacks: t, direction: i, step: n }) {
      const { activeIndex: s, previousIndex: r } = e;
      let o = i;
      if (
        (o || (o = s > r ? "next" : s < r ? "prev" : "reset"),
        e.emit(`transition${n}`),
        t && s !== r)
      ) {
        if ("reset" === o) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === o
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    const M = {
        slideTo: function (e = 0, t = this.params.speed, i = !0, n, s) {
          if ("number" != typeof e && "string" != typeof e)
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: h,
            wrapperEl: p,
            enabled: f,
          } = r;
          if (
            (r.animating && a.preventInteractionOnTransition) ||
            (!f && !n && !s)
          )
            return !1;
          const m = Math.min(r.params.slidesPerGroupSkip, o);
          let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (u || a.initialSlide || 0) === (d || 0) &&
              i &&
              r.emit("beforeSlideChangeStart");
          const v = -l[g];
          if ((r.updateProgress(v), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                i = Math.floor(100 * c[e]),
                n = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= i && t < n - (n - i) / 2
                  ? (o = e)
                  : t >= i && t < n && (o = e + 1)
                : t >= i && (o = e);
            }
          if (r.initialized && o !== u) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              v > r.translate &&
              v > r.maxTranslate() &&
              (u || 0) !== o
            )
              return !1;
          }
          let b;
          if (
            ((b = o > u ? "next" : o < u ? "prev" : "reset"),
            (h && -v === r.translate) || (!h && v === r.translate))
          )
            return (
              r.updateActiveIndex(o),
              a.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== a.effect && r.setTranslate(v),
              "reset" !== b && (r.transitionStart(i, b), r.transitionEnd(i, b)),
              !1
            );
          if (a.cssMode) {
            const e = r.isHorizontal(),
              i = h ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (p[e ? "scrollLeft" : "scrollTop"] = i),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  S({ swiper: r, targetPosition: i, side: e ? "left" : "top" }),
                  !0
                );
              p.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(o),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, n),
            r.transitionStart(i, b),
            0 === t
              ? r.transitionEnd(i, b)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(i, b));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, i = !0, n) {
          const s = this;
          let r = e;
          return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, i, n);
        },
        slideNext: function (e = this.params.speed, t = !0, i) {
          const n = this,
            { animating: s, enabled: r, params: o } = n;
          if (!r) return n;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
          const l = n.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (s && o.loopPreventsSlide) return !1;
            n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
          }
          return o.rewind && n.isEnd
            ? n.slideTo(0, e, t, i)
            : n.slideTo(n.activeIndex + l, e, t, i);
        },
        slidePrev: function (e = this.params.speed, t = !0, i) {
          const n = this,
            {
              params: s,
              animating: r,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = n;
          if (!c) return n;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? n.translate : -n.translate),
            h = o.map((e) => d(e));
          let p = o[h.indexOf(u) - 1];
          if (void 0 === p && s.cssMode) {
            let e;
            o.forEach((t, i) => {
              u >= t && (e = i);
            }),
              void 0 !== e && (p = o[e > 0 ? e - 1 : e]);
          }
          let f = 0;
          return (
            void 0 !== p &&
              ((f = a.indexOf(p)),
              f < 0 && (f = n.activeIndex - 1),
              "auto" === s.slidesPerView &&
                1 === s.slidesPerGroup &&
                s.slidesPerGroupAuto &&
                ((f = f - n.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            s.rewind && n.isBeginning
              ? n.slideTo(n.slides.length - 1, e, t, i)
              : n.slideTo(f, e, t, i)
          );
        },
        slideReset: function (e = this.params.speed, t = !0, i) {
          return this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function (e = this.params.speed, t = !0, i, n = 0.5) {
          const s = this;
          let r = s.activeIndex;
          const o = Math.min(s.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / s.params.slidesPerGroup),
            l = s.rtlTranslate ? s.translate : -s.translate;
          if (l >= s.snapGrid[a]) {
            const e = s.snapGrid[a];
            l - e > (s.snapGrid[a + 1] - e) * n &&
              (r += s.params.slidesPerGroup);
          } else {
            const e = s.snapGrid[a - 1];
            l - e <= (s.snapGrid[a] - e) * n && (r -= s.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, s.slidesGrid.length - 1)),
            s.slideTo(r, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: i } = e,
            n =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let s,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (s = parseInt(
              g(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - n / 2 ||
                  r > e.slides.length - e.loopedSlides + n / 2
                  ? (e.loopFix(),
                    (r = i
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    v(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - n
                ? (e.loopFix(),
                  (r = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  v(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      },
      A = {
        loopCreate: function () {
          const e = this,
            t = o(),
            { params: i, $wrapperEl: n } = e,
            s = n.children().length > 0 ? g(n.children()[0].parentNode) : n;
          s.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
          let r = s.children(`.${i.slideClass}`);
          if (i.loopFillGroupWithBlank) {
            const e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
            if (e !== i.slidesPerGroup) {
              for (let n = 0; n < e; n += 1) {
                const e = g(t.createElement("div")).addClass(
                  `${i.slideClass} ${i.slideBlankClass}`
                );
                s.append(e);
              }
              r = s.children(`.${i.slideClass}`);
            }
          }
          "auto" !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10)
            )),
            (e.loopedSlides += i.loopAdditionalSlides),
            e.loopedSlides > r.length && (e.loopedSlides = r.length);
          const a = [],
            l = [];
          r.each((t, i) => {
            const n = g(t);
            i < e.loopedSlides && l.push(t),
              i < r.length && i >= r.length - e.loopedSlides && a.push(t),
              n.attr("data-swiper-slide-index", i);
          });
          for (let e = 0; e < l.length; e += 1)
            s.append(g(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (let e = a.length - 1; e >= 0; e -= 1)
            s.prepend(g(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: i,
            loopedSlides: n,
            allowSlidePrev: s,
            allowSlideNext: r,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          t < n
            ? ((l = i.length - 3 * n + t),
              (l += n),
              e.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((a ? -e.translate : e.translate) - c))
            : t >= i.length - n &&
              ((l = -i.length + t + n),
              (l += n),
              e.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((a ? -e.translate : e.translate) - c)),
            (e.allowSlidePrev = s),
            (e.allowSlideNext = r),
            e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: i } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      };
    function P(e) {
      const t = this,
        i = o(),
        n = l(),
        s = t.touchEventsData,
        { params: r, touches: a, enabled: c } = t;
      if (!c) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let d = e;
      d.originalEvent && (d = d.originalEvent);
      let u = g(d.target);
      if ("wrapper" === r.touchEventsTarget && !u.closest(t.wrapperEl).length)
        return;
      if (
        ((s.isTouchEvent = "touchstart" === d.type),
        !s.isTouchEvent && "which" in d && 3 === d.which)
      )
        return;
      if (!s.isTouchEvent && "button" in d && d.button > 0) return;
      if (s.isTouched && s.isMoved) return;
      r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        d.target &&
        d.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (u = g(e.path[0]));
      const h = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        p = !(!d.target || !d.target.shadowRoot);
      if (
        r.noSwiping &&
        (p
          ? (function (e, t = this) {
              return (function t(i) {
                return i && i !== o() && i !== l()
                  ? (i.assignedSlot && (i = i.assignedSlot),
                    i.closest(e) || t(i.getRootNode().host))
                  : null;
              })(t);
            })(h, d.target)
          : u.closest(h)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
        (a.currentY =
          "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
      const f = a.currentX,
        m = a.currentY,
        v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (v && (f <= y || f >= n.innerWidth - y)) {
        if ("prevent" !== v) return;
        e.preventDefault();
      }
      if (
        (Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = f),
        (a.startY = m),
        (s.touchStartTime = b()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (s.allowThresholdMove = !1),
        "touchstart" !== d.type)
      ) {
        let e = !0;
        u.is(s.focusableElements) && (e = !1),
          i.activeElement &&
            g(i.activeElement).is(s.focusableElements) &&
            i.activeElement !== u[0] &&
            i.activeElement.blur();
        const n = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !n) ||
          u[0].isContentEditable ||
          d.preventDefault();
      }
      t.emit("touchStart", d);
    }
    function k(e) {
      const t = o(),
        i = this,
        n = i.touchEventsData,
        { params: s, touches: r, rtlTranslate: a, enabled: l } = i;
      if (!l) return;
      let c = e;
      if ((c.originalEvent && (c = c.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          i.emit("touchMoveOpposite", c)
        );
      if (n.isTouchEvent && "touchmove" !== c.type) return;
      const d =
          "touchmove" === c.type &&
          c.targetTouches &&
          (c.targetTouches[0] || c.changedTouches[0]),
        u = "touchmove" === c.type ? d.pageX : c.pageX,
        h = "touchmove" === c.type ? d.pageY : c.pageY;
      if (c.preventedByNestedSwiper) return (r.startX = u), void (r.startY = h);
      if (!i.allowTouchMove)
        return (
          (i.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: h,
              currentX: u,
              currentY: h,
            }),
            (n.touchStartTime = b()))
          )
        );
      if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
        if (i.isVertical()) {
          if (
            (h < r.startY && i.translate <= i.maxTranslate()) ||
            (h > r.startY && i.translate >= i.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (u < r.startX && i.translate <= i.maxTranslate()) ||
          (u > r.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        c.target === t.activeElement &&
        g(c.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (i.allowClick = !1);
      if (
        (n.allowTouchCallbacks && i.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = h);
      const p = r.currentX - r.startX,
        f = r.currentY - r.startY;
      if (i.params.threshold && Math.sqrt(p ** 2 + f ** 2) < i.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (i.isHorizontal() && r.currentY === r.startY) ||
        (i.isVertical() && r.currentX === r.startX)
          ? (n.isScrolling = !1)
          : p * p + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
            (n.isScrolling = i.isHorizontal()
              ? e > s.touchAngle
              : 90 - e > s.touchAngle));
      }
      if (
        (n.isScrolling && i.emit("touchMoveOpposite", c),
        void 0 === n.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (i.allowClick = !1),
        !s.cssMode && c.cancelable && c.preventDefault(),
        s.touchMoveStopPropagation && !s.nested && c.stopPropagation(),
        n.isMoved ||
          (s.loop && !s.cssMode && i.loopFix(),
          (n.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating &&
            i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !s.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", c)),
        i.emit("sliderMove", c),
        (n.isMoved = !0);
      let m = i.isHorizontal() ? p : f;
      (r.diff = m),
        (m *= s.touchRatio),
        a && (m = -m),
        (i.swipeDirection = m > 0 ? "prev" : "next"),
        (n.currentTranslate = m + n.startTranslate);
      let v = !0,
        y = s.resistanceRatio;
      if (
        (s.touchReleaseOnEdges && (y = 0),
        m > 0 && n.currentTranslate > i.minTranslate()
          ? ((v = !1),
            s.resistance &&
              (n.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + n.startTranslate + m) ** y))
          : m < 0 &&
            n.currentTranslate < i.maxTranslate() &&
            ((v = !1),
            s.resistance &&
              (n.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - n.startTranslate - m) ** y)),
        v && (c.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        s.threshold > 0)
      ) {
        if (!(Math.abs(m) > s.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            void (r.diff = i.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      s.followFinger &&
        !s.cssMode &&
        (((s.freeMode && s.freeMode.enabled && i.freeMode) ||
          s.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        i.params.freeMode &&
          s.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(n.currentTranslate),
        i.setTranslate(n.currentTranslate));
    }
    function N(e) {
      const t = this,
        i = t.touchEventsData,
        {
          params: n,
          touches: s,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", l),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      n.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = b(),
        d = c - i.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((i.lastClickTime = b()),
        v(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let u;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (u = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let h = 0,
        p = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((h = e), (p = o[e + t] - o[e]))
          : u >= o[e] && ((h = e), (p = o[o.length - 1] - o[o.length - 2]));
      }
      const f = (u - o[h]) / p,
        m = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (d > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (f >= n.longSwipesRatio ? t.slideTo(h + m) : t.slideTo(h)),
          "prev" === t.swipeDirection &&
            (f > 1 - n.longSwipesRatio ? t.slideTo(h + m) : t.slideTo(h));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        !t.navigation ||
        (l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl)
          ? ("next" === t.swipeDirection && t.slideTo(h + m),
            "prev" === t.swipeDirection && t.slideTo(h))
          : l.target === t.navigation.nextEl
          ? t.slideTo(h + m)
          : t.slideTo(h);
      }
    }
    function D() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: s, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = n),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function j(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function $() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: n } = e;
      if (!n) return;
      let s;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        s !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let F = !1;
    function G() {}
    const B = (e, t) => {
        const i = o(),
          {
            params: n,
            touchEvents: s,
            el: r,
            wrapperEl: a,
            device: l,
            support: c,
          } = e,
          d = !!n.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          h = t;
        if (c.touch) {
          const t = !(
            "touchstart" !== s.start ||
            !c.passiveListener ||
            !n.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[u](s.start, e.onTouchStart, t),
            r[u](
              s.move,
              e.onTouchMove,
              c.passiveListener ? { passive: !1, capture: d } : d
            ),
            r[u](s.end, e.onTouchEnd, t),
            s.cancel && r[u](s.cancel, e.onTouchEnd, t);
        } else
          r[u](s.start, e.onTouchStart, !1),
            i[u](s.move, e.onTouchMove, d),
            i[u](s.end, e.onTouchEnd, !1);
        (n.preventClicks || n.preventClicksPropagation) &&
          r[u]("click", e.onClick, !0),
          n.cssMode && a[u]("scroll", e.onScroll),
          n.updateOnWindowResize
            ? e[h](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                D,
                !0
              )
            : e[h]("observerUpdate", D, !0);
      },
      H = {
        attachEvents: function () {
          const e = this,
            t = o(),
            { params: i, support: n } = e;
          (e.onTouchStart = P.bind(e)),
            (e.onTouchMove = k.bind(e)),
            (e.onTouchEnd = N.bind(e)),
            i.cssMode && (e.onScroll = $.bind(e)),
            (e.onClick = j.bind(e)),
            n.touch && !F && (t.addEventListener("touchstart", G), (F = !0)),
            B(e, "on");
        },
        detachEvents: function () {
          B(this, "off");
        },
      },
      R = (e, t) => e.grid && t.grid && t.grid.rows > 1,
      z = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: i,
              rtl: n,
              $el: s,
              device: r,
              support: o,
            } = e,
            a = (function (e, t) {
              const i = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((n) => {
                        e[n] && i.push(t + n);
                      })
                    : "string" == typeof e && i.push(t + e);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: n },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
              ],
              i.containerModifierClass
            );
          t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      },
      V = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
    function q(e, t) {
      return function (i = {}) {
        const n = Object.keys(i)[0],
          s = i[n];
        "object" == typeof s && null !== s
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in s
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                E(t, i))
              : E(t, i))
          : E(t, i);
      };
    }
    const Y = {
        eventsEmitter: O,
        update: x,
        translate: {
          getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
            const {
              params: t,
              rtlTranslate: i,
              translate: n,
              $wrapperEl: s,
            } = this;
            if (t.virtualTranslate) return i ? -n : n;
            if (t.cssMode) return n;
            let r = (function (e, t = "x") {
              const i = l();
              let n, s, r;
              const o = (function (e) {
                const t = l();
                let i;
                return (
                  t.getComputedStyle && (i = t.getComputedStyle(e, null)),
                  !i && e.currentStyle && (i = e.currentStyle),
                  i || (i = e.style),
                  i
                );
              })(e);
              return (
                i.WebKitCSSMatrix
                  ? ((s = o.transform || o.webkitTransform),
                    s.split(",").length > 6 &&
                      (s = s
                        .split(", ")
                        .map((e) => e.replace(",", "."))
                        .join(", ")),
                    (r = new i.WebKitCSSMatrix("none" === s ? "" : s)))
                  : ((r =
                      o.MozTransform ||
                      o.OTransform ||
                      o.MsTransform ||
                      o.msTransform ||
                      o.transform ||
                      o
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,")),
                    (n = r.toString().split(","))),
                "x" === t &&
                  (s = i.WebKitCSSMatrix
                    ? r.m41
                    : 16 === n.length
                    ? parseFloat(n[12])
                    : parseFloat(n[4])),
                "y" === t &&
                  (s = i.WebKitCSSMatrix
                    ? r.m42
                    : 16 === n.length
                    ? parseFloat(n[13])
                    : parseFloat(n[5])),
                s || 0
              );
            })(s[0], e);
            return i && (r = -r), r || 0;
          },
          setTranslate: function (e, t) {
            const i = this,
              {
                rtlTranslate: n,
                params: s,
                $wrapperEl: r,
                wrapperEl: o,
                progress: a,
              } = i;
            let l,
              c = 0,
              d = 0;
            i.isHorizontal() ? (c = n ? -e : e) : (d = e),
              s.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
              s.cssMode
                ? (o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    i.isHorizontal() ? -c : -d)
                : s.virtualTranslate ||
                  r.transform(`translate3d(${c}px, ${d}px, 0px)`),
              (i.previousTranslate = i.translate),
              (i.translate = i.isHorizontal() ? c : d);
            const u = i.maxTranslate() - i.minTranslate();
            (l = 0 === u ? 0 : (e - i.minTranslate()) / u),
              l !== a && i.updateProgress(e),
              i.emit("setTranslate", i.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            e = 0,
            t = this.params.speed,
            i = !0,
            n = !0,
            s
          ) {
            const r = this,
              { params: o, wrapperEl: a } = r;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            const l = r.minTranslate(),
              c = r.maxTranslate();
            let d;
            if (
              ((d = n && e > l ? l : n && e < c ? c : e),
              r.updateProgress(d),
              o.cssMode)
            ) {
              const e = r.isHorizontal();
              if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
              else {
                if (!r.support.smoothScroll)
                  return (
                    S({
                      swiper: r,
                      targetPosition: -d,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (r.setTransition(0),
                  r.setTranslate(d),
                  i &&
                    (r.emit("beforeTransitionStart", t, s),
                    r.emit("transitionEnd")))
                : (r.setTransition(t),
                  r.setTranslate(d),
                  i &&
                    (r.emit("beforeTransitionStart", t, s),
                    r.emit("transitionStart")),
                  r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                          i && r.emit("transitionEnd"));
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode || i.$wrapperEl.transition(e),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const i = this,
              { params: n } = i;
            n.cssMode ||
              (n.autoHeight && i.updateAutoHeight(),
              I({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const i = this,
              { params: n } = i;
            (i.animating = !1),
              n.cssMode ||
                (i.setTransition(0),
                I({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: M,
        loop: A,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (i.style.cursor = "move"),
              (i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (i.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (i.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: H,
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: i,
                loopedSlides: n = 0,
                params: s,
                $el: r,
              } = e,
              o = s.breakpoints;
            if (!o || (o && 0 === Object.keys(o).length)) return;
            const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const l = (a in o ? o[a] : void 0) || e.originalParams,
              c = R(e, s),
              d = R(e, l),
              u = s.enabled;
            c && !d
              ? (r.removeClass(
                  `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !c &&
                d &&
                (r.addClass(`${s.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === s.grid.fill)) &&
                  r.addClass(`${s.containerModifierClass}grid-column`),
                e.emitContainerClasses());
            const h = l.direction && l.direction !== s.direction,
              p = s.loop && (l.slidesPerView !== s.slidesPerView || h);
            h && i && e.changeDirection(), E(e.params, l);
            const f = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              u && !f ? e.disable() : !u && f && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", l),
              p &&
                i &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - n + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t = "window", i) {
            if (!e || ("container" === t && !i)) return;
            let n = !1;
            const s = l(),
              r = "window" === t ? s.innerHeight : i.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: r, value: a } = o[e];
              "window" === t
                ? s.matchMedia(`(min-width: ${a}px)`).matches && (n = r)
                : a <= i.clientWidth && (n = r);
            }
            return n || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: n } = i;
            if (n) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: z,
        images: {
          loadImage: function (e, t, i, n, s, r) {
            const o = l();
            let a;
            function c() {
              r && r();
            }
            g(e).parent("picture")[0] || (e.complete && s)
              ? c()
              : t
              ? ((a = new o.Image()),
                (a.onload = c),
                (a.onerror = c),
                n && (a.sizes = n),
                i && (a.srcset = i),
                t && (a.src = t))
              : c();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
              const n = e.imagesToLoad[i];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      K = {};
    class W {
      constructor(...e) {
        let t, i;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (i = e[0])
            : ([t, i] = e),
          i || (i = {}),
          (i = E({}, i)),
          t && !i.el && (i.el = t),
          i.el && g(i.el).length > 1)
        ) {
          const e = [];
          return (
            g(i.el).each((t) => {
              const n = E({}, i, { el: t });
              e.push(new W(n));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = L()),
          (n.device = (function (e = {}) {
            return (
              C ||
                (C = (function ({ userAgent: e } = {}) {
                  const t = L(),
                    i = l(),
                    n = i.navigator.platform,
                    s = e || i.navigator.userAgent,
                    r = { ios: !1, android: !1 },
                    o = i.screen.width,
                    a = i.screen.height,
                    c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
                  let d = s.match(/(iPad).*OS\s([\d_]+)/);
                  const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                    h = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    p = "Win32" === n;
                  let f = "MacIntel" === n;
                  return (
                    !d &&
                      f &&
                      t.touch &&
                      [
                        "1024x1366",
                        "1366x1024",
                        "834x1194",
                        "1194x834",
                        "834x1112",
                        "1112x834",
                        "768x1024",
                        "1024x768",
                        "820x1180",
                        "1180x820",
                        "810x1080",
                        "1080x810",
                      ].indexOf(`${o}x${a}`) >= 0 &&
                      ((d = s.match(/(Version)\/([\d.]+)/)),
                      d || (d = [0, 1, "13_0_0"]),
                      (f = !1)),
                    c && !p && ((r.os = "android"), (r.android = !0)),
                    (d || h || u) && ((r.os = "ios"), (r.ios = !0)),
                    r
                  );
                })(e)),
              C
            );
          })({ userAgent: i.userAgent })),
          (n.browser =
            (T ||
              (T = (function () {
                const e = l();
                return {
                  isSafari: (function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      t.indexOf("chrome") < 0 &&
                      t.indexOf("android") < 0
                    );
                  })(),
                  isWebView:
                    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                };
              })()),
            T)),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
        const s = {};
        n.modules.forEach((e) => {
          e({
            swiper: n,
            extendParams: q(i, s),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const r = E({}, V, s);
        return (
          (n.params = E({}, r, K, i)),
          (n.originalParams = E({}, n.params)),
          (n.passedParams = E({}, i)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = g),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: g(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: b(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = i.minTranslate(),
          s = (i.maxTranslate() - n) * e + n;
        i.translateTo(s, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((i) => {
          const n = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: n }), e.emit("_slideClass", i, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: i,
          slides: n,
          slidesGrid: s,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let e,
            t = n[a].swiperSlideSize;
          for (let i = a + 1; i < n.length; i += 1)
            n[i] &&
              !e &&
              ((t += n[i].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let i = a - 1; i >= 0; i -= 1)
            n[i] &&
              !e &&
              ((t += n[i].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < n.length; e += 1)
            (t ? s[e] + r[e] - s[a] < o : s[e] - s[a] < o) && (l += 1);
        else for (let e = a - 1; e >= 0; e -= 1) s[a] - s[e] < o && (l += 1);
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let s;
        i.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((s =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              s || n()),
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const i = this,
          n = i.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.$el
              .removeClass(`${i.params.containerModifierClass}${n}`)
              .addClass(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const i = g(e || t.params.el);
        if (!(e = i[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = g(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => i.children(e)), t;
          }
          return i.children(n());
        })();
        if (0 === s.length && t.params.createElements) {
          const e = o().createElement("div");
          (s = g(e)),
            (e.className = t.params.wrapperClass),
            i.append(e),
            i.children(`.${t.params.slideClass}`).each((e) => {
              s.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: i,
            el: e,
            $wrapperEl: s,
            wrapperEl: s[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
            wrongRTL: "-webkit-box" === s.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        return (
          t.initialized ||
            !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const i = this,
          { params: n, $el: s, $wrapperEl: r, slides: o } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            n.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              s.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        E(K, e);
      }
      static get extendedDefaults() {
        return K;
      }
      static get defaults() {
        return V;
      }
      static installModule(e) {
        W.prototype.__modules__ || (W.prototype.__modules__ = []);
        const t = W.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => W.installModule(e)), W)
          : (W.installModule(e), W);
      }
    }
    Object.keys(Y).forEach((e) => {
      Object.keys(Y[e]).forEach((t) => {
        W.prototype[t] = Y[e][t];
      });
    }),
      W.use([
        function ({ swiper: e, on: t, emit: i }) {
          const n = l();
          let s = null;
          const r = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (i("beforeResize"), i("resize"));
            },
            o = () => {
              e && !e.destroyed && e.initialized && i("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((s = new ResizeObserver((t) => {
                  const { width: i, height: n } = e;
                  let s = i,
                    o = n;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: i, target: n }) => {
                      (n && n !== e.el) ||
                        ((s = i ? i.width : (t[0] || t).inlineSize),
                        (o = i ? i.height : (t[0] || t).blockSize));
                    }
                  ),
                    (s === i && o === n) || r();
                })),
                s.observe(e.el))
              : (n.addEventListener("resize", r),
                n.addEventListener("orientationchange", o));
          }),
            t("destroy", () => {
              s && s.unobserve && e.el && (s.unobserve(e.el), (s = null)),
                n.removeEventListener("resize", r),
                n.removeEventListener("orientationchange", o);
            });
        },
        function ({ swiper: e, extendParams: t, on: i, emit: n }) {
          const s = [],
            r = l(),
            o = (e, t = {}) => {
              const i = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                s.push(i);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) o(t[e]);
                }
                o(e.$el[0], { childList: e.params.observeSlideChildren }),
                  o(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              s.forEach((e) => {
                e.disconnect();
              }),
                s.splice(0, s.length);
            });
        },
      ]);
    const U = W;
    function X(e, t, i, n) {
      const s = o();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((r) => {
            if (!i[r] && !0 === i.auto) {
              let o = e.$el.children(`.${n[r]}`)[0];
              o ||
                ((o = s.createElement("div")),
                (o.className = n[r]),
                e.$el.append(o)),
                (i[r] = o),
                (t[r] = o);
            }
          }),
        i
      );
    }
    function J(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    U.use([
      function ({ swiper: e, extendParams: t, on: i, emit: n }) {
        function s(t) {
          let i;
          return (
            t &&
              ((i = g(t)),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                i.length > 1 &&
                1 === e.$el.find(t).length &&
                (i = e.$el.find(t))),
            i
          );
        }
        function r(t, i) {
          const n = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[i ? "addClass" : "removeClass"](n.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
        }
        function o() {
          if (e.params.loop) return;
          const { $nextEl: t, $prevEl: i } = e.navigation;
          r(i, e.isBeginning && !e.params.rewind),
            r(t, e.isEnd && !e.params.rewind);
        }
        function a(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              e.slidePrev();
        }
        function l(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
        }
        function c() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = X(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !t.nextEl && !t.prevEl)
          )
            return;
          const i = s(t.nextEl),
            n = s(t.prevEl);
          i && i.length > 0 && i.on("click", l),
            n && n.length > 0 && n.on("click", a),
            Object.assign(e.navigation, {
              $nextEl: i,
              nextEl: i && i[0],
              $prevEl: n,
              prevEl: n && n[0],
            }),
            e.enabled ||
              (i && i.addClass(t.lockClass), n && n.addClass(t.lockClass));
        }
        function d() {
          const { $nextEl: t, $prevEl: i } = e.navigation;
          t &&
            t.length &&
            (t.off("click", l),
            t.removeClass(e.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off("click", a),
              i.removeClass(e.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          i("init", () => {
            c(), o();
          }),
          i("toEdge fromEdge lock unlock", () => {
            o();
          }),
          i("destroy", () => {
            d();
          }),
          i("enable disable", () => {
            const { $nextEl: t, $prevEl: i } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              i &&
                i[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          i("click", (t, i) => {
            const { $nextEl: s, $prevEl: r } = e.navigation,
              o = i.target;
            if (e.params.navigation.hideOnClick && !g(o).is(r) && !g(o).is(s)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === o || e.pagination.el.contains(o))
              )
                return;
              let t;
              s
                ? (t = s.hasClass(e.params.navigation.hiddenClass))
                : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                n(!0 === t ? "navigationShow" : "navigationHide"),
                s && s.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass);
            }
          }),
          Object.assign(e.navigation, { update: o, init: c, destroy: d });
      },
      function ({ swiper: e, extendParams: t, on: i, emit: n }) {
        const s = "swiper-pagination";
        let r;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let o = 0;
        function a() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function l(t, i) {
          const { bulletActiveClass: n } = e.params.pagination;
          t[i]().addClass(`${n}-${i}`)[i]().addClass(`${n}-${i}-${i}`);
        }
        function c() {
          const t = e.rtl,
            i = e.params.pagination;
          if (a()) return;
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            c = e.pagination.$el;
          let d;
          const u = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((d = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                d > s - 1 - 2 * e.loopedSlides && (d -= s - 2 * e.loopedSlides),
                d > u - 1 && (d -= u),
                d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
              : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === i.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const n = e.pagination.bullets;
            let s, a, u;
            if (
              (i.dynamicBullets &&
                ((r = n
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                c.css(
                  e.isHorizontal() ? "width" : "height",
                  r * (i.dynamicMainBullets + 4) + "px"
                ),
                i.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((o += d - (e.previousIndex - e.loopedSlides || 0)),
                  o > i.dynamicMainBullets - 1
                    ? (o = i.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (s = Math.max(d - o, 0)),
                (a = s + (Math.min(n.length, i.dynamicMainBullets) - 1)),
                (u = (a + s) / 2)),
              n.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${i.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              c.length > 1)
            )
              n.each((e) => {
                const t = g(e),
                  n = t.index();
                n === d && t.addClass(i.bulletActiveClass),
                  i.dynamicBullets &&
                    (n >= s &&
                      n <= a &&
                      t.addClass(`${i.bulletActiveClass}-main`),
                    n === s && l(t, "prev"),
                    n === a && l(t, "next"));
              });
            else {
              const t = n.eq(d),
                r = t.index();
              if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                const t = n.eq(s),
                  o = n.eq(a);
                for (let e = s; e <= a; e += 1)
                  n.eq(e).addClass(`${i.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (r >= n.length) {
                    for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                      n.eq(n.length - e).addClass(
                        `${i.bulletActiveClass}-main`
                      );
                    n.eq(n.length - i.dynamicMainBullets - 1).addClass(
                      `${i.bulletActiveClass}-prev`
                    );
                  } else l(t, "prev"), l(o, "next");
                else l(t, "prev"), l(o, "next");
              }
            }
            if (i.dynamicBullets) {
              const s = Math.min(n.length, i.dynamicMainBullets + 4),
                o = (r * s - r) / 2 - u * r,
                a = t ? "right" : "left";
              n.css(e.isHorizontal() ? a : "top", `${o}px`);
            }
          }
          if (
            ("fraction" === i.type &&
              (c.find(J(i.currentClass)).text(i.formatFractionCurrent(d + 1)),
              c.find(J(i.totalClass)).text(i.formatFractionTotal(u))),
            "progressbar" === i.type)
          ) {
            let t;
            t = i.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const n = (d + 1) / u;
            let s = 1,
              r = 1;
            "horizontal" === t ? (s = n) : (r = n),
              c
                .find(J(i.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${r})`)
                .transition(e.params.speed);
          }
          "custom" === i.type && i.renderCustom
            ? (c.html(i.renderCustom(e, d + 1, u)), n("paginationRender", c[0]))
            : n("paginationUpdate", c[0]),
            e.params.watchOverflow &&
              e.enabled &&
              c[e.isLocked ? "addClass" : "removeClass"](i.lockClass);
        }
        function d() {
          const t = e.params.pagination;
          if (a()) return;
          const i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            s = e.pagination.$el;
          let r = "";
          if ("bullets" === t.type) {
            let n = e.params.loop
              ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              n > i &&
              (n = i);
            for (let i = 0; i < n; i += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, i, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            s.html(r), (e.pagination.bullets = s.find(J(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            s.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              s.html(r)),
            "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
        }
        function u() {
          e.params.pagination = X(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let i = g(t.el);
          0 !== i.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              i.length > 1 &&
              ((i = e.$el.find(t.el)),
              i.length > 1 &&
                (i = i.filter((t) => g(t).parents(".swiper")[0] === e.el))),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            i.addClass(t.modifierClass + e.params.direction),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (o = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on("click", J(t.bulletClass), function (t) {
                t.preventDefault();
                let i = g(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }),
            Object.assign(e.pagination, { $el: i, el: i[0] }),
            e.enabled || i.addClass(t.lockClass));
        }
        function h() {
          const t = e.params.pagination;
          if (a()) return;
          const i = e.pagination.$el;
          i.removeClass(t.hiddenClass),
            i.removeClass(t.modifierClass + t.type),
            i.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && i.off("click", J(t.bulletClass));
        }
        i("init", () => {
          u(), d(), c();
        }),
          i("activeIndexChange", () => {
            (e.params.loop || void 0 === e.snapIndex) && c();
          }),
          i("snapIndexChange", () => {
            e.params.loop || c();
          }),
          i("slidesLengthChange", () => {
            e.params.loop && (d(), c());
          }),
          i("snapGridLengthChange", () => {
            e.params.loop || (d(), c());
          }),
          i("destroy", () => {
            h();
          }),
          i("enable disable", () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          i("lock unlock", () => {
            c();
          }),
          i("click", (t, i) => {
            const s = i.target,
              { $el: r } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r.length > 0 &&
              !g(s).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && s === e.navigation.nextEl) ||
                  (e.navigation.prevEl && s === e.navigation.prevEl))
              )
                return;
              const t = r.hasClass(e.params.pagination.hiddenClass);
              n(!0 === t ? "paginationShow" : "paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass);
            }
          }),
          Object.assign(e.pagination, {
            render: d,
            update: c,
            init: u,
            destroy: h,
          });
      },
    ]);
    const Q = document.querySelectorAll(".slider-container");
    Q.length > 0 &&
      Q.forEach((e) => {
        const t = e.querySelector(".slider"),
          i = e.querySelector(".swiper-button-next"),
          n = e.querySelector(".swiper-button-prev");
        t &&
          i &&
          n &&
          new U(t, {
            slidesPerView: 1.4,
            spaceBetween: 20,
            navigation: { nextEl: i, prevEl: n },
            breakpoints: {
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              500: { slidesPerView: 2 },
            },
          });
      }),
      i(407),
      i(344),
      i(137),
      i(429);
  })();
})();
