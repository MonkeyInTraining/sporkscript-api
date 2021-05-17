(function() {
        class DSObject {
            id;
            data;
            constructor(id){
                _map[id] = this;
                this.id = id;
                this.data = {
    
            };
        }
        destroy() {
                prompt(this.id, "SObj.Release(");
            _map[this.id] = null;
        }
        getName() {
                return this.constructor.name;
        }
        method(name, types, p1, p2, p3, p4) {
                return prompt(this.id, `SObj.Method(\f
                    ${name}\f
                    ${types}\f
                    ${p1}\f
                    ${p2}\f
                    ${p3}\f
                    ${p4}`);
        }
        release() {
                prompt(this.id, "SObj.Release(");
            _map[this.id] = null;
        }
    }
    class DSView extends DSObject {
            _left;
            _top;
            _parent;
            constructor(id1){
                super(id1);
                this._left = 0;
                this._top = 0;
                this._parent = null;
        }
        adjustColor(hue, saturation, brightness, contrast) {
                prompt(this.id, `Obj.AdjustColor(\f
                    ${hue}\f
                    ${saturation}\f
                    ${brightness}\f
                    ${contrast}`);
        }
        animate(type, callback, time) {
                prompt(this.id, `Obj.Animate(\f
                    ${type}\f
                    ${_Cbm(callback)}\f
                ${time}`);
        }
        clearFocus() {
                prompt(this.id, "Obj.ClearFocus(\\f");
        }
        destroy() {
                prompt(this.id, "Obj.Release(");
            _map[this.id] = null;
        }
        focus() {
                prompt(this.id, "Obj.Focus(\\f");
        }
        getParent() {
                return this._parent;
        }
        getVisibility() {
                return prompt(this.id, "Obj.GetVisibility(");
        }
        getWidth(options) {
                return parseFloat(prompt(this.id, `Obj.GetWidth(\f
                    ${options}`) || "");
        }
        getHeight(options) {
                return parseFloat(prompt(this.id, `Obj.GetHeight(\f
                    ${options}`) || "");
        }
        getAbsWidth() {
                return parseInt(prompt(this.id, "Obj.GetAbsWidth(") || "");
        }
        getAbsHeight() {
                return parseInt(prompt(this.id, "Obj.GetAbsHeight(") || "");
        }
        getLeft(options) {
                return parseFloat(prompt(this.id, `Obj.GetLeft(\f
                    ${options}`) || "");
        }
        getTop(options) {
                return parseFloat(prompt(this.id, `Obj.GetTop(\f
                    "${options}`) || "");
        }
        getPosition(options) {
                return JSON.parse(prompt(this.id, `Obj.GetPosition(\f
                    ${options}`) || "");
        }
        gone() {
                prompt(this.id, "Obj.SetVisibility(Gone");
        }
        hide() {
                prompt(this.id, "Obj.SetVisibility(Hide");
        }
        isVisible() {
                return prompt(this.id, "Obj.GetVisibility(") === "Show";
        }
        isEnabled() {
                return prompt(this.id, "Obj.IsEnabled(") === "true";
        }
        method(name, types, p1, p2, p3, p4) {
                return prompt(this.id, `Obj.Method(\f
                    ${name}\f
                    ${types}\f
                    ${p1}\f
                    ${p2}\f
                    ${p3}\f
                    ${p4}`);
        }
        release() {
                prompt(this.id, "Obj.Release(");
            _map[this.id] = null;
        }
        setBackAlpha(alpha) {
                prompt(this.id, `Obj.SetBackAlpha(\f
                    ${alpha}`);
        }
        setBackColor(color) {
                prompt(this.id, `Obj.SetBackColor(\f
                    ${color}`);
        }
        setBackGradient(color1, color2, color3, options) {
                prompt(this.id, `Obj.SetBackGradient(Linear\f
                    ${color1}\f
                    ${color2}\f
                    ${color3}\f
                    ${options}\f
                    ${null}\f
                    ${null}\f
                    ${null}`);
        }
        setBackGradientRadial(x, y, radius, color1, color2, color3, options) {
                prompt(this.id, `Obj.SetBackGradient(Radial\f
                    ${x}\f
                    ${y}\f
                    ${radius}\f
                    ${color1}\f
                    ${color2}\f
                    ${color3}\f
                    ${options}`);
        }
        setBackground(file, options) {
                prompt(this.id, `Obj.SetBackground(${file}\f
                    ${options}`);
        }
        setColorFilter(color, mode) {
                prompt(this.id, `Obj.SetColorFilter(\f
                    ${color}\f
                    ${mode}`);
        }
        setDescription(text) {
                prompt(this.id, `Obj.SetDescription(\f
                    ${text}`);
        }
        setEnabled(enable) {
                prompt(this.id, `Obj.SetEnabled(\f
                    ${enable}`);
        }
        setMargins(left, top, right, bottom, mode) {
                prompt(this.id, `Obj.SetMargins(\f
                    ${left}\f
                    ${top}\f
                    ${right}\f
                    ${bottom}\f
                    ${mode}`);
        }
        setPadding(left, top, right, bottom, mode) {
                prompt(this.id, `Obj.SetPadding(\f
                    ${left}\f
                    ${top}\f
                    ${right}\f
                    ${bottom}\f
                    ${mode}`);
        }
        setPosition(left, top, width, height, options) {
                prompt(this.id, `Obj.SetPosition(\f
                    ${left}\f
                    ${top}\f
                    ${width}\f
                    ${height}\f
                    ${options}`);
            this._left = left;
            this._top = top;
        }
        setScale(x, y) {
                prompt(this.id, `Obj.SetScale(\f
                    ${x}\f
                    ${y}`);
        }
        setSize(width, height, options) {
                prompt(this.id, `Obj.SetSize(\f
                    ${width}\f
                    ${height}\f
                    ${options}`);
        }
        setVisibility(mode) {
                prompt(this.id, `Obj.SetVisibility(${mode}`);
        }
        show() {
                prompt(this.id, "Obj.SetVisibility(Show");
        }
        tween(target, duration, type, repeat, yoyo, callback) {
                _Tween.apply(this, [
                    target,
                    duration,
                    type,
                    repeat,
                    yoyo,
                    callback
            ]);
        }
    }
    class Layout extends DSView {
            constructor(id2){
                super(id2);
        }
        static create(type, options) {
                var ret = prompt("#", `App.CreateLayout(${type}\f
                    ${options}`);
            if (ret) {
                    return new Layout(ret);
            } else {
                    throw new Error("Could not create Layout");
            }
        }
        addChild(child, order) {
                prompt(this.id, `Lay.AddChild(\f
                    ${child ? child.id : null}\f
                    ${order}`);
            if (child) child._parent = this;
        }
        animate(type, callback, time) {
                prompt(this.id, `Lay.Animate(\f
                    ${type}\f
                    ${_Cbm(callback)}\f
                ${time}`);
        }
        childToFront(child) {
                prompt(this.id, `Lay.ChildToFront(${child ? child.id : null}`);
        }
        destroyChild(child) {
                prompt(this.id, `Lay.DestroyChild(${child ? child.id : null}`);
            if (child) child._parent = null;
        }
        getChildOrder(child) {
                return parseInt(prompt(this.id, `Lay.GetChildOrder(\f
                    ${child ? child.id : null}`) || "");
        }
        removeChild(child) {
                prompt(this.id, `Lay.RemoveChild(${child ? child.id : null}`);
            if (child) {
                    child._parent = null;
            }
        }
        setBackColor(color) {
                prompt(this.id, `Lay.SetBackColor(\f
                    ${color}`);
        }
        setChildMargins(left, top, right, bottom, mode) {
                prompt(this.id, `Lay.SetChildMargins(\f
                    ${left}\f
                    ${top}\f
                    ${right}\f
                    ${bottom}\f
                    ${mode}`);
        }
        setChildTextSize(size, mode) {
                prompt(this.id, `Lay.SetChildTextSize(\f
                    ${size}\f
                    ${mode}`);
        }
        setCornerRadius(radius) {
                prompt(this.id, `Lay.SetCornerRadius(\f
                    ${radius}`);
        }
        setElevation(elevation) {
                prompt(this.id, `Lay.SetElevation(\f
                    ${elevation}`);
        }
        setGravity(gravity) {
                prompt(this.id, `Lay.SetGravity(\f
                    ${gravity}`);
        }
        setOnChildChange(callback) {
                prompt(this.id, `Lay.SetOnChildChange(\f
                    ${_Cbm(callback)}`);
        }
        setOnLongTouch(callback) {
                prompt(this.id, `Lay.SetOnLongTouch(\f
                    ${_Cbm(callback)}`);
        }
        setOnTouch(callback) {
                prompt(this.id, `Lay.SetOnTouch(\f
                    ${_Cbm(callback)}`);
        }
        setOnTouchDown(callback) {
                prompt(this.id, `Lay.SetOnTouchDown(\f
                    ${_Cbm(callback)}`);
        }
        setOnTouchMove(callback) {
                prompt(this.id, `Lay.SetOnTouchMove(\f
                    ${_Cbm(callback)}`);
        }
        setOnTouchUp(callback) {
                prompt(this.id, `Lay.SetOnTouchUp(\f
                    ${_Cbm(callback)}`);
        }
        setOrientation(orientation) {
                prompt(this.id, `Lay.SetOrientation(\f
                    ${orientation}`);
        }
        setTouchable(touchable) {
                prompt(this.id, `Lay.SetTouchable(\f
                    ${touchable}`);
        }
        setTouchThrough(through) {
                prompt(this.id, `Lay.SetTouchThrough(\f
                    ${through}`);
        }
    }
    class Text1 extends DSView {
            constructor(id3){
                super(id3);
        }
        static create(text, width, height, options) {
                var ret = prompt("#", `App.CreateText(${text}\f
                    ${width}\f
                    ${height}\f
                    ${options}`);
            if (ret) {
                    return new Text1(ret);
            } else {
                    throw new Error("Could not create Text");
            }
        }
        getHtml() {
                return prompt(this.id, "Txt.GetHtml(");
        }
        getLineCount() {
                return parseInt(prompt(this.id, "Txt.GetLineCount(") || "");
        }
        getLineStart(line) {
                return parseInt(prompt(this.id, `Txt.GetLineStart(${line}`) || "");
        }
        getLineTop(line) {
                return parseFloat(prompt(this.id, `Txt.GetLineTop(${line}`) || "");
        }
        getMaxLines() {
                return parseInt(prompt(this.id, "Txt.GetMaxLines(") || "");
        }
        getText() {
                return prompt(this.id, "Txt.GetText(");
        }
        getTextSize(mode) {
                return parseFloat(prompt(this.id, `Txt.GetTextSize(\f
                    ${mode}`) || "");
        }
        log(message, options) {
                prompt(this.id, `Txt.Log(\f
                    ${message}\f
                    ${options}`);
        }
        setEllipsize(mode) {
                prompt(this.id, `Txt.SetEllipsize(\f
                    ${mode}`);
        }
        setFontFile(file) {
                prompt(this.id, `Txt.SetFontFile(\f
                    ${file}`);
        }
        setHtml(html) {
                prompt(this.id, `Txt.SetHtml(${html}`);
        }
        setLog(maxLines) {
                prompt(this.id, `Txt.SetLog(\f
                    ${maxLines}`);
        }
        setTextShadow(radius, dx, dy, color) {
                prompt(this.id, `Txt.SetTextShadow(\f
                    ${radius}\f
                    ${dx}\f
                    ${dy}\f
                    ${color}`);
        }
        setOnLongTouch(callback) {
                prompt(this.id, `Txt.SetOnLongTouch(${_Cbm(callback)}`);
        }
        setOnTouch(callback) {
                prompt(this.id, `Txt.SetOnTouch(${_Cbm(callback)}`);
        }
        setOnTouchDown(callback) {
                prompt(this.id, `Txt.SetOnTouchDown(${_Cbm(callback)}`);
        }
        setOnTouchMove(callback) {
                prompt(this.id, `Txt.SetOnTouchMove(${_Cbm(callback)}`);
        }
        setOnTouchUp(callback) {
                prompt(this.id, `Txt.SetOnTouchUp(${_Cbm(callback)}`);
        }
        setText(text) {
                prompt(this.id, `Txt.SetText(${text}`);
        }
        setTextColor(color) {
                prompt(this.id, `Txt.SetTextColor(${color}`);
        }
        setTextSize(size, mode) {
                prompt(this.id, `Txt.SetTextSize(\f
                    ${size}\f
                    ${mode}`);
        }
        setTouchable(touchable) {
                prompt(this.id, `Txt.SetTouchable(${touchable}`);
        }
    }
    function OnStart1() {
            const lay = Layout.create("linear", "vcenter,fillxy");
        const txt = Text1.create("Hello World");
        txt.setMargins(0, 0.05, 0, 0);
        txt.setTextSize(22);
        lay.addChild(txt);
    }
    return {
            OnStart: OnStart1
    };
})();
