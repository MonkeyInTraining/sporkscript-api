    class DSObject {
        id;
        data;
        constructor(id19){
            _map[id19] = this;
            this.id = id19;
            this.data = {
            };
        }
        destroy() {
            prompt(this.id, "SObj.Release(");
            _map[this.id] = null;
        }
        getType() {
            return this.constructor.name;
        }
        method(name, types, p1, p2, p3, p4) {
            return prompt(this.id, `SObj.Method(\\f${name}\\f${types}\\f${p1}\\f${p2}\\f${p3}\\f${p4}`);
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
            prompt(this.id, `Obj.AdjustColor(\\f${hue}\\f${saturation}\\f${brightness}\\f${contrast}`);
        }
        animate(type, callback, time) {
            prompt(this.id, `Obj.Animate(\\f${type}\\f${_Cbm(callback)}\\f${time}`);
        }
        clearFocus() {
            prompt(this.id, "Obj.ClearFocus(\f");
        }
        destroy() {
            prompt(this.id, "Obj.Release(");
            _map[this.id] = null;
        }
        focus() {
            prompt(this.id, "Obj.Focus(\f");
        }
        getParent() {
            return this._parent;
        }
        getVisibility() {
            return prompt(this.id, "Obj.GetVisibility(");
        }
        getWidth(options) {
            return parseFloat(prompt(this.id, `Obj.GetWidth(\\f${options}`) || "");
        }
        getHeight(options) {
            return parseFloat(prompt(this.id, `Obj.GetHeight(\\f${options}`) || "");
        }
        getAbsWidth() {
            return parseInt(prompt(this.id, "Obj.GetAbsWidth(") || "");
        }
        getAbsHeight() {
            return parseInt(prompt(this.id, "Obj.GetAbsHeight(") || "");
        }
        getLeft(options) {
            return parseFloat(prompt(this.id, `Obj.GetLeft(\\f${options}`) || "");
        }
        getTop(options) {
            return parseFloat(prompt(this.id, `Obj.GetTop(\\f"${options}`) || "");
        }
        getPosition(options) {
            return JSON.parse(prompt(this.id, `Obj.GetPosition(\\f${options}`) || "");
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
            return prompt(this.id, `Obj.Method(\\f${name}\\f${types}\\f${p1}\\f${p2}\\f${p3}\\f${p4}`);
        }
        release() {
            prompt(this.id, "Obj.Release(");
            _map[this.id] = null;
        }
        setBackAlpha(alpha) {
            prompt(this.id, `Obj.SetBackAlpha(\\f${alpha}`);
            return this;
        }
        setBackColor(color) {
            prompt(this.id, `Obj.SetBackColor(\\f${color}`);
            return this;
        }
        setBackGradient(color1, color2, color3, options) {
            prompt(this.id, `Obj.SetBackGradient(Linear\\f${color1}\\f${color2}\\f${color3}\\f${options}\\f${null}\\f${null}\\f${null}`);
            return this;
        }
        setBackGradientRadial(x, y, radius, color1, color2, color3, options) {
            prompt(this.id, `Obj.SetBackGradient(Radial\\f${x}\\f${y}\\f${radius}\\f${color1}\\f${color2}\\f${color3}\\f${options}`);
            return this;
        }
        setBackground(file, options) {
            prompt(this.id, `Obj.SetBackground(${file}\\f${options}`);
            return this;
        }
        setColorFilter(color, mode) {
            prompt(this.id, `Obj.SetColorFilter(\\f${color}\\f${mode}`);
            return this;
        }
        setDescription(text) {
            prompt(this.id, `Obj.SetDescription(\\f${text}`);
            return this;
        }
        setEnabled(enable) {
            prompt(this.id, `Obj.SetEnabled(\\f${enable}`);
            return this;
        }
        setMargins(left, top, right, bottom, mode) {
            prompt(this.id, `Obj.SetMargins(\\f${left}\\f${top}\\f${right}\\f${bottom}\\f${mode}`);
            return this;
        }
        setPadding(left, top, right, bottom, mode) {
            prompt(this.id, `Obj.SetPadding(\\f${left}\\f${top}\\f${right}\\f${bottom}\\f${mode}`);
            return this;
        }
        setPosition(left, top, width, height, options) {
            prompt(this.id, `Obj.SetPosition(\\f${left}\\f${top}\\f${width}\\f${height}\\f${options}`);
            this._left = left;
            this._top = top;
            return this;
        }
        setScale(x, y) {
            prompt(this.id, `Obj.SetScale(\\f${x}\\f${y}`);
            return this;
        }
        setSize(width, height, options) {
            prompt(this.id, `Obj.SetSize(\\f${width}\\f${height}\\f${options}`);
            return this;
        }
        setVisibility(mode) {
            prompt(this.id, `Obj.SetVisibility(${mode}`);
            return this;
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
            var ret = prompt("#", `App.CreateLayout(${type}\\f${options}`);
            if (ret) {
                return new Layout(ret);
            } else {
                throw new Error("Could not create Layout");
            }
        }
        addChild(child, order) {
            prompt(this.id, `Lay.AddChild(\\f${child ? child.id : null}\\f${order}`);
            if (child) child._parent = this;
        }
        animate(type, callback, time) {
            prompt(this.id, `Lay.Animate(\\f${type}\\f${_Cbm(callback)}\\f${time}`);
        }
        childToFront(child) {
            prompt(this.id, `Lay.ChildToFront(${child ? child.id : null}`);
        }
        destroyChild(child) {
            prompt(this.id, `Lay.DestroyChild(${child ? child.id : null}`);
            if (child) child._parent = null;
        }
        getChildOrder(child) {
            return parseInt(prompt(this.id, `Lay.GetChildOrder(\\f${child ? child.id : null}`) || "");
        }
        removeChild(child) {
            prompt(this.id, `Lay.RemoveChild(${child ? child.id : null}`);
            if (child) {
                child._parent = null;
            }
        }
        setBackColor(color) {
            prompt(this.id, `Lay.SetBackColor(\\f${color}`);
            return this;
        }
        setChildMargins(left, top, right, bottom, mode) {
            prompt(this.id, `Lay.SetChildMargins(\\f${left}\\f${top}\\f${right}\\f${bottom}\\f${mode}`);
            return this;
        }
        setChildTextSize(size, mode) {
            prompt(this.id, `Lay.SetChildTextSize(\\f${size}\\f${mode}`);
            return this;
        }
        setCornerRadius(radius) {
            prompt(this.id, `Lay.SetCornerRadius(\\f${radius}`);
            return this;
        }
        setElevation(elevation) {
            prompt(this.id, `Lay.SetElevation(\\f${elevation}`);
            return this;
        }
        setGravity(gravity) {
            prompt(this.id, `Lay.SetGravity(\\f${gravity}`);
            return this;
        }
        setOnChildChange(callback) {
            prompt(this.id, `Lay.SetOnChildChange(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnLongTouch(callback) {
            prompt(this.id, `Lay.SetOnLongTouch(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Lay.SetOnTouch(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnTouchDown(callback) {
            prompt(this.id, `Lay.SetOnTouchDown(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnTouchMove(callback) {
            prompt(this.id, `Lay.SetOnTouchMove(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnTouchUp(callback) {
            prompt(this.id, `Lay.SetOnTouchUp(\\f${_Cbm(callback)}`);
            return this;
        }
        setOrientation(orientation) {
            prompt(this.id, `Lay.SetOrientation(\\f${orientation}`);
            return this;
        }
        setTouchable(touchable) {
            prompt(this.id, `Lay.SetTouchable(\\f${touchable}`);
            return this;
        }
        setTouchThrough(through) {
            prompt(this.id, `Lay.SetTouchThrough(\\f${through}`);
            return this;
        }
    }
    class AudioRecorder extends DSObject {
        static instance;
        constructor(id3){
            super(id3);
        }
        static getInstance() {
            if (!AudioRecorder.instance) {
                const ret = prompt("#", "App.CreateAudioRecorder(");
                if (ret) {
                    AudioRecorder.instance = new AudioRecorder(ret);
                } else {
                    throw new Error(`Could not create ${this.constructor.name}`);
                }
            }
            return AudioRecorder.instance;
        }
        getData() {
            return JSON.parse(prompt(this.id, "Rec.GetData(") || "");
        }
        getPeak() {
            return parseFloat(prompt(this.id, "Rec.GetPeak(") || "");
        }
        getRMS() {
            return parseFloat(prompt(this.id, "Rec.GetRMS(") || "");
        }
        pause() {
            prompt(this.id, "Rec.Pause(");
        }
        setFile(file) {
            prompt(this.id, `Rec.SetFile(${file}`);
        }
        setFrequency(frequency) {
            prompt(this.id, `Rec.SetFrequency(\\f${frequency}`);
        }
        setSource(source) {
            prompt(this.id, `Rec.SetSource(\\f${source}`);
        }
        start() {
            prompt(this.id, "Rec.Start(");
        }
        stop() {
            prompt(this.id, "Rec.Stop(");
        }
    }
    class BluetoothList extends DSObject {
        static instance;
        constructor(id4){
            super(id4);
        }
        static getInstance(filter) {
            if (!BluetoothList.instance) {
                const ret = prompt("#", `App.CreateBluetoothList(${filter}`);
                if (ret) {
                    BluetoothList.instance = new BluetoothList(ret);
                } else {
                    throw new Error(`Could not create ${this.constructor.name}`);
                }
            }
            return BluetoothList.instance;
        }
        setOnTouch(callback) {
            prompt(this.id, `Btl.SetOnClick(${_Cbm(callback)}`);
        }
        setOnTouchEx(callback) {
            prompt(this.id, `Btl.SetOnClick(${callback}`);
        }
    }
    class Button extends DSView {
        constructor(id5){
            super(id5);
        }
        create(text, width, height, options) {
            const ret = prompt("#", `App.CreateButton(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Button(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        createInLayout(layout, text, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddButton(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Button(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        getText() {
            return prompt(this.id, "Btn.GetText(");
        }
        getTextSize(mode) {
            return parseFloat(prompt(this.id, `Btn.GetTextSize(\\f${mode}`) || "");
        }
        setBackColor(color) {
            prompt(this.id, `Btn.SetBackColor(\\f${color}`);
            return this;
        }
        setEllipsize(mode) {
            prompt(this.id, `Btn.SetEllipsize(\\f${mode}`);
            return this;
        }
        setEnabled(enable) {
            prompt(this.id, `Btn.SetEnabled(\\f${enable}`);
            return this;
        }
        setFontFile(file) {
            prompt(this.id, `Btn.SetFontFile(\\f${file}`);
            return this;
        }
        setHtml(html) {
            prompt(this.id, `Btn.SetHtml(${html}`);
            return this;
        }
        setOnLongTouch(callback) {
            prompt(this.id, `Btn.SetOnLongTouch(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Btn.SetOnTouch(\\f${_Cbm(callback)}`);
            return this;
        }
        setStyle(color1, color2, radius, strokeColor, strokeWidth, shadow) {
            prompt(this.id, `Btn.SetStyle(\\f${color1}\\f${color2}\\f${radius}\\f${strokeColor}\\f${strokeWidth}\\f${shadow}`);
            return this;
        }
        setText(text) {
            prompt(this.id, `Btn.SetText(${text}`);
            return this;
        }
        setTextColor(color) {
            prompt(this.id, `Btn.SetTextColor(${color}`);
            return this;
        }
        setTextShadow(radius, dx, dy, color) {
            prompt(this.id, `Btn.SetTextShadow(\\f${radius}\\f${dx}\\f${dy}\\f${color}`);
            return this;
        }
        setTextSize(size, mode) {
            prompt(this.id, `Btn.SetTextSize(\\f${size}\\f${mode}`);
            return this;
        }
    }
    class CameraView extends DSView {
        constructor(id6){
            super(id6);
        }
        create(width, height, options) {
            var ret = prompt("#", "App.CreateCameraView(" + width + "\f" + height + "\f" + options);
            if (ret) {
                return new CameraView(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        static createInLayout(layout, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddCameraView(${width}\\f${height}\\f${options}`);
            if (ret) {
                return new CameraView(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        autoCapture(path, file, maxCount) {
            prompt(this.id, `Cam.AutoCapture(${path}\\f${file}\\f${maxCount}`);
        }
        findFaces(max) {
            return JSON.parse(prompt(this.id, `Cam.FindFaces(\\f${max}`) || "");
        }
        focus() {
            prompt(this.id, "Cam.Focus(");
        }
        getCameraCount() {
            return parseInt(prompt(this.id, "Cam.GetCameraCount(") || "");
        }
        getColorEffects() {
            return prompt(this.id, "Cam.GetColorEffects(");
        }
        getImageHeight() {
            return parseInt(prompt(this.id, "Cam.GetImageHeight(") || "");
        }
        getMaxZoom() {
            return parseInt(prompt(this.id, "Cam.GetMaxZoom(") || "");
        }
        getParameters() {
            return prompt(this.id, "Cam.GetParams(\f");
        }
        getPictureSizes() {
            return prompt(this.id, "Cam.GetPictureSizes(");
        }
        getPixelData(format, left, top, width, height) {
            return prompt(this.id, `Cam.GetPixelData(\\f${format}\\f${left}\\f${top}\\f${width}\\f${height}`);
        }
        getImageWidth() {
            return parseInt(prompt(this.id, "Cam.GetImageWidth(") || "");
        }
        getZoom() {
            return parseInt(prompt(this.id, "Cam.GetZoom(") || "");
        }
        hasFlash() {
            return prompt(this.id, "Cam.HasFlash(") === "true";
        }
        isRecording() {
            return prompt(this.id, "Cam.IsRecording(") === "true";
        }
        motionMosaic(xtiles, ytiles, sensitivity, minPeriod, image) {
            prompt(this.id, `Cam.MotionMosaic(${xtiles}\\f${ytiles}\\f${sensitivity}\\f${minPeriod}\\f${image ? image.id : null}`);
        }
        record(file, seconds) {
            prompt(this.id, `Cam.Record(\\f${file}\\f${seconds}`);
        }
        reportColors(list, callback, sampSize, maxRate) {
            prompt(this.id, `Cam.ReportColors(\\f${list}\\f${_Cbm(callback)}\\f${sampSize}\\f${maxRate}`);
        }
        setColorEffect(effect) {
            prompt(this.id, `Cam.SetColorEffect(\\f${effect}`);
            return this;
        }
        setDuplicateImage(image1, image2) {
            prompt(this.id, `Cam.SetDuplicateImage(\\f${image1 ? image1.id : null}\\f${image2 ? image2.id : null}`);
            return this;
        }
        setFlash(onoff) {
            prompt(this.id, `Cam.SetFlash(${onoff}`);
            return this;
        }
        setFocusMode(mode) {
            prompt(this.id, `Cam.SetFocusMode(\\f${mode}`);
            return this;
        }
        setOnFocus(callback) {
            prompt(this.id, `Cam.SetOnFocus\\f${_Cbm(callback)}`);
            return this;
        }
        setOnMotion(callback) {
            prompt(this.id, `Cam.SetOnMotion(${_Cbm(callback)}`);
            return this;
        }
        setOnPicture(callback) {
            prompt(this.id, `Cam.SetOnPicture\\f${_Cbm(callback)}`);
            return this;
        }
        setOnReady(callback) {
            prompt(this.id, `Cam.SetOnReady(${_Cbm(callback)}`);
            return this;
        }
        setOrientation(angle) {
            prompt(this.id, `Cam.SetOrientation(\\f${angle}`);
            return this;
        }
        setParameter(name, value) {
            if (typeof value === "string") {
                prompt(this.id, `Cam.SetParam(\\f${name}\\f${value}`);
            } else {
                prompt(this.id, `Cam.SetParamNum(\\f${name}\\f${value}`);
            }
            return this;
        }
        setPictureSize(width, height) {
            prompt(this.id, `Cam.SetPictureSize(\\f${width}\\f${height}`);
            return this;
        }
        setPostRotation(angle) {
            prompt(this.id, `Cam.SetPostRotation(\\f${angle}`);
            return this;
        }
        setPreviewImage(image) {
            prompt(this.id, `Cam.SetPreviewImage(${image ? image.id : null}`);
            return this;
        }
        setSound(onoff) {
            prompt(this.id, `Cam.SetSound(${onoff}`);
            return this;
        }
        setVideoSize(width, height) {
            prompt(this.id, `Cam.SetVideoSize(\\f${width}\\f${height}`);
            return this;
        }
        setZoom(level) {
            prompt(this.id, `Cam.SetZoom(\\f${level}`);
            return this;
        }
        startPreview() {
            prompt(this.id, "Cam.StartPreview(");
        }
        stop() {
            prompt(this.id, "Cam.Stop(");
        }
        stopPreview() {
            prompt(this.id, "Cam.StopPreview(");
        }
        stream(ip, port, quality, fps, mtu) {
            prompt(this.id, `Cam.Stream(${ip}\\f${port}\\f${quality}\\f${fps}\\f${mtu}`);
        }
        takePicture(file) {
            prompt(this.id, `Cam.TakePicture(${file}`);
        }
    }
    class CheckBox extends DSView {
        constructor(id7){
            super(id7);
        }
        static create(text, width, height, options) {
            var ret = prompt("#", `App.CreateCheckBox(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new CheckBox(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        static createInLayout(layout, text, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddCheckBox(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new CheckBox(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        adjustColor(hue, saturation, brightness, contrast) {
            prompt(this.id, `Chk.AdjustColor(\\f${hue}\\f${saturation}\\f${brightness}\\f${contrast}`);
        }
        getChecked() {
            return prompt(this.id, "Chk.GetChecked(") === "true";
        }
        getText() {
            return prompt(this.id, "Chk.GetText(");
        }
        getTextSize(mode) {
            return parseFloat(prompt(this.id, `Chk.GetTextSize(\\f${mode}`) || "");
        }
        setChecked(checked) {
            prompt(this.id, `Chk.SetChecked(${checked}`);
            return this;
        }
        setColorFilter(color, mode) {
            prompt(this.id, `Chk.SetColorFilter(\\f${color}\\f${mode}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Chk.SetOnClick(${_Cbm(callback)}`);
            return this;
        }
        setText(text) {
            prompt(this.id, `Chk.SetText(${text}`);
            return this;
        }
        setTextColor(color) {
            prompt(this.id, `Chk.SetTextColor(${color}`);
            return this;
        }
        setTextSize(size, mode) {
            prompt(this.id, `Chk.SetTextSize(\\f${size}\\f${mode}`);
            return this;
        }
    }
    class CodeEdit extends DSView {
        constructor(id8){
            super(id8);
        }
        static create(text, width, height, options) {
            var ret = prompt("#", `App.CreateCodeEdit(\\f${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new CodeEdit(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        static createInLayout(layout, text, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddCodeEdit(\\f${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new CodeEdit(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        clearHistory() {
            prompt(this.id, "Cde.ClearHistory(");
        }
        copy() {
            prompt(this.id, "Cde.Copy(");
        }
        cut() {
            prompt(this.id, "Cde.Cut(");
        }
        getCursorLine() {
            return parseInt(prompt(this.id, "Cde.GetCursorLine(") || "");
        }
        getCursorPos() {
            return parseInt(prompt(this.id, "Cde.GetCursorPos(") || "");
        }
        getLineStart(line) {
            return parseInt(prompt(this.id, `Cde.GetLineStart(${line}`) || "");
        }
        getSelectedText() {
            return prompt(this.id, "Cde.GetSelectedText(");
        }
        getSelectionEnd() {
            return parseInt(prompt(this.id, "Cde.GetSelectionEnd(") || "");
        }
        getSelectionStart() {
            return parseInt(prompt(this.id, "Cde.GetSelectionStart(") || "");
        }
        getSelectMode() {
            return prompt(this.id, "Cde.GetSelectMode(") === "true";
        }
        getText() {
            return prompt(this.id, "Cde.GetText(");
        }
        highlightLine(line) {
            prompt(this.id, `Cde.HighlightLine(\\f${line}`);
        }
        insertText(text, start, end) {
            prompt(this.id, `Cde.InsertText(\\f${text}\\f${start}`);
        }
        paste() {
            prompt(this.id, "Cde.Paste(");
        }
        redo() {
            prompt(this.id, "Cde.Redo(");
        }
        replace(text) {
            prompt(this.id, `Cde.Replace(\\f${text}`);
        }
        replaceAll(text, newText, matchCase, wholeWord) {
            prompt(this.id, `Cde.ReplaceAll(\\f${text}\\f${newText}\\f${matchCase}\\f${wholeWord}`);
        }
        replaceText(text, start, end) {
            prompt(this.id, `Cde.ReplaceText(\\f${text}\\f${start}\\f${end}`);
        }
        search(text, direction, matchCase, wholeWord) {
            prompt(this.id, `Cde.Search(\\f${text}\\f${direction}\\f${matchCase}\\f${wholeWord}`);
        }
        selectAll() {
            prompt(this.id, "Cde.SelectAll(");
        }
        setColorScheme(scheme) {
            prompt(this.id, `Cde.SetColorScheme(\\f${scheme}`);
            return this;
        }
        setCursorPos(position) {
            prompt(this.id, `Cde.SetCursorPos(${position}`);
            return this;
        }
        setHtml(html) {
            prompt(this.id, `Cde.SetText(\\f${html}`);
            return this;
        }
        setLanguage(ext) {
            prompt(this.id, `Cde.SetLanguage(\\f${ext}`);
            return this;
        }
        setNavigationMethod(method) {
            prompt(this.id, `Cde.SetNavigationMethod(\\f${method}`);
            return this;
        }
        setOnChange(callback) {
            prompt(this.id, `Cde.SetOnChange(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnDoubleTap(callback) {
            prompt(this.id, `Cde.SetOnDoubleTap(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnKey(callback) {
            prompt(this.id, `Cde.SetOnKey(\\f${_Cbm(callback)}`);
            return this;
        }
        setSelectMode(onOff) {
            prompt(this.id, `Cde.SetSelectMode(\\f${onOff}`);
            return this;
        }
        setSelection(start, stop) {
            prompt(this.id, `Cde.SetSelection(\\f${start}\\f${stop}`);
            return this;
        }
        setText(text) {
            prompt(this.id, `Cde.SetText(\\f${text}`);
            return this;
        }
        setTextColor(color) {
            prompt(this.id, `Cde.SetTextColor(\\f${color}`);
            return this;
        }
        setTextSize(size, mode) {
            prompt(this.id, `Cde.SetTextSize(\\f${size}\\f${mode}`);
            return this;
        }
        setUseKeyboard(onOff) {
            prompt(this.id, `Cde.SetUseKeyboard(\\f${onOff}`);
            return this;
        }
        undo() {
            prompt(this.id, "Cde.Undo(");
        }
    }
    class CreateBluetoothSerial extends DSObject {
        constructor(id9){
            super(id9);
        }
        static create(mode) {
            const ret = prompt("#", `App.CreateBluetoothSerial(\\f${mode}`);
            if (ret) {
                return new CreateBluetoothSerial(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        clear() {
            prompt(this.id, "Bts.Clear(");
        }
        connect(name, channel) {
            return prompt(this.id, `Bts.Connect(${name}\\f${channel}`) === "true";
        }
        disconnect() {
            prompt(this.id, "Bts.Disconnect(");
        }
        listen(enabled) {
            prompt(this.id, `Bts.Listen(\\f${enabled}`);
        }
        isBluetoothEnabled() {
            return prompt(this.id, "Bts.IsEnabled(") === "true";
        }
        isConnected() {
            return prompt(this.id, "Bts.IsConnected(") === "true";
        }
        isPaired(name) {
            return prompt(this.id, `Bts.IsPaired(${name}`) === "true";
        }
        requestEnable() {
            prompt(this.id, "Bts.RequestEnable(");
        }
        setDataMode(mode) {
            prompt(this.id, `Bts.SetDataMode(\\f${mode}`);
        }
        setOnConnect(callback) {
            prompt(this.id, `Bts.SetOnConnect(${_Cbm(callback)}`);
        }
        setOnDisconnect(callback) {
            prompt(this.id, `Bts.SetOnDisconnect(\\f${_Cbm(callback)}`);
        }
        setOnReceive(callback) {
            prompt(this.id, `Bts.SetOnReceive(${_Cbm(callback)}`);
        }
        setSplitMode(mode, p2, p3) {
            prompt(this.id, `Bts.SetSplitMode(${mode}\\f${p2}\\f${p3}`);
        }
        setTimeout(ms) {
            prompt(this.id, `Bts.SetTimeout(${ms}`);
        }
        write(data) {
            prompt(this.id, `Bts.Write(${data}`);
        }
    }
    class Dialog extends DSView {
        constructor(id10){
            super(id10);
        }
        static create(title, options) {
            const ret = prompt("#", `App.CreateDialog(\\f${title}\\f${options}`);
            if (ret) {
                return new Dialog(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        addLayout(layout) {
            prompt(this.id, `Dlg.AddLayout(${layout.id}`);
        }
        adjustColor(hue, saturation, brightness, contrast) {
            prompt(this.id, `Dlg.AdjustColor(\\f${hue}\\f${saturation}\\f${brightness}\\f${contrast}`);
        }
        dismiss() {
            prompt(this.id, "Dlg.Dismiss(");
        }
        enableBackKey(enable) {
            prompt(this.id, `Dlg.EnableBackKey(\\f${enable}`);
        }
        getTitleHeight() {
            return parseFloat(prompt(this.id, "Dlg.GetTitleHeight(\f") || "");
        }
        hide() {
            prompt(this.id, "Dlg.Hide(");
        }
        isVisible() {
            return prompt(this.id, "Dlg.IsVisible\f") === "true";
        }
        removeLayout(layout) {
            prompt(this.id, `Dlg.RemoveLayout(${layout.id}`);
        }
        setBackColor(color, radius) {
            prompt(this.id, `Dlg.SetBackColor(\\f${color}\\f${radius}`);
            return this;
        }
        setBackground(file, options) {
            prompt(this.id, `Dlg.SetBackground(\\f${file}\\f${options}`);
            return this;
        }
        setOnBack(callback) {
            prompt(this.id, `Dlg.SetOnBack(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnCancel(callback) {
            prompt(this.id, `Dlg.SetOnCancel(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Dlg.SetOnClick(${_Cbm(callback)}`);
            return this;
        }
        setPosition(left, top, width, height, options) {
            prompt(this.id, `Dlg.SetPosition(\\f${left}\\f${top}\\f${width}\\f${height}\\f${options}`);
            return this;
        }
        setSize(width, height, options) {
            prompt(this.id, `Dlg.SetSize(\\f${width}\\f${height}\\f${options}`);
            return this;
        }
        setTitle(title, options) {
            prompt(this.id, "Dlg.SetTitle(\f" + title + "\f" + options);
            return this;
        }
        setTitleColor(color) {
            prompt(this.id, `Dlg.SetTitleColor(\\f${color}`);
            return this;
        }
        setTitleDividerColor(color) {
            prompt(this.id, `Dlg.SetTitleDividerColor(\\f${color}`);
            return this;
        }
        setTitleDividerHeight(height, options) {
            prompt(this.id, `Dlg.SetTitleDividerHeight(\\f${height}\\f${options}`);
            return this;
        }
        setTitleHeight(height, options) {
            prompt(this.id, `Dlg.SetTitleHeight(\\f${height}\\f${options}`);
            return this;
        }
        setTitleTextSize(height, options) {
            prompt(this.id, `Dlg.SetTitleTextSize(\\f${height}\\f${options}`);
            return this;
        }
        show() {
            prompt(this.id, "Dlg.Show(");
        }
    }
    class Downloader extends DSObject {
        constructor(id11){
            super(id11);
        }
        static create(options) {
            const ret = prompt("#", `App.CreateDownloader(\\f${options}`);
            if (ret) {
                return new Downloader(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        Download(url, folder, name, headers) {
            prompt(this.id, `Dwn.Download(\\f${url}\\f${folder}\\f${name}\\f${headers}`);
        }
        IsComplete() {
            return prompt(this.id, "Dwn.IsComplete(") === "true";
        }
        GetProgress() {
            return parseFloat(prompt(this.id, "Dwn.GetProgress(") || "");
        }
        GetSize() {
            return parseFloat(prompt(this.id, "Dwn.GetSize(") || "");
        }
        SetOnCancel(callback) {
            prompt(this.id, `Dwn.SetOnCancel(\\f${_Cbm(callback)}`);
        }
        SetOnComplete(callback) {
            prompt(this.id, `Dwn.SetOnComplete(\\f${_Cbm(callback)}`);
        }
        SetOnDownload(callback) {
            prompt(this.id, `Dwn.SetOnDownload(\\f${_Cbm(callback)}`);
        }
        SetOnError(callback) {
            prompt(this.id, `Dwn.SetOnError(\\f${_Cbm(callback)}`);
        }
    }
    class Image1 extends DSView {
        _auto;
        _gfb;
        constructor(id12){
            super(id12);
            this._auto = true;
            this._gfb = "";
        }
        static create(file = null, width, height, options, w, h) {
            var ret = prompt("#", `App.CreateImage(${file}\\f${width}\\f${height}\\f${options}\\f${w}\\f${h}`);
            if (ret) {
                return new Image1(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        static createInLayout(layout, file = null, width, height, options, w, h) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddImage(${file}\\f${width}\\f${height}\\f${options}\\f${w}\\f${h}`);
            if (ret) {
                return new Image1(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        adjustColor(hue, saturation, brightness, contrast) {
            prompt(this.id, `Img.AdjustColor(\\f${hue}\\f${saturation}\\f${brightness}\\f${contrast}`);
        }
        clear() {
            if (this._auto) prompt(this.id, "Img.Clear(");
            else this.draw("c");
        }
        draw(func, p1, p2, p3, p4, p5, p6, p7) {
            if (this._gfb.length > 2) {
                this._gfb += "\f";
            }
            this._gfb += `${func}~${p1}~${p2}~${p3}~${p4}~${p5}~${p6}~${p7}}`;
        }
        drawArc(x1, y1, x2, y2, start, sweep) {
            if (this._auto) {
                prompt(this.id, `Img.DrawArc(${x1}\\f${y1}\\f${x2}\\f${y2}\\f${start}\\f${sweep}`);
            } else {
                this.draw("a", null, x1, y1, x2, y2, start, sweep);
            }
        }
        drawCircle(x, y, radius) {
            if (this._auto) {
                prompt(this.id, `Img.DrawCircle(${x}\\f${y}\\f${radius}`);
            } else {
                this.draw("e", null, x, y, radius);
            }
        }
        drawFrame(ms) {
            prompt(this.id, `Img.DrawFrame\\f${ms}`);
        }
        drawImage(image, x, y, w, h, angle, mode) {
            if (this._auto) {
                prompt(this.id, `Img.DrawImage\\f${image ? image.id : null}\\f${x}\\f${y}\\f${w}\\f${h}\\f${angle}\\f${mode}`);
            } else {
                this.draw("i", image ? image.id : null, x, y, w ? w : -1, h ? h : -1, angle, mode);
            }
        }
        drawImageMatrix(image, matrix) {
            if (this._auto) {
                prompt(this.id, `Img.DrawImageMtx\\f${image ? image.id : null}\\f${matrix}`);
            } else {
                this.draw("m", image ? image.id : null, matrix);
            }
        }
        drawLine(x1, y1, x2, y2) {
            if (this._auto) {
                prompt(this.id, `Img.DrawLine(${x1}\\f${y1}\\f${x2}\\f${y2}`);
            } else {
                this.draw("l", null, x1, y1, x2, y2);
            }
        }
        drawPoint(x, y) {
            if (this._auto) {
                prompt(this.id, "Img.DrawPoint(" + x + "\f" + y);
            } else {
                this.draw("p", null, x, y);
            }
        }
        drawRectangle(x1, y1, x2, y2) {
            if (this._auto) {
                prompt(this.id, `Img.DrawRect(${x1}\\f${y1}\\f${x2}\\f${y2}`);
            } else {
                this.draw("r", null, x1, y1, x2, y2);
            }
        }
        drawSamples(data, range) {
            if (this._auto) {
                prompt(this.id, `Img.DrawSamples(\\f${data}\\f${range}`);
            } else {
                this.draw("g", data, range, 0, 0, 0, 0);
            }
        }
        drawText(text, x, y) {
            if (this._auto) {
                prompt(this.id, `Img.DrawText(${text}\\f${x}\\f${y}`);
            } else {
                this.draw("t", text, x, y, 0, 0, 0);
            }
        }
        flatten() {
            prompt(this.id, "Img.Flatten(");
        }
        getAbsHeight() {
            return parseFloat(prompt(this.id, "Img.GetAbsHeight(") + "");
        }
        getAbsWidth() {
            return parseFloat(prompt(this.id, "Img.GetAbsWidth(") + "");
        }
        getHeight() {
            return parseFloat(prompt(this.id, "Img.GetHeight(") + "");
        }
        getName() {
            return prompt(this.id, "Img.GetName(");
        }
        getPixelColor(x, y) {
            return JSON.parse(prompt(this.id, `Img.GetPixelColor(\\f${x}\\f${y}`) + "");
        }
        getPixelData(format, left, top, width, height) {
            return prompt(this.id, `Img.GetPixelData(\\f${format}\\f${left}\\f${top}\\f${width}\\f${height}`);
        }
        getWidth() {
            return parseFloat(prompt(this.id, "Img.GetWidth(") + "");
        }
        measureText(text) {
            return JSON.parse(prompt(this.id, `Img.MeasureText(\\f${text}`) + "");
        }
        move(x, y) {
            prompt(this.id, `Img.Move(${x}\\f${y}`);
        }
        play(ms) {
            prompt(this.id, `Img.Play\\f${ms}`);
        }
        reset() {
            prompt(this.id, "Img.Reset(");
        }
        rotate(angle, pivX, pivY) {
            prompt(this.id, `Img.Rotate(${angle}\\f${pivX}\\f${pivY}`);
        }
        save(fileName, quality) {
            prompt(this.id, `Img.Save\\f${fileName}\\f${quality}`);
        }
        scale(x, y) {
            prompt(this.id, `Img.Scale(${x}\\f${y}`);
        }
        skew(x, y) {
            prompt(this.id, `Img.Skew(${x}\\f${y}`);
        }
        setAlpha(alpha) {
            if (this._auto) {
                prompt(this.id, `Img.SetAlpha(${alpha}`);
            } else {
                this.draw("k", null, alpha);
            }
            return this;
        }
        setAutoUpdate(onoff) {
            this._auto = onoff;
            prompt(this.id, `Img.SetAutoUpdate(\\f${onoff}`);
            return this;
        }
        setColor(color) {
            if (this._auto) {
                prompt(this.id, `Img.SetColor(${color}`);
            } else {
                this.draw("o", color);
            }
            return this;
        }
        setColorFilter(color, mode) {
            prompt(this.id, `Img.SetColorFilter(\\f${color}\\f${mode}`);
            return this;
        }
        setFontFile(file) {
            if (this._auto) {
                prompt(this.id, `Img.SetFontFile(\\f${file}`);
            } else {
                this.draw("f", file);
            }
            return this;
        }
        setImage(image, width, height, options) {
            if (typeof image === "string") {
                prompt(this.id, `Img.LoadImage(\\f${image}\\f${width}\\f${height}\\f${options}`);
            } else {
                prompt(this.id, `Img.CopyImage(\\f${image ? image.id : null}\\f${width}\\f${height}\\f${options}`);
            }
            return this;
        }
        setLineWidth(width) {
            if (this._auto) {
                prompt(this.id, `Img.SetLineWidth(${width}`);
            } else {
                this.draw("w", null, width);
            }
            return this;
        }
        setMaxRate(ms) {
            prompt(this.id, `Img.SetMaxRate(${ms}`);
            return this;
        }
        setName(name) {
            prompt(this.id, `Img.SetName(${name}`);
            return this;
        }
        setOnLoad(callback) {
            prompt(this.id, `Img.SetOnLoad\\f${_Cbm(callback)}`);
            return this;
        }
        setOnLongTouch(callback) {
            prompt(this.id, `Img.SetOnLongTouch(${_Cbm(callback)}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Img.SetOnTouch(${_Cbm(callback)}`);
            return this;
        }
        setOnTouchDown(callback) {
            prompt(this.id, `Img.SetOnTouchDown(${_Cbm(callback)}`);
            return this;
        }
        setOnTouchMove(callback) {
            prompt(this.id, `Img.SetOnTouchMove(${_Cbm(callback)}`);
            return this;
        }
        setOnTouchUp(callback) {
            prompt(this.id, `Img.SetOnTouchUp(${_Cbm(callback)}`);
            return this;
        }
        setPaintColor(color) {
            if (this._auto) {
                prompt(this.id, `Img.SetPaintColor(${color}`);
            } else {
                this.draw("n", color);
            }
            return this;
        }
        setPaintStyle(style) {
            if (this._auto) {
                prompt(this.id, `Img.SetPaintStyle(${style}`);
            } else {
                this.draw("s", style);
            }
            return this;
        }
        setPixelData(data, width, height, options) {
            prompt(this.id, `Img.SetPixelData(\\f${data}\\f${width}\\f${height}\\f${options}`);
            return this;
        }
        setPixelMode(onoff) {
            prompt(this.id, `Img.SetPixelMode(\\f${onoff}`);
            return this;
        }
        setSize(width, height, options) {
            prompt(this.id, `Img.SetSize(\\f${width}\\f${height}\\f${options}`);
            return this;
        }
        setTextSize(size) {
            if (this._auto) {
                prompt(this.id, "Img.SetTextSize(" + size);
            } else {
                this.draw("x", null, size);
            }
            return this;
        }
        setTouchable(touchable) {
            prompt(this.id, `Img.SetTouchable(${touchable}`);
            return this;
        }
        transform(matrix) {
            prompt(this.id, `Img.Transform(\\f${matrix}`);
        }
        update() {
            if (this._auto) {
                prompt(this.id, "Img.Update(");
            } else {
                prompt(this.id, `Img.Batch(${this._gfb}`);
                this._gfb = "";
            }
        }
    }
    class List extends DSView {
        constructor(id13){
            super(id13);
        }
        static create(list, width, height, options, delimiter) {
            var ret = prompt("#", `App.CreateList(\\f${list}\\f${width}\\f${height}\\f${options}\\f${delimiter}`);
            if (ret) {
                return new List(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        static createInLayout(layout, list, width, height, options, delimiter) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddList(\\f${list}\\f${width}\\f${height}\\f${options}\\f${delimiter}`);
            if (ret) {
                return new List(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        addItem(title, body, image) {
            prompt(this.id, `Lst.AddItem(\\f${title}\\f${body}\\f${image}`);
        }
        adjustColor(hue, saturation, brightness, contrast) {
            prompt(this.id, `Lst.AdjustColor(\\f${hue}\\f${saturation}\\f${brightness}\\f${contrast}`);
        }
        setList(list, delimiter) {
            prompt(this.id, `Lst.SetList(\\f${list}\\f${delimiter}`);
        }
        getItem(title) {
            var p = `Lst.GetItem(\\f${title}`;
            return JSON.parse(prompt(this.id, p) || "");
        }
        getItemByIndex(index) {
            var p = `Lst.GetItemByIndex(\\f${index}`;
            return JSON.parse(prompt(this.id, p) || "");
        }
        getLength() {
            return parseInt(prompt(this.id, "Lst.GetLength(") || "");
        }
        getList(delimiter) {
            return JSON.parse(prompt(this.id, `Lst.GetList(${delimiter}`) || "");
        }
        getTextSize(mode) {
            return parseFloat(prompt(this.id, `Lst.GetTextSize(\\f${mode}`) || "");
        }
        insertItem(index, title, body, image) {
            prompt(this.id, `Lst.InsertItem(\\f${index}\\f${title}\\f${body}\\f${image}`);
        }
        removeItem(title) {
            prompt(this.id, `Lst.RemoveItem(\\f${title}`);
        }
        removeItemByIndex(index) {
            prompt(this.id, `Lst.RemoveItemByIndex(\\f${index}`);
        }
        removeAll() {
            prompt(this.id, "Lst.RemoveAll(");
        }
        scrollToItem(title, body) {
            var p = `Lst.ScrollToItem(\\f${title}\\f${body}`;
            prompt(this.id, p);
        }
        scrollToItemByIndex(index) {
            var p = `Lst.ScrollToItemByIndex(\\f${index}`;
            prompt(this.id, p);
        }
        selectItem(title, body, scroll) {
            var p = `Lst.SelectItem(\\f${title}\\f${body}\\f${scroll}`;
            prompt(this.id, p);
        }
        selectItemByIndex(index, scroll) {
            var p = `Lst.SelectItemByIndex(\\f${index}\\f${scroll}`;
            prompt(this.id, p);
        }
        setColumnWidths(icon, title, body, mode) {
            prompt(this.id, `Lst.SetColumnWidths(\\f${icon}\\f${title}\\f${body}\\f${mode}`);
            return this;
        }
        setDivider(height, color) {
            prompt(this.id, `Lst.SetDivider(\\f${height}\\f${color}`);
            return this;
        }
        setEllipsize(mode) {
            prompt(this.id, `Lst.SetEllipsize(\\f${mode}`);
            return this;
        }
        setEllipsize1(mode) {
            prompt(this.id, `Lst.SetEllipsize1(\\f${mode}`);
            return this;
        }
        setEllipsize2(mode) {
            prompt(this.id, `Lst.SetEllipsize2(\\f${mode}`);
            return this;
        }
        setFontFile(file) {
            prompt(this.id, `Lst.SetFontFile(\\f${file}`);
            return this;
        }
        setHiTextColor1(color) {
            prompt(this.id, `Lst.SetHiTextColor1(${color}`);
            return this;
        }
        setHiTextColor2(color) {
            prompt(this.id, `Lst.SetHiTextColor2(${color}`);
            return this;
        }
        setIconMargins(left, top, right, bottom, mode) {
            prompt(this.id, `Lst.SetIconMargins(\\f${left}\\f${top}\\f${right}\\f${bottom}\\f${mode}`);
            return this;
        }
        setIconSize(size, mode) {
            prompt(this.id, `Lst.SetIconSize(\\f${size}\\f${mode}`);
            return this;
        }
        setItem(title, newTitle, newBody, newImage) {
            prompt(this.id, `Lst.SetItem(\\f${title}\\f${newTitle}\\f${newBody}\\f${newImage}`);
            return this;
        }
        setItemByIndex(index, newTitle, newBody, newImage) {
            prompt(this.id, `Lst.SetItemByIndex(\\f${index}\\f${newTitle}\\f${newBody}\\f${newImage}`);
            return this;
        }
        setItemColor(title, color, bgColor) {
            prompt(this.id, `Lst.SetItemColor(\\f${title}\\f${color}\\f${bgColor}`);
            return this;
        }
        setItemColorByIndex(index, color, bgColor) {
            prompt(this.id, `Lst.SetItemColorByIndex(\\f${index}\\f${color}\\f${bgColor}`);
            return this;
        }
        setOnLongTouch(callback) {
            prompt(this.id, `Lst.SetOnLongClick(${_Cbm(callback)}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Lst.SetOnClick(${_Cbm(callback)}`);
            return this;
        }
        setTextColor(color) {
            prompt(this.id, `Lst.SetTextColor1(${color}`);
            return this;
        }
        setTextColor1(color) {
            prompt(this.id, `Lst.SetTextColor1(${color}`);
            return this;
        }
        setTextColor2(color) {
            prompt(this.id, `Lst.SetTextColor2(${color}`);
            return this;
        }
        setTextMargins(left, top, right, bottom, mode, options) {
            prompt(this.id, `Lst.SetTextMargins(\\f${left}\\f${top}\\f${right}\\f${bottom}\\f${mode}\\f${options}`);
            return this;
        }
        setTextShadow(radius, dx, dy, color) {
            prompt(this.id, `Lst.SetTextShadow1(\\f${radius}\\f${dx}\\f${dy}\\f${color}`);
            return this;
        }
        setTextShadow1(radius, dx, dy, color) {
            prompt(this.id, `Lst.SetTextShadow1(\\f${radius}\\f${dx}\\f${dy}\\f${color}`);
            return this;
        }
        setTextShadow2(radius, dx, dy, color) {
            prompt(this.id, `Lst.SetTextShadow2(\\f${radius}\\f${dx}\\f${dy}\\f${color}`);
            return this;
        }
        setTextSize(size, mode) {
            prompt(this.id, `Lst.SetTextSize1(\\f${size}\\f${mode}`);
            return this;
        }
        setTextSize1(size, mode) {
            prompt(this.id, `Lst.SetTextSize1(\\f${size}\\f${mode}`);
            return this;
        }
        setTextSize2(size, mode) {
            prompt(this.id, `Lst.SetTextSize2(\\f${size}\\f${mode}`);
            return this;
        }
    }
    class ListDialog extends DSObject {
        static instance;
        constructor(id14){
            super(id14);
        }
        static getInstance(title, list, options) {
            if (!ListDialog.instance) {
                const ret = prompt("#", `App.CreateListDialog(\\f${title}\\f${list}\\f${options}`);
                if (ret) {
                    ListDialog.instance = new ListDialog(ret);
                } else {
                    throw new Error(`Could not create ${this.constructor.name}`);
                }
            }
            return ListDialog.instance;
        }
        adjustColor(hue, saturation, brightness, contrast) {
            prompt(this.id, `Ldg.AdjustColor(\\f${hue}\\f${saturation}\\f${brightness}\\f${contrast}`);
        }
        dismiss() {
            prompt(this.id, "Ldg.Dismiss(");
        }
        hide() {
            prompt(this.id, "Ldg.Hide(");
        }
        setBackColor(color, radius) {
            prompt(this.id, `Ldg.SetBackColor(\\f${color}\\f${radius}`);
        }
        setBackground(file, options) {
            prompt(this.id, `Ldg.SetBackground(\\f${file}\\f${options}`);
        }
        setOnTouch(callback) {
            prompt(this.id, `Ldg.SetOnClick(${_Cbm(callback)}`);
        }
        setSize(width, height, options) {
            prompt(this.id, `Ldg.SetSize(\\f${width}\\f${height}\\f${options}`);
        }
        setTextColor(color) {
            prompt(this.id, `Ldg.SetTextColor(\\f${color}`);
        }
        setTitle(title) {
            prompt(this.id, `Ldg.SetTitle(\\f${title}`);
        }
        setTitleColor(color) {
            prompt(this.id, `Ldg.SetTitleColor(\\f${color}`);
        }
        setTitleHeight(height, options) {
            prompt(this.id, `Ldg.SetTitleHeight(\\f${height}\\f${options}`);
        }
        show() {
            prompt(this.id, "Ldg.Show(");
        }
    }
    class ListView extends DSView {
        constructor(id15){
            super(id15);
        }
        show() {
            prompt(this.id, "Lvw.Show(");
        }
        setOnTouch(callback) {
            prompt(this.id, `Lvw.SetOnClick(${_Cbm(callback)}`);
        }
    }
    class Locator extends DSObject {
        constructor(id16){
            super(id16);
        }
        static create(type, options) {
            const ret = prompt("#", `App.CreateLocator(${type}\\f${options}`);
            if (ret) {
                return new Locator(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        getBearingTo(latitude, longitude) {
            return parseFloat(prompt(this.id, `Loc.GetBearingTo(${latitude}\\f${longitude}`) || "");
        }
        getDistanceTo(latitude, longitude) {
            return parseFloat(prompt(this.id, `Loc.GetDistanceTo(${latitude}\\f${longitude}`) || "");
        }
        setOnChange(callback) {
            prompt(this.id, `Loc.SetOnChange(${_Cbm(callback)}`);
        }
        setRate(rate) {
            prompt(this.id, `Loc.SetRate(${rate}`);
        }
        start() {
            prompt(this.id, "Loc.Start(");
        }
        stop() {
            prompt(this.id, "Loc.Stop(");
        }
    }
    class MediaPlayer extends DSObject {
        constructor(id17){
            super(id17);
        }
        static create() {
            const ret = prompt("#", `App.CreateMediaPlayer(`);
            if (ret) {
                return new MediaPlayer(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        close() {
            prompt(this.id, "Aud.Close(");
        }
        destroy() {
            prompt(this.id, "Aud.Release(");
            _map[this.id] = null;
        }
        getDuration() {
            return parseFloat(prompt(this.id, "Aud.GetDuration(") || "");
        }
        getPosition() {
            return parseFloat(prompt(this.id, "Aud.GetPosition(") || "");
        }
        isLooping() {
            return prompt(this.id, "Aud.IsLooping(") === "true";
        }
        isPlaying() {
            return prompt(this.id, "Aud.IsPlaying(") === "true";
        }
        isReady() {
            return prompt(this.id, "Aud.IsReady(") === "true";
        }
        pause() {
            prompt(this.id, "Aud.Pause(");
        }
        play(from) {
            prompt(this.id, `Aud.Play(\\f${from}`);
        }
        release() {
            prompt(this.id, "Aud.Release(");
            _map[this.id] = null;
        }
        setFile(file) {
            prompt(this.id, `Aud.SetFile(${file}`);
        }
        setLooping(loop) {
            prompt(this.id, `Aud.SetLooping(\\f${loop}`);
        }
        stop() {
            prompt(this.id, "Aud.Stop(");
        }
        seekTo(time) {
            prompt(this.id, `Aud.SeekTo(${time}`);
        }
        setVolume(left, right) {
            prompt(this.id, `Aud.SetVolume(${left}\\f${right}`);
        }
        setOnReady(callback) {
            prompt(this.id, `Aud.SetOnReady(${_Cbm(callback)}`);
        }
        setOnComplete(callback) {
            prompt(this.id, `Aud.SetOnComplete(${_Cbm(callback)}`);
        }
        setOnSeekDone(callback) {
            prompt(this.id, `Aud.SetOnSeekDone(${_Cbm(callback)}`);
        }
    }
    class MediaStore extends DSObject {
        constructor(id18){
            super(id18);
        }
        static create() {
            const ret = prompt("#", "App.CreateMediaStore(");
            if (ret) {
                return new MediaStore(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        getAlbumArt(image, id, options) {
            return prompt(this.id, `Med.GetAlbumArt(\\f${image ? image.id : null}\\f${id}\\f${options}`) === "true";
        }
        getSongArt(image, id, options) {
            return prompt(this.id, `Med.GetSongArt(\\f${image ? image.id : null}\\f${id}\\f${options}`) == "true";
        }
        queryAlbums(filter, sort, options) {
            prompt(this.id, `Med.QueryAlbums(\\f${filter}\\f${sort}\\f${options}`);
        }
        queryArtists(filter, sort, options) {
            prompt(this.id, `Med.QueryArtists(\\f${filter}\\f${sort}\\f${options}`);
        }
        queryMedia(filter, sort, options) {
            prompt(this.id, `Med.QueryMedia(\\f${filter}\\f${sort}\\f${options}`);
        }
        setOnAlbumsResult(callback) {
            prompt(this.id, `Med.SetOnAlbumsResult(\\f${_Cbm(callback)}`);
        }
        setOnArtistsResult(callback) {
            prompt(this.id, `Med.SetOnArtistsResult(\\f${_Cbm(callback)}`);
        }
        setOnMediaResult(callback) {
            prompt(this.id, `Med.SetOnMediaResult(\\f${_Cbm(callback)}`);
        }
    }
    class NetClient extends DSObject {
        constructor(id20){
            super(id20);
        }
        static create(type) {
            const ret = prompt("#", `App.CreateNetClient(${type}`);
            if (ret) {
                return new NetClient(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        autoReceive(server, port, mode) {
            return prompt(this.id, `Net.AutoReceive(${server}\\f${port}\\f${mode}`);
        }
        clear() {
            prompt(this.id, "Net.Clear(");
        }
        close() {
            prompt(this.id, "Net.Disconnect(");
        }
        connect(address, port) {
            return prompt(this.id, `Net.Connect(${address}\\f${port}`) == "true";
        }
        disconnect() {
            prompt(this.id, "Net.Disconnect(");
        }
        downloadFile(file) {
            return prompt(this.id, `Net.DownloadFile(${file}`);
        }
        getBroadcastAddress() {
            return prompt(this.id, "Net.GetBroadcastAddress(");
        }
        isConnected() {
            return prompt(this.id, "Net.IsConnected(") === "true";
        }
        isEnabled() {
            return prompt(this.id, "Net.IsEnabled(") === "true";
        }
        receiveBytes(mode) {
            return JSON.parse(prompt(this.id, `Net.ReceiveBytes(\\f${mode}`) || "");
        }
        receiveDatagram(mode, port, timeout, options) {
            return prompt(this.id, `Net.ReceiveDatagram(\\f${mode}\\f${port}\\f${timeout}\\f${options}`);
        }
        receiveDatagrams(port, mode, options) {
            prompt(this.id, `Net.ReceiveDatagrams(\\f${port}\\f${mode}\\f${options}`);
        }
        receiveFile(file, wait) {
            return prompt(this.id, `Net.ReceiveFile(${file}\\f${wait}`);
        }
        receiveText(mode) {
            return prompt(this.id, `Net.ReceiveText(${mode}`);
        }
        receiveVideoStream(port, image) {
            prompt(this.id, `Net.ReceiveVideoStream(\\f${port}\\f${image ? image.id : null}`);
        }
        sendBytes(data, mode) {
            prompt(this.id, `Net.SendBytes(\\f${data}\\f${mode}`);
        }
        sendData(text, encoding) {
            prompt(this.id, `Net.SendData(\\f${text}\\f${encoding}`);
        }
        sendDatagram(data, mode, address, port, options) {
            prompt(this.id, `Net.SendDatagram(\\f${data}\\f${mode}\\f${address}\\f${port}\\f${options}`);
        }
        sendText(text, mode) {
            prompt(this.id, `Net.SendText(${text}\\f${mode}`);
        }
        setDataMode(mode) {
            prompt(this.id, `Net.SetDataMode(\\f${mode}`);
        }
        setOnConnect(callback) {
            prompt(this.id, `Net.SetOnConnect(${_Cbm(callback)}`);
        }
        setOnDownload(callback) {
            prompt(this.id, `Net.SetOnDownload(${_Cbm(callback)}`);
        }
        setOnReceive(callback) {
            prompt(this.id, `Net.SetOnReceive(${_Cbm(callback)}`);
        }
        setSplitMode(mode, p2, p3) {
            prompt(this.id, `Net.SetSplitMode(\\f${mode}\\f${p2}\\f${p3}`);
        }
        setTimeout(secs) {
            prompt(this.id, `Net.SetTimeout(${secs}`);
        }
        wakeOnLan(ip, mac) {
            prompt(this.id, `Net.WakeOnLan(\\f${ip}\\f${mac}`);
        }
    }
    class Notification1 extends DSObject {
        constructor(id21){
            super(id21);
        }
        static create(options) {
            const ret = prompt("#", `App.CreateNotification(\\f${options}`);
            if (ret) {
                return new Notification1(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        cancel(id) {
            prompt(this.id, `Not.Cancel(\\f${id}`);
        }
        listen(options) {
            prompt(this.id, `Not.Listen(\\f${options}`);
        }
        notify(id) {
            prompt(this.id, `Not.Notify(\\f${id}`);
        }
        setLargeImage(image) {
            if (image.constructor.name === "Image") {
                prompt(this.id, `Not.SetLargeImage(\\f${image ? image.id : null}`);
            } else prompt(this.id, `Not.SetLargeImageFile(\\f${image}`);
        }
        setLights(color, onMs, offMs) {
            prompt(this.id, `Not.SetLights(\\f${color}\\f${onMs}\\f${offMs}`);
        }
        setMessage(ticker, title, text, extra) {
            prompt(this.id, `Not.SetMessage(\\f${ticker}\\f${title}\\f${text}\\f${extra}`);
        }
        setOnNotify(callback) {
            prompt(this.id, `Not.SetOnNotify(\\f${_Cbm(callback)}`);
        }
        setSmallImage(image) {
            if (image.constructor.name === "Image") {
                prompt(this.id, `Not.SetSmallImage(\\f${image ? image.id : null}`);
            } else prompt(this.id, `Not.SetSmallImageFile(\\f${image}`);
        }
    }
    class PhoneState extends DSObject {
        static instance;
        constructor(id22){
            super(id22);
        }
        static getInstance(types) {
            if (!PhoneState.instance) {
                const ret = prompt("#", `App.CreatePhoneState(\\f${types}`);
                if (ret) {
                    PhoneState.instance = new PhoneState(ret);
                } else {
                    throw new Error(`Could not create ${this.constructor.name}`);
                }
            }
            return PhoneState.instance;
        }
        setOnChange(callback) {
            prompt(this.id, `Pst.SetOnChange(${_Cbm(callback)}`);
        }
        start() {
            prompt(this.id, "Pst.Start(");
        }
        stop() {
            prompt(this.id, "Pst.Stop(");
        }
    }
    class PlayStore extends DSObject {
        constructor(id23){
            super(id23);
        }
        static create() {
            const ret = prompt("#", `App.CreatePlayStore(`);
            if (ret) {
                return new PlayStore(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        GetBillingInfo(prodIDs, callback, options) {
            const ret = prompt(this.id, `Ply.GetBillingInfo(\\f${prodIDs}\\f${_Cbm(callback)}\\f${options}`);
        }
        Purchase(prodID, token, callback, options) {
            const ret = prompt(this.id, `Ply.Purchase(\\f${prodID}\\f${token}\\f${_Cbm(callback)}\\f${options}`);
        }
        GetPurchases(callback, options) {
            const ret = prompt(this.id, `Ply.GetPurchases(\\f${_Cbm(callback)}\\f${options}`);
        }
    }
    class Scroller extends DSView {
        constructor(id24){
            super(id24);
        }
        static create(width, height, options) {
            var ret = prompt("#", `App.CreateScroller(${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Scroller(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        static createInLayout(layout, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddScroller(${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Scroller(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        addChild(layout) {
            prompt(this.id, `Scr.AddChild(\\f${layout ? layout.id : null}`);
        }
        destroyChild(layout) {
            prompt(this.id, `Scr.DestroyChild(\\f${layout ? layout.id : null}`);
        }
        getScrollX() {
            return parseFloat(prompt(this.id, "Scr.GetScrollX(") || "");
        }
        getScrollY() {
            return parseFloat(prompt(this.id, "Scr.GetScrollY(") || "");
        }
        removeChild(layout) {
            prompt(this.id, `Scr.RemoveChild(\\f${layout ? layout.id : null}`);
        }
        scrollTo(x, y) {
            prompt(this.id, `Scr.ScrollTo\\f${x}\\f${y}`);
        }
        scrollBy(x, y) {
            prompt(this.id, `Scr.ScrollBy\\f${x}\\f${y}`);
        }
    }
    class SeekBar extends DSView {
        constructor(id25){
            super(id25);
        }
        static create(width, height, options) {
            const ret = prompt("#", `App.CreateSeekBar(${width}\\f${height}\\f${options}`);
            if (ret) {
                return new SeekBar(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        static createInLayout(layout, width, height, options) {
            const ret = prompt(layout ? layout.id : undefined, `App.AddSeekBar(${width}\\f${height}\\f${options}`);
            if (ret) {
                return new SeekBar(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        adjustColor(hue, saturation, brightness, contrast) {
            prompt(this.id, `Skb.AdjustColor(\\f${hue}\\f${saturation}\\f${brightness}\\f${contrast}`);
        }
        getValue() {
            return parseFloat(prompt(this.id, "Skb.GetValue(") || "");
        }
        setColorFilter(color, mode, options) {
            prompt(this.id, `Skb.SetColorFilter(\\f${color}\\f${mode}\\f${options}`);
            return this;
        }
        setMaxRate(rate) {
            prompt(this.id, `Skb.SetMaxRate(${rate}`);
            return this;
        }
        setOnChange(callback) {
            prompt(this.id, `Skb.SetOnClick(${_Cbm(callback)}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Skb.SetOnClick(${_Cbm(callback)}`);
            return this;
        }
        setValue(value) {
            prompt(this.id, `Skb.SetValue(${value}`);
            return this;
        }
        setRange(range) {
            prompt(this.id, `Skb.SetRange(${range}`);
            return this;
        }
    }
    class Sensor extends DSObject {
        constructor(id26){
            super(id26);
        }
        static create(type, options) {
            const ret = prompt("#", `App.CreateSensor(${type}\\f${options}`);
            if (ret) {
                return new Sensor(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        getAzimuth() {
            return parseFloat(prompt(this.id, "Sns.GetAzimuth(") || "");
        }
        getNames() {
            return prompt(this.id, "Sns.GetNames(");
        }
        getPitch() {
            return parseFloat(prompt(this.id, "Sns.GetPitch(") || "");
        }
        getRoll() {
            return parseFloat(prompt(this.id, "Sns.GetRoll(") || "");
        }
        getValues() {
            return JSON.parse(prompt(this.id, "Sns.GetValues(") || "");
        }
        setMaxRate(rate) {
            prompt(this.id, "Sns.SetMaxRate(\f" + rate);
        }
        setMinChange(min) {
            prompt(this.id, "Sns.SetMinChange(" + min);
        }
        setOnChange(callback) {
            prompt(this.id, "Sns.SetOnChange(" + _Cbm(callback));
        }
        start() {
            prompt(this.id, "Sns.Start(");
        }
        stop() {
            prompt(this.id, "Sns.Stop(");
        }
    }
    class Spinner extends DSView {
        constructor(id27){
            super(id27);
        }
        create(list, width, height, options) {
            var ret = prompt("#", `App.CreateSpinner(${list}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Spinner(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        createInLayout(layout, list, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddSpinner(${list}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Spinner(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        adjustColor(hue, saturation, brightness, contrast) {
            prompt(this.id, `Spn.AdjustColor(\\f${hue}\\f${saturation}\\f${brightness}\\f${contrast}`);
        }
        getText() {
            return prompt(this.id, "Spn.GetText(");
        }
        getTextSize(mode) {
            return parseFloat(prompt(this.id, `Spn.GetTextSize(\\f${mode}`) || "");
        }
        selectItem(item) {
            prompt(this.id, `Spn.SetText(${item}`);
        }
        setList(list, delimiter) {
            prompt(this.id, `Spn.SetList(\\f${list}\\f${delimiter}`);
            return this;
        }
        setOnChange(callback) {
            prompt(this.id, `Spn.SetOnClick(${_Cbm(callback)}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Spn.SetOnClick(${_Cbm(callback)}`);
            return this;
        }
        setText(text) {
            prompt(this.id, `Spn.SetText(${text}`);
            return this;
        }
        setTextColor(color) {
            prompt(this.id, `Spn.SetTextColor(${color}`);
            return this;
        }
        setTextSize(size, mode) {
            prompt(this.id, `Spn.SetTextSize(\\f${size}\\f${mode}`);
            return this;
        }
    }
    class Switch extends DSView {
        constructor(id28){
            super(id28);
        }
        create(text, width, height, options) {
            const ret = prompt("#", `App.CreateSwitch(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Switch(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        createInLayout(layout, text, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddSwitch(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Switch(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        adjustColor(hue, saturation, brightness, contrast) {
            prompt(this.id, `Swi.AdjustColor(\\f${hue}\\f${saturation}\\f${brightness}\\f${contrast}`);
        }
        getChecked() {
            return prompt(this.id, "Swi.GetChecked(") === "true";
        }
        getText() {
            return prompt(this.id, "Swi.GetText(");
        }
        getTextSize(mode) {
            return parseFloat(prompt(this.id, `Swi.GetTextSize(\\f${mode}`) || "");
        }
        setChecked(checked) {
            prompt(this.id, `Swi.SetChecked(${checked}`);
            return this;
        }
        setColorFilter(color, mode, options) {
            prompt(this.id, `Swi.SetColorFilter(\\f${color}\\f${mode}\\f${options}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Swi.SetOnTouch(\\f${_Cbm(callback)}`);
            return this;
        }
        setText(text) {
            prompt(this.id, `Swi.SetText(${text}`);
            return this;
        }
        setTextColor(color) {
            prompt(this.id, `Swi.SetTextColor(${color}`);
            return this;
        }
        setTextSize(size, mode) {
            prompt(this.id, `Swi.SetTextSize(\\f${size}\\f${mode}`);
            return this;
        }
    }
    class Text1 extends DSView {
        constructor(id29){
            super(id29);
        }
        static create(text, width, height, options) {
            var ret = prompt("#", `App.CreateText(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Text1(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        createInLayout(layout, text, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddText(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Text1(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
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
            return parseFloat(prompt(this.id, `Txt.GetTextSize(\\f${mode}`) || "");
        }
        log(message, options) {
            prompt(this.id, `Txt.Log(\\f${message}\\f${options}`);
        }
        setEllipsize(mode) {
            prompt(this.id, `Txt.SetEllipsize(\\f${mode}`);
            return this;
        }
        setFontFile(file) {
            prompt(this.id, `Txt.SetFontFile(\\f${file}`);
            return this;
        }
        setHtml(html) {
            prompt(this.id, `Txt.SetHtml(${html}`);
            return this;
        }
        setLog(maxLines) {
            prompt(this.id, `Txt.SetLog(\\f${maxLines}`);
            return this;
        }
        setTextShadow(radius, dx, dy, color) {
            prompt(this.id, `Txt.SetTextShadow(\\f${radius}\\f${dx}\\f${dy}\\f${color}`);
            return this;
        }
        setOnLongTouch(callback) {
            prompt(this.id, `Txt.SetOnLongTouch(${_Cbm(callback)}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Txt.SetOnTouch(${_Cbm(callback)}`);
            return this;
        }
        setOnTouchDown(callback) {
            prompt(this.id, `Txt.SetOnTouchDown(${_Cbm(callback)}`);
            return this;
        }
        setOnTouchMove(callback) {
            prompt(this.id, `Txt.SetOnTouchMove(${_Cbm(callback)}`);
            return this;
        }
        setOnTouchUp(callback) {
            prompt(this.id, `Txt.SetOnTouchUp(${_Cbm(callback)}`);
            return this;
        }
        setText(text) {
            prompt(this.id, `Txt.SetText(${text}`);
            return this;
        }
        setTextColor(color) {
            prompt(this.id, `Txt.SetTextColor(${color}`);
            return this;
        }
        setTextSize(size, mode) {
            prompt(this.id, `Txt.SetTextSize(\\f${size}\\f${mode}`);
            return this;
        }
        setTouchable(touchable) {
            prompt(this.id, `Txt.SetTouchable(${touchable}`);
            return this;
        }
    }
    class TextEdit extends DSView {
        constructor(id30){
            super(id30);
        }
        create(text, width, height, options) {
            var ret = prompt("#", `App.CreateTextEdit(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new TextEdit(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        createInLayout(layout, text, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddTextEdit(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new TextEdit(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        clearHistory() {
            prompt(this.id, "Txe.ClearHistory(");
        }
        getCursorLine() {
            return parseInt(prompt(this.id, "Txe.GetCursorLine(") || "");
        }
        getCursorPos() {
            return parseInt(prompt(this.id, "Txe.GetCursorPos(") || "");
        }
        getHtml() {
            return prompt(this.id, "Txe.GetHtml(");
        }
        getLineCount() {
            return parseInt(prompt(this.id, "Txe.GetLineCount(") || "");
        }
        getLineStart(line) {
            return parseInt(prompt(this.id, `Txe.GetLineStart(${line}`) || "");
        }
        getLineTop(line) {
            return parseFloat(prompt(this.id, `Txe.GetLineTop(${line}`) || "");
        }
        getMaxLines() {
            return parseInt(prompt(this.id, "Txe.GetMaxLines(") || "");
        }
        getSelectionEnd() {
            return parseInt(prompt(this.id, "Txe.GetSelectionEnd(") || "");
        }
        getSelectionStart() {
            return parseInt(prompt(this.id, "Txe.GetSelectionStart(") || "");
        }
        getSelectedText() {
            return prompt(this.id, "Txe.GetSelectedText(");
        }
        getText() {
            return prompt(this.id, "Txe.GetText(");
        }
        getTextSize(mode) {
            return parseFloat(prompt(this.id, `Txe.GetTextSize(\\f${mode}`) || "");
        }
        insertText(text, start) {
            prompt(this.id, `Txe.InsertText(\\f${text}\\f${start}`);
        }
        redo() {
            prompt(this.id, "Txe.Redo(");
        }
        replaceText(text, start, end) {
            prompt(this.id, "Txe.ReplaceText(\f" + text + "\f" + start + "\f" + end);
        }
        setCursorColor(color) {
            prompt(this.id, `Txe.SetCursorColor(\\f${color}`);
            return this;
        }
        setCursorPos(position) {
            prompt(this.id, `Txe.SetCursorPos(${position}`);
            return this;
        }
        setHint(text) {
            prompt(this.id, `Txe.SetHint(${text}`);
            return this;
        }
        setHtml(html) {
            prompt(this.id, `Txe.SetHtml(${html}`);
            return this;
        }
        setOnChange(callback) {
            prompt(this.id, `Txe.SetOnChange(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnEnter(callback) {
            prompt(this.id, `Txe.SetOnEnter(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnFocus(callback) {
            prompt(this.id, `Txe.SetOnFocus(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Txe.SetOnTouch(\\f${_Cbm(callback)}`);
            return this;
        }
        setSelection(start, stop) {
            prompt(this.id, `Txe.SetSelection(\\f${start}\\f${stop}`);
            return this;
        }
        setText(text) {
            prompt(this.id, `Txe.SetText(${text}`);
            return this;
        }
        setTextColor(color) {
            prompt(this.id, `Txe.SetTextColor(${color}`);
            return this;
        }
        setTextSize(size, mode) {
            prompt(this.id, `Txe.SetTextSize(\\f${size}\\f${mode}`);
            return this;
        }
        undo() {
            prompt(this.id, "Txe.Undo(");
        }
    }
    class Toggle extends DSView {
        constructor(id31){
            super(id31);
        }
        create(text, width, height, options) {
            var ret = prompt("#", `App.CreateToggle(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Toggle(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        AddToggle(layout, text, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddToggle(${text}\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new Toggle(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        getChecked() {
            return prompt(this.id, "Tgl.GetChecked(") === "true";
        }
        getText() {
            return prompt(this.id, "Tgl.GetText(");
        }
        getTextSize(mode) {
            return parseFloat(prompt(this.id, `Tgl.GetTextSize(\\f${mode}`) || "");
        }
        setChecked(checked) {
            prompt(this.id, `Tgl.SetChecked(${checked}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Tgl.SetOnClick(${_Cbm(callback)}`);
            return this;
        }
        setStyle(color1, color2, radius, strokeColor, strokeWidth, shadow, checkColor) {
            prompt(this.id, `Tgl.SetStyle(\\f${color1}\\f${color2}\\f${radius}\\f${strokeColor}\\f${strokeWidth}\\f${shadow}\\f${checkColor}`);
            return this;
        }
        setText(text) {
            prompt(this.id, `Tgl.SetText(${text}`);
            return this;
        }
        setTextColor(color) {
            prompt(this.id, `Tgl.SetTextColor(${color}`);
            return this;
        }
        setTextSize(size, mode) {
            prompt(this.id, `Tgl.SetTextSize(\\f${size}\\f${mode}`);
            return this;
        }
    }
    class VideoView extends DSView {
        constructor(id32){
            super(id32);
        }
        create(width, height, options) {
            var ret = prompt("#", `App.CreateVideoView(\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new VideoView(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        createInLayout(layout, width, height, options) {
            var ret = prompt(layout ? layout.id : undefined, `App.AddVideoView(\\f${width}\\f${height}\\f${options}`);
            if (ret) {
                return new VideoView(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        getPosition() {
            return parseFloat(prompt(this.id, "Vid.GetPosition(") || "");
        }
        getDuration() {
            return parseFloat(prompt(this.id, "Vid.GetDuration(") || "");
        }
        isReady() {
            return prompt(this.id, "Vid.IsReady(") === "true";
        }
        isPlaying() {
            return prompt(this.id, "Vid.IsPlaying(") === "true";
        }
        pause() {
            prompt(this.id, "Vid.Pause(");
        }
        play() {
            prompt(this.id, "Vid.Play(");
        }
        seekTo(seconds) {
            prompt(this.id, "Vid.SeekTo(" + seconds);
        }
        setFile(file) {
            prompt(this.id, "Vid.SetFile(" + file);
            return this;
        }
        setOnComplete(callback) {
            prompt(this.id, "Vid.SetOnComplete(" + _Cbm(callback));
            return this;
        }
        setOnError(callback) {
            prompt(this.id, "Vid.SetOnError(" + _Cbm(callback));
            return this;
        }
        setOnReady(callback) {
            prompt(this.id, "Vid.SetOnReady(" + _Cbm(callback));
            return this;
        }
        setOnSubtitle(callback) {
            prompt(this.id, "Vid.SetOnSubtitle(\f" + _Cbm(callback));
            return this;
        }
        setSubtitles(file) {
            prompt(this.id, "Vid.SetSubtitles(\f" + file);
            return this;
        }
        setVolume(left, right) {
            prompt(this.id, "Vid.SetVolume(\f" + left + "\f" + right);
            return this;
        }
        stop() {
            prompt(this.id, "Vid.Stop(");
        }
    }
    class WebView extends DSView {
        constructor(id33){
            super(id33);
        }
        create(width, height, options, zoom) {
            const ret = prompt("#", `App.CreateWeb(\\f${width}\\f${height}\\f${options}\\f${zoom}`);
            if (ret) {
                return new WebView(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        createInLayout(layout, width, height, options, zoom) {
            const ret = prompt(layout ? layout.id : undefined, `App.AddWeb(\\f${width}\\f${height}\\f${options}\\f${zoom}`);
            if (ret) {
                return new WebView(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        back() {
            prompt(this.id, "Web.Back(");
        }
        canGoBack() {
            return prompt(this.id, "Web.CanGoBack(") === "true";
        }
        canGoForward() {
            return prompt(this.id, "Web.CanGoForward(") === "true";
        }
        capture(file) {
            prompt(this.id, `Web.Capture(\\f${file}`);
        }
        clearHistory() {
            prompt(this.id, "Web.ClearHistory(");
        }
        execute(code, callback) {
            return prompt(this.id, `Web.Execute(\\f${code}\\f${_Cbm(callback)}`);
        }
        forward() {
            prompt(this.id, "Web.Forward(");
        }
        getUrl() {
            return prompt(this.id, "Web.GetUrl(");
        }
        getTitle() {
            return prompt(this.id, "Web.GetTitle(");
        }
        loadHtml(html, base, options) {
            prompt(this.id, `Web.LoadHtml(\\f${html}\\f${base}\\f${options}`);
        }
        loadUrl(url, options) {
            prompt(this.id, `Web.LoadUrl(\\f${url}\\f${options}`);
        }
        print() {
            prompt(this.id, "Web.Print(\f");
        }
        reload() {
            prompt(this.id, "Web.Reload(");
        }
        setErrorPage(url) {
            prompt(this.id, `Web.SetErrorPage(\\f${url}`);
            return this;
        }
        setOnProgress(callback) {
            prompt(this.id, `Web.SetOnProgress(${_Cbm(callback)}`);
            return this;
        }
        setOnError(callback) {
            prompt(this.id, `Web.SetOnError(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnConsole(callback) {
            prompt(this.id, `Web.SetOnConsole(\\f${_Cbm(callback)}`);
            return this;
        }
        setZoom(zoom) {
            prompt(this.id, `Web.SetZoom(\\f${zoom}`);
            return this;
        }
        setTextZoom(zoom) {
            prompt(this.id, `Web.SetTextZoom(\\f${zoom}`);
            return this;
        }
        setUserAgent(agent) {
            prompt(this.id, `Web.SetUserAgent(\\f${agent}`);
            return this;
        }
        setUserCreds(name, password) {
            prompt(this.id, `Web.SetUserCreds(\\f${name}\\f${password}`);
            return this;
        }
        setRedirect(urlFrom, urlTo) {
            prompt(this.id, `Web.SetRedirect(\\f${urlFrom}\\f${urlTo}`);
            return this;
        }
        setTouchMode(mode) {
            prompt(this.id, `Web.SetTouchMode(\\f${mode}`);
            return this;
        }
        setOnTouch(callback) {
            prompt(this.id, `Web.SetOnTouch(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnUrl(callback) {
            prompt(this.id, `Web.SetOnUrl(\\f${_Cbm(callback)}`);
            return this;
        }
        setOnRequest(callback) {
            prompt(this.id, `Web.SetOnRequest(\\f${_Cbm(callback)}`);
            return this;
        }
        setBlockedUrls(urls) {
            prompt(this.id, `Web.SetBlockedUrls(\\f${urls}`);
            return this;
        }
        simulateKey(keyName, modifiers, pause) {
            prompt(this.id, `Web.SimulateKey(\\f${keyName}\\f${modifiers}\\f${pause}`);
        }
        stop() {
            prompt(this.id, "Web.Stop(");
        }
    }
    class YesNoDialog extends DSObject {
        static instance;
        constructor(id34){
            super(id34);
        }
        static getInstance(message, options) {
            if (!YesNoDialog.instance) {
                const ret = prompt("#", `App.CreateYesNoDialog(\\f${message}\\f${options}`);
                if (ret) {
                    YesNoDialog.instance = new YesNoDialog(ret);
                } else {
                    throw new Error(`Could not create ${this.constructor.name}`);
                }
            }
            return YesNoDialog.instance;
        }
        adjustColor(hue, saturation, brightness, contrast) {
            prompt(this.id, `Ynd.AdjustColor(\\f${hue}\\f${saturation}\\f${brightness}\\f${contrast}`);
        }
        dismiss() {
            prompt(this.id, "Ynd.Dismiss(");
        }
        hide() {
            prompt(this.id, "Ynd.Hide(");
        }
        setOnTouch(callback) {
            prompt(this.id, `Ynd.SetOnClick(${_Cbm(callback)}`);
            return this;
        }
        setBackColor(color, radius) {
            prompt(this.id, `Ynd.SetBackColor(\\f${color}\\f${radius}`);
            return this;
        }
        setBackground(file, options) {
            prompt(this.id, `Ynd.SetBackground(\\f${file}\\f${options}`);
            return this;
        }
        setButtonText(yes, no) {
            prompt(this.id, `Ynd.SetButtonText(\\f${yes}\\f${no}`);
            return this;
        }
        setSize(width, height, options) {
            prompt(this.id, `Ynd.SetSize(\\f${width}\\f${height}\\f${options}`);
            return this;
        }
        show() {
            prompt(this.id, "Ynd.Show(");
        }
    }
    class ZipUtil extends DSObject {
        constructor(id35){
            super(id35);
        }
        static create(mode) {
            const ret = prompt("#", `App.CreateZipUtil(\\f${mode}`);
            if (ret) {
                return new ZipUtil(ret);
            } else {
                throw new Error(`Could not create ${this.constructor.name}`);
            }
        }
        addFile(name, file) {
            prompt(this.id, `Zip.AddFile(\\f${name}\\f${file}`);
        }
        addText(name, text) {
            prompt(this.id, `Zip.AddText(\\f${name}\\f${text}`);
        }
        close() {
            prompt(this.id, "Zip.Close(");
        }
        createDebugKey(file) {
            prompt(this.id, `Zip.CreateDebugKey(\\f${file}`);
        }
        createFile(file) {
            prompt(this.id, `Zip.Create(\\f${file}`);
        }
        createKey(file, password, name, org) {
            prompt(this.id, `Zip.CreateKey(\\f${file}\\f${password}\\f${name}\\f${org}`);
        }
        extract(name, file) {
            prompt(this.id, `Zip.Extract(\\f${name}\\f${file}`);
        }
        list(path) {
            return prompt(this.id, `Zip.List(\\f${path}`);
        }
        open(file) {
            prompt(this.id, `Zip.Open(\\f${file}`);
        }
        sign(fileIn, fileOut, keyStore, password) {
            return prompt(this.id, `Zip.Sign(\\f${fileIn}\\f${fileOut}\\f${keyStore}\\f${password}`) === "true";
        }
        updateManifest(fileIn, fileOut, packageName, appName, permissions, options) {
            prompt(this.id, `Zip.UpdateManifest(\\f${fileIn}\\f${fileOut}\\f${packageName}\\f${appName}\\f${permissions}\\f${options}`);
        }
    }
    class Api {
        static addLayout(layout, type, options) {
            if (!type) {
                prompt("#", "App.AddLayout(" + layout.id);
            } else {
                return Layout.create(type, options);
            }
        }
        static destroyLayout(layout) {
            prompt("#", "App.DestroyLayout(" + layout.id);
        }
        static removeLayout(layout) {
            prompt("#", "App.RemoveLayout(" + layout.id);
        }
    }
    function OnStart1() {
        const lay = Layout.create("linear", "vcenter,fillxy");
        const txt = Text1.create("Hello World").setMargins(0, 0.05, 0, 0).setTextSize(22);
        lay.addChild(txt);
        Api.addLayout(lay);
    }