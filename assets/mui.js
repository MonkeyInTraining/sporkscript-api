
var _is_ds = true

 
var _mui_obj = {
    isPortrait: app.GetOrientation()=="Portrait"?true:false,
    _alp: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    _dark_colors: ["#78909c", "#8d6e63", "#ff7043", "#ffa726", "#ffca28", "#66bb6a", "#26a69a", "#26c6da", "#29b6f6", "#42a5f5", "#5c6bc0", "#7e57c2", "#ab47bc", "#ec407a", "#ef5350", "#e53935", "#d32f2f", "#c62828", "#b71c1c", "#f44336", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20", "#4285F4", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1", "#9e9e9e", "#757575", "#616161", "#424242", "#212121", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064", "#009688", "#00897b", "#00796b", "#00695c", "#004d40", "#8bc34a", "#7cb342", "#689f38", "#558b2f", "#33691e", "#cddc39", "#c0ca33", "#afb42b", "#9e9d24", "#827717", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c", "#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238"],
    _months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    
    _layout_to_remove: [],
    _remove_child_func: [],
    _destroy_layout: function() {
        _mui_obj._remove_child_func[0](_mui_obj._layout_to_remove[0])
        _mui_obj._layout_to_remove.splice(0, 1)
        _mui_obj._remove_child_func.splice(0, 1)
    }
}

var UI = {}
UI.version = 1.13
UI.sw = app.GetDisplayWidth()
UI.sh = app.GetDisplayHeight()
UI.swdp = app.GetDisplayWidth() * (160/ app.GetScreenDensity())
UI.shdp = app.GetDisplayHeight() * (160/ app.GetScreenDensity())
UI.dp = app.GetScreenDensity()
UI.fonts = {
    thin: _is_ds?"/Sys/fonts/mui/Thin.ttf":"Fonts/Thin.ttf",
    light: _is_ds?"/Sys/fonts/mui/Light.ttf":"Fonts/Light.ttf",
    regular: _is_ds?"/Sys/fonts/mui/Regular.ttf":"Fonts/Regular.ttf",
    medium: _is_ds?"/Sys/fonts/mui/Medium.ttf":"Fonts/Medium.ttf",
    bold: _is_ds?"/Sys/fonts/mui/Bold.ttf":"Fonts/Bold.ttf",
    icon: _is_ds?"/Sys/fonts/mui/Icon.ttf":"Fonts/Icon.ttf"
}
UI.theme = {}
UI._counts = -1
UI._controls = []

var plugDir = app.GetPrivateFolder("Plugins")+"/droidscriptuikit"
app.InitializeUIKit = function(primary, theme) {
    if(app.InIDE() && !_is_ds) {
        app.CopyFolder(plugDir+"/Fonts", "Fonts", false)
    }
    
    if(primary && !theme) {
        UI.theme.primary = primary
        return
    }
    
    //Checks the current theme info
    var thm = {}
    if(typeof app.GetThemeInfo == "function") {
        thm = app.GetThemeInfo()
    }
    
    UI.theme.primary = (primary?primary.toLowerCase():null)||"#4285F4"
    if(theme) UI.theme.theme = theme.toLowerCase()
    else UI.theme.theme = thm.dark?"dark":"light"
    if(UI.theme.theme == "light") {
        UI.theme.backColor = UI.colors.grey.lighten4
        UI.theme.mainTextColor = "#000000"
        UI.theme.secondaryTextColor = "#424242"
        UI.theme.navColor = "#ffffff"
        UI.theme.cardColor = "#ffffff"
        UI.theme.frgClr = "#ffffff"
        UI.theme.dimmed = "#88000000"
        UI.L=1
    } else {
        UI.theme.backColor = "#121212"
        UI.theme.mainTextColor = "#ffffff"
        UI.theme.secondaryTextColor = "#BDBDBD"
        UI.theme.navColor = "#212121"
        UI.theme.cardColor = "#212121"
        UI.theme.frgClr = "#212121"
        UI.theme.dimmed = "#dd000000"
        UI.L=0
    }
}
UI.GetVersion = function() {
    return this.version
}
// Layouts
UI.CreateLayout = function(type, options) {
    if(type && type.toLowerCase()=="card") {
        var lay = app.CreateLayout("Card", options)
        lay.SetBackColor(UI.L?"#ffffff":"#212121")
        lay.SetCornerRadius(4)
        lay.SetElevation(2)
        return lay
    } else {
        lay = app.CreateLayout(type, options)
        lay.SetBackColor(MUI.L?MUI.colors.grey.lighten4:UI.theme.backColor)
        return lay
    }
}
// Texts
UI.CreateTextH1 = function(text, width, height, options, color, fontweight) {
    fontweight = fontweight || "Regular"
    var txt = app.CreateText(text, width, height, options||"Left")
    txt.SetTextSize(32)
    txt.SetTextColor(color||this.theme.mainTextColor)
    txt.SetFontFile(fontweight.toFontName())
    return txt
}
UI.CreateTextH2 = function(text, width, height, options, color, fontweight) {
    fontweight = fontweight || "Regular"
    var txt = app.CreateText(text, width, height, options||"Left")
    txt.SetTextSize(28)
    txt.SetTextColor(color||this.theme.mainTextColor)
    txt.SetFontFile(fontweight.toFontName())
    return txt
}
UI.CreateTextH3 = function(text, width, height, options, color, fontweight) {
    fontweight = fontweight || "Regular"
    var txt = app.CreateText(text, width, height, options||"Left")
    txt.SetTextSize(25)
    txt.SetTextColor(color||this.theme.mainTextColor)
    txt.SetFontFile(fontweight.toFontName())
    return txt
}
UI.CreateTextH4 = function(text, width, height, options, color, fontweight) {
    fontweight = fontweight || "Regular";
    var txt = app.CreateText(text, width, height, options||"Left")
    txt.SetTextSize(22)
    txt.SetTextColor(color||this.theme.mainTextColor)
    txt.SetFontFile(fontweight.toFontName())
    return txt
}
UI.CreateTextH5 = function(text, width, height, options, color, fontweight) {
    fontweight = fontweight || "Regular"
    var txt = app.CreateText(text, width, height, options||"Left")
    txt.SetTextSize(20)
    txt.SetTextColor(color||this.theme.mainTextColor)
    txt.SetFontFile(fontweight.toFontName())
    return txt
}
UI.CreateTextH6 = function(text, width, height, options, color, fontweight) {
    fontweight = fontweight || "Regular"
    var txt = app.CreateText(text, width, height, options||"Left")
    txt.SetTextSize(18)
    txt.SetTextColor(color||this.theme.mainTextColor)
    txt.SetFontFile(fontweight.toFontName())
    return txt
}
UI.CreateTextParagraph = function(text, width, height, options, color, fontweight) {
    var txt = app.CreateText(text, width, height, options+", Multiline"||"Left, Multiline")
    txt.SetTextSize(16)
    txt.SetTextColor(color||UI.theme.secondaryTextColor)
    txt.SetFontFile(fontweight?fontweight.toFontName():UI.fonts.regular)
    return txt
}
UI.CreateTextSecondary = function(text, width, height, options, color, fontweight) {
    var txt = app.CreateText(text, width, height, options||"Left")
    txt.SetTextSize(14)
    txt.SetTextColor(color||UI.theme.secondaryTextColor)
    txt.SetFontFile(UI.fonts.regular)
    return txt
}
UI.CreateTextJumbo = function(text, width, height, options, color) {
    var txt = app.CreateText(text, width, height, options||"Left")
    txt.SetTextSize(35)
    txt.SetTextColor(color||this.theme.mainTextColor)
    txt.SetFontFile("Medium".toFontName())
    return txt
}
// Buttons
UI.CreateButtonRaised = function(text, width, height, color, txtcolor) {
    color = color || this.theme.primary
    var button = app.CreateButton(text.toString()||"", width, height, "Custom, Fontawesome")
    button.SetFontFile(text.search("fa-")>0 ? null : this.fonts.medium)
    button.SetStyle(color, color, 3, 0, 0, 1)
    button.SetTextSize(14)
    button.SetTextColor(txtcolor||"#ffffff")
    return button
}
UI.CreateButtonRaisedO = function(text, width, height, color, backColor) {
    var color = color || this.theme.primary
    var backColor = backColor || this.theme.backColor
    var button = app.CreateButton(text, width, height, "Custom, Fontawesome")
    button.SetFontFile(text.search("fa-")>0 ? null : this.fonts.medium)
    button.SetTextColor(color)
    button.SetStyle(this.theme.backColor, this.theme.backColor, 2, color, 2, 0)
    button.SetTextSize(14)
    return button
}
UI.CreateButtonRound = function(text, width, height, color, txtcolor) {
    var color = color || this.theme.primary
    var button = app.CreateButton(text.toString()||"", width, height, "Custom, Fontawesome")
    button.SetFontFile(text.search("fa-")>0 ? null : this.fonts.medium)
    button.SetStyle(color, color, 50, 0, 0, 0.15)
    button.SetTextSize(14)
    button.SetTextColor(txtcolor||"#ffffff")
    return button
}
UI.CreateButtonRoundO = function(text, width, height, color, backColor) {
    var color = color || this.theme.primary
    var backColor = backColor || this.theme.backColor
    var button = app.CreateButton(text.toString()||"", width, height, "Custom, Fontawesome")
    button.SetFontFile(text.search("fa-")>0 ? null : this.fonts.medium)
    button.SetTextColor(color)
    button.SetStyle(backColor, backColor, 50, color, 2, 0)
    button.SetTextSize(14)
    return button
}
UI.CreateButtonElegant = function(text, width, height, color) {
    var color = color || this.theme.primary
    var tr = this.CreateLightColor(color)
    var button = app.CreateButton(text.toString()||"", width, height, "Custom, Fontawesome")
    button.SetFontFile(text.search("fa-")>0 ? null : this.fonts.medium)
    button.SetTextColor(color)
    button.SetStyle(tr, tr, 5, color, 0, 0)
    button.SetTextSize(14)
    return button
}
UI.CreateButtonFlat = function(text, width, height, color, backColor) {
    var color = color || this.theme.primary
    var backColor = backColor || this.theme.backColor
    var button = app.CreateButton(text.toString()||"", width, height, "Custom, Fontawesome")
    button.SetFontFile(text.search("fa-")>0 ? null : this.fonts.medium)
    button.SetTextColor(color)
    button.SetStyle(backColor, backColor, 5, 0, 0, 0)
    button.SetTextSize(14)
    return button
}
// Fabs
UI.CreateFAB = function(icon, color) {
    var color = color || UI.theme.primary
    var lay = app.CreateLayout("Card")
    lay.SetSize(55, 55, "dp")
    lay.SetCornerRadius(27.5)
    lay.SetElevation(8)
    lay.SetBackColor(color)
    lay.SetPosition((UI.swdp-80)/UI.swdp, (UI.shdp-80)/UI.shdp)
        var layout = app.CreateLayout("Linear", "VCenter")
            var button = app.CreateButton(icon.trim().toLowerCase(), null, null, "Custom")
            button.SetMargins(0, 2.5, 0, 0, "dp")
            button.SetSize(70, 70, "dp")
            button.SetStyle(color, color, 50, 0, 0, 0)
            button.SetFontFile(UI.fonts.icon)
            button.SetTextSize(22)
            layout.AddChild(button)
        lay.AddChild(layout)
    lay.SetOnTouch = button.SetOnTouch
    lay.SetOnLongTouch = button.SetOnLongTouch
    lay.SetIcon = button.SetText
    lay.SetIconColor = button.SetTextColor
    lay.GetIcon = button.GetText
    return lay
}
UI.CreateFABOutline = function(icon, color, backColor) {
    var color = color || this.theme.primary
    var backColor = this.theme.backColor
    var button = app.CreateButton(icon.trim().toLowerCase(), null, null, "Custom")
    button.SetSize(65, 65, "dp")
    button.SetFontFile(this.fonts.icon)
    button.SetStyle(backColor, backColor, 50, color, 2, 0)
    button.SetTextSize(20)
    button.SetTextColor(color)
    button.SetPosition((UI.swdp-80)/UI.swdp, (UI.shdp-80)/UI.shdp)
    button.SetIcon = button.SetText
    button.SetIconColor = button.SetTextColor
    button.GetIcon = button.GetText
    return button
}
UI.CreateFABElegant = function(icon, color) {
    var color = color || this.theme.primary
    var backColor = this.CreateLightColor(color)
    var button = app.CreateButton(icon.trim().toLowerCase(), null, null, "Custom")
    button.SetSize(65,65, "dp")
    button.SetFontFile(this.fonts.icon)
    button.SetStyle(backColor, backColor, 50, 0, 0, 0)
    button.SetTextSize(20)
    button.SetTextColor(color)
    button.SetPosition((UI.swdp-80)/UI.swdp, (UI.shdp-80)/UI.shdp)
    button.SetIcon = button.SetText
    button.SetIconColor = button.SetTextColor
    button.GetIcon = button.GetText
    return button
}
UI.CreateButtonToggle = function(text, width, height, value, callback, color, backColor) {
    backColor = this.theme.backColor
    color = color || this.theme.primary
    var button = app.CreateButton(text.toString()||"", width, height, "Custom,Fontawesome")
    button.SetStyle(backColor, backColor, 50, "#e0e0e0", 1, 0)
    button.SetTextColor(color)
    button.SetFontFile(text.search("fa-")>0?null:this.fonts.medium)
    var activeColor = this.CreateLightColor(color)
    UI._controls[button.id] = {
        callback: callback,
        color: color,
        activeColor: activeColor,
        value: value
    }
    if(value) button.SetStyle(activeColor, activeColor, 50, color, 1, 0)
    button.SetOnTouch(function() {
        var cmp = UI._controls[this.id]
        if(!cmp.value) {
            this.SetStyle(cmp.activeColor, cmp.activeColor, 50, cmp.color, 1, 0)
            cmp.value=true
        } else {
            this.SetStyle(UI.theme.backColor, UI.theme.backColor, 50, "#e0e0e0", 1, 0)
            cmp.value=false
        }
        if(cmp.callback) cmp.callback(cmp.value)
    })
    return button
}
// Textedits
UI.CreateTextEditOutline = function(width, options, hint, boolLabel) {
    var color =  UI.theme.primary
    var backColor = UI.theme.backColor
    boolLabel = boolLabel || false
    options = options ? options.toLowerCase() : "Left, Singleline"
    var radius = options.search("round") > -1 ? 50 : 4
    var lay = app.CreateLayout("Absolute")
    lay.SetSize(width, null)
    
        var border = app.CreateButton("", null, null, "Custom, NoSound")
        border.SetSize( width*UI.swdp, 65, "dp" )
        border.SetStyle("#00000000", "#00000000", radius, UI.L?"#bdbdbd":"#757575", 2, 0)
        border.SetPosition(0, UI.Fr(6))
        lay.AddChild(border)
        
        var label = app.CreateText(hint)
        label.SetFontFile(UI.fonts.regular)
        label.SetTextColor(color)
        label.SetTextSize(12)
        label.SetPadding(4, 0, 4, 0, "dp")
        label.SetBackColor(backColor)
        label.SetPosition(0.048, 0)
        label.Hide()
        if(boolLabel) {
            options.search("round")>-1?label.SetPosition(0.075,0):null
            lay.AddChild(label)
        }
        var innerLay = app.CreateLayout("Linear", "VCenter, Horizontal, Left")
        innerLay.SetSize(width*UI.swdp, 65, "dp")
        innerLay.SetPosition(0, UI.Fr(3.5))
            var tedit = app.CreateTextEdit("", width, null, options+',Singleline')
            tedit.SetTextColor(UI.L?"#000000":"#ffffff")
            tedit.SetTextSize(16)
            options.search("round") > -1 ? tedit.SetPadding(30, 0, 18, 0, "dp") : tedit.SetPadding(20, 0, 18, 0, "dp")
            tedit.SetBackColor('#00ffffff')
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5")
            tedit.SetHint(hint)
            innerLay.AddChild(tedit)
            tedit.data = {
                label: label,
                color: color,
                hint: hint,
                border: border,
                boolLabel: boolLabel,
                radius: radius
            }
            tedit.SetOnFocus(function(state) {
                var data = this.data
                if(state == true) {
                    data.border.SetStyle("#00000000", "#00000000", data.radius, data.color, 2, 0)
                    if(data.boolLabel != false) {
                        data.label.Show()
                        this.SetHint("")
                    }
                } else if(!state && this.GetText()=="" ) {
                    if(data.boolLabel) data.label.Hide()
                    this.SetHint(data.hint)
                    data.border.SetStyle("#00000000", "#00000000", data.radius, UI.L?"#bdbdbd":"#757575", 2, 0)
                }
            })
        lay.AddChild(innerLay)
    lay.ClearFocus = tedit.ClearFocus
    lay.ClearHistory = tedit.ClearHistory
    lay.Focus = tedit.Focus
    lay.GetCursorLine = tedit.GetCursorLine
    lay.GetCursorPos = tedit.GetCursorPos
    lay.GetSelectedText = tedit.GetSelectedText
    lay.GetSelectionEnd = tedit.GetSelectionEnd
    lay.GetSelectionStart = tedit.GetSelectionStart
    lay.GetText = tedit.GetText
    lay.GetType = tedit.GetType
    lay.InsertText = tedit.InsertText
    lay.Redo = tedit.Redo
    lay.ReplaceText = tedit.ReplaceText
    lay.SetCursorPos = tedit.SetCursorPos
    lay.SetOnChange = tedit.SetOnChange
    lay.SetOnEnter = tedit.SetOnEnter
    lay.SetText = tedit.SetText
    lay.Undo = tedit.Undo
    return lay
}
UI.CreateTextEditOutlineA = function(width, options, hint, boolLabel, color, backColor) {
    var color =  UI.theme.primary
    var backColor = UI.theme.backColor
    boolLabel = boolLabel || false
    options = options ? options.toLowerCase() : "Left, Singleline"
    var radius = options.search("round") > -1 ? 50 : 4
    var lay = app.CreateLayout("Absolute")
    lay.SetSize(width, null)
        var border = app.CreateButton("", null, null, "Custom, NoSound")
        border.SetSize( width*UI.swdp, 65, "dp" )
        border.SetStyle("#00000000", "#00000000", radius, color, 2, 0)
        border.SetPosition(0, UI.Fr(6))
        lay.AddChild(border)
        
        var label = app.CreateText(hint)
        label.SetFontFile(UI.fonts.regular)
        label.SetTextColor(color)
        label.SetTextSize(12)
        label.SetPadding(4, 0, 4, 0, "dp")
        label.SetBackColor(backColor)
        label.SetPosition(0.048, 0)
        if(boolLabel) {
            options.search("round")>-1?label.SetPosition(0.075,0):null
            lay.AddChild(label)
        }
        var innerLay = app.CreateLayout("Linear", "VCenter, Horizontal, Left")
        innerLay.SetSize(width*UI.swdp, 65, "dp")
        innerLay.SetPosition(0, UI.Fr(3.5))
            var tedit = app.CreateTextEdit("", width, null, options+',Singleline')
            tedit.SetTextColor(UI.L?"#000000":"#ffffff")
            tedit.SetTextSize(16)
            options.search("round") > -1 ? tedit.SetPadding(30, 0, 18, 0, "dp") : tedit.SetPadding(20, 0, 18, 0, "dp")
            tedit.SetBackColor('#00ffffff')
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5")
            if(!boolLabel && hint) tedit.SetHint(hint)
            innerLay.AddChild(tedit)
        lay.AddChild(innerLay)
    lay.ClearFocus = tedit.ClearFocus
    lay.ClearHistory = tedit.ClearHistory
    lay.Focus = tedit.Focus
    lay.GetCursorLine = tedit.GetCursorLine
    lay.GetCursorPos = tedit.GetCursorPos
    lay.GetSelectedText = tedit.GetSelectedText
    lay.GetSelectionEnd = tedit.GetSelectionEnd
    lay.GetSelectionStart = tedit.GetSelectionStart
    lay.GetText = tedit.GetText
    lay.GetType = tedit.GetType
    lay.InsertText = tedit.InsertText
    lay.Redo = tedit.Redo
    lay.ReplaceText = tedit.ReplaceText
    lay.SetCursorPos = tedit.SetCursorPos
    lay.SetOnChange = tedit.SetOnChange
    lay.SetOnEnter = tedit.SetOnEnter
    lay.SetOnFocus = tedit.SetOnFocus
    lay.SetText = tedit.SetText
    lay.Undo = tedit.Undo
    return lay
}
UI.CreateTextEditFilled = function(width, options, hint, boolLabel, color) {
    var color = color || UI.theme.primary
    var boolLabel = boolLabel || false
    var lay = app.CreateLayout("Linear", "Vertical, Left")
    lay.SetBackColor("#00000000")
        var label = app.CreateText(hint)
        label.SetTextColor(color)
        label.SetTextSize(12)
        label.Hide()
        if(boolLabel) lay.AddChild(label)
        
        var tedit = app.CreateTextEdit("", width, null, options+", Singleline")
        tedit.SetBackColor("#00ffffff")
        tedit.SetTextColor(UI.L?"#000000":"#ffffff")
        tedit.SetTextSize(16)
        tedit.SetHint(hint.toString()||"")
        tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5")
        tedit.SetPadding(2.5, 7, 2.5, 12, "dp")
        tedit.SetOnFocus(function(state) {
            var data = this.data
            if(state) {
                data.border.SetColor(data.color)
                if(data.boolLabel != false) {
                    data.label.Show()
                    this.SetHint("")
                }
            } else if(!state && this.GetText()=="" ){
                data.label ? data.label.Hide() : null
                this.SetHint(data.hint)
                data.border.SetColor(UI.L?"#bdbdbd":"#757575")
            }
        });
        lay.AddChild(tedit)
        
        var bottomBorder = app.CreateImage(null, null, null, "fix", 1, 1)
        bottomBorder.SetSize(width*this.sw, 4, "px" )
        bottomBorder.SetColor(UI.L?"#bdbdbd":"#757575")
        lay.AddChild(bottomBorder)
        
        tedit.data = {
            label: label,
            color: color,
            hint: hint,
            border: bottomBorder,
            type: "material",
            boolLabel: boolLabel,
        }
    lay.ClearFocus = tedit.ClearFocus
    lay.ClearHistory = tedit.ClearHistory
    lay.Focus = tedit.Focus
    lay.GetCursorLine = tedit.GetCursorLine
    lay.GetCursorPos = tedit.GetCursorPos
    lay.GetSelectedText = tedit.GetSelectedText
    lay.GetSelectionEnd = tedit.GetSelectionEnd
    lay.GetSelectionStart = tedit.GetSelectionStart
    lay.GetText = tedit.GetText
    lay.GetType = tedit.GetType
    lay.InsertText = tedit.InsertText
    lay.Redo = tedit.Redo
    lay.ReplaceText = tedit.ReplaceText
    lay.SetCursorPos = tedit.SetCursorPos
    lay.SetOnChange = tedit.SetOnChange
    lay.SetOnEnter = tedit.SetOnEnter
    //lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText
    lay.Undo = tedit.Undo
    return lay
}
UI.CreateTextEditFilledA = function(width, options, hint, boolLabel, color) {
    width = width || 1
    var color = color || UI.theme.primary
    var lay = app.CreateLayout("Linear", "Vertical, Left")
    lay.SetBackColor("#00000000")
        var label = app.CreateText(hint)
        label.SetTextColor(color)
        label.SetTextSize(12)
        boolLabel == true ? lay.AddChild(label) : null

        var tedit = app.CreateTextEdit("", width, null, options+", Singleline")
        tedit.SetBackColor("#00ffffff")
        tedit.SetTextColor(UI.L?"#000000":"#ffffff")
        tedit.SetTextSize(16)
        tedit.SetHint(hint)
        tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5")
        tedit.SetPadding(2.5, 7.5, 2.5, 12.5, "dp")
        lay.AddChild(tedit)
        if(boolLabel) tedit.SetHint("")

        var bottomBorder = app.CreateImage(null, null, null, "fix", 1, 1)
        bottomBorder.SetSize(width*this.sw, 4, "px" )
        bottomBorder.SetColor(color)
        lay.AddChild(bottomBorder)
    lay.ClearFocus = tedit.ClearFocus
    lay.ClearHistory = tedit.ClearHistory
    lay.Focus = tedit.Focus
    lay.GetCursorLine = tedit.GetCursorLine
    lay.GetCursorPos = tedit.GetCursorPos
    lay.GetSelectedText = tedit.GetSelectedText
    lay.GetSelectionEnd = tedit.GetSelectionEnd
    lay.GetSelectionStart = tedit.GetSelectionStart
    lay.GetText = tedit.GetText
    lay.GetType = tedit.GetType
    lay.InsertText = tedit.InsertText
    lay.Redo = tedit.Redo
    lay.ReplaceText = tedit.ReplaceText
    lay.SetCursorPos = tedit.SetCursorPos
    lay.SetOnChange = tedit.SetOnChange
    lay.SetOnEnter = tedit.SetOnEnter
    lay.SetOnFocus = tedit.SetOnFocus
    lay.SetText = tedit.SetText
    lay.Undo = tedit.Undo
    return lay
}
UI.CreateTextEditUnique = function(width, options, hint, textColor, backColor) {
    var lay = app.CreateLayout("Card")
    lay.SetSize(width, null)
    lay.SetElevation(4)
    lay.SetCornerRadius(8)
        var bnm = app.CreateLayout("Linear", "VCenter, Horizontal, Left")
        bnm.SetSize(width*UI.swdp, 55, "dp")
        bnm.SetBackColor(UI.L?"#ffffff":"#212121")
            var tedit = app.CreateTextEdit("", null, null, options+", Singleline")
            tedit.SetSize(width)
            tedit.SetTextColor(UI.theme.primary)
            tedit.SetTextSize(16)
            tedit.SetHint(hint||"")
            tedit.SetPadding(20, 16, 20, 16, "dp")
            tedit.SetBackColor("#00000000")
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5")
            bnm.AddChild(tedit)
        lay.AddChild(bnm)
    lay.ClearFocus = tedit.ClearFocus
    lay.ClearHistory = tedit.ClearHistory
    lay.Focus = tedit.Focus
    lay.GetCursorLine = tedit.GetCursorLine
    lay.GetCursorPos = tedit.GetCursorPos
    lay.GetSelectedText = tedit.GetSelectedText
    lay.GetSelectionEnd = tedit.GetSelectionEnd
    lay.GetSelectionStart = tedit.GetSelectionStart
    lay.GetText = tedit.GetText
    lay.GetType = tedit.GetType
    lay.InsertText = tedit.InsertText
    lay.Redo = tedit.Redo
    lay.ReplaceText = tedit.ReplaceText
    lay.SetCursorPos = tedit.SetCursorPos
    lay.SetOnChange = tedit.SetOnChange
    lay.SetOnEnter = tedit.SetOnEnter
    lay.SetOnFocus = tedit.SetOnFocus
    lay.SetText = tedit.SetText
    lay.Undo = tedit.Undo
    return lay
}
UI.CreateTextEditSearch = function(width, options, hint, color, backColor) {
    color = color || UI.theme.primary
    backColor = UI.L?"#ffffff":"#212121"
    var lay = app.CreateLayout("Card")
    lay.SetCornerRadius(8)
    lay.SetElevation(4)
    lay.SetSize(width, null)
    
    UI._controls[lay.id] = {
        setOnFocus: null,
        setOnChange: null
    }
    
        var bnm = app.CreateLayout("Linear", "VCenter, Horizontal, Left")
        bnm.SetSize(width*UI.swdp, 55, "dp")
        bnm.SetBackColor(backColor)
            var tedit = app.CreateTextEdit("", null, null, options+", Singleline")
            tedit.SetSize( (width*this.swdp)-55, null, "dp")
            tedit.SetTextColor(UI.L?"#000000":"#ffffff")
            tedit.SetTextSize(16)
            tedit.SetHint(hint||"")
            tedit.SetPadding(25, 8, 0, 8, "dp")
            tedit.SetBackColor("#00000000")
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5")
            bnm.AddChild(tedit)
            tedit.SetOnFocus(function(state) {
                var data = this.data
                if(state) data.setIconColor(data.color)
                else if(!state && this.GetText()=="" ) data.setIconColor(UI.colors.grey.grey)
            });
            tedit.SetOnChange(function() {
                if(this.GetText()&&this.GetText()!=="") this.data.setIconText("close")
                if(UI._controls[this.data.id].setOnChange) UI._controls[this.data.id].setOnChange(this.GetText())
            });
        
            var icon = app.CreateButton("search", null, null, "Custom")
            icon.SetSize(55, 55, "dp")
            icon.SetMargins(0, 2.5, 0, 0, "dp")
            icon.SetFontFile(this.fonts.icon)
            icon.SetStyle(backColor, backColor, 50, 0, 0, 0)
            icon.SetTextSize(22)
            icon.SetTextColor(UI.colors.grey.grey)
            bnm.AddChild(icon)
            icon.SetOnTouch(function() {
                if(this.GetText().length>0) {
                    this.data.clearText("")
                    this.SetText("search")
                }
            });
            icon.data.clearText = tedit.SetText
            
            tedit.data = {
                color: color,
                setIconColor: icon.SetTextColor,
                setIconText: icon.SetText,
                id: lay.id
            }
        lay.AddChild(bnm)
    lay.ClearFocus = tedit.ClearFocus
    lay.ClearHistory = tedit.ClearHistory
    lay.Focus = tedit.Focus
    lay.GetCursorLine = tedit.GetCursorLine
    lay.GetCursorPos = tedit.GetCursorPos
    lay.GetSelectedText = tedit.GetSelectedText
    lay.GetSelectionEnd = tedit.GetSelectionEnd
    lay.GetSelectionStart = tedit.GetSelectionStart
    lay.GetText = tedit.GetText
    lay.GetType = tedit.GetType
    lay.InsertText = tedit.InsertText
    lay.Redo = tedit.Redo
    lay.ReplaceText = tedit.ReplaceText
    lay.SetCursorPos = tedit.SetCursorPos
    lay.SetOnEnter = tedit.SetOnEnter
    //lay.SetOnFocus = tedit.SetOnFocus
    lay.SetOnChange = function(cb) {
        //Returns the text only
        UI._controls[this.id].setOnChange = cb
    }
    lay.SetText = tedit.SetText
    lay.Undo = tedit.Undo
    return lay
}
UI.CreateTEFilledIconLeft = function(width, options, icon, hint, boolLabel, color) {
    color = color || UI.theme.primary;
    boolLabel = boolLabel || false;
    var lay = app.CreateLayout("Linear", "Left, Horizontal");
        var icon = app.CreateText(icon.trim(), null, null, "Left");
        icon.SetSize(30, null, "dp");
        icon.SetFontFile(UI.fonts.icon);
        icon.SetTextColor(UI.L?"#bdbdbd":"#757575");
        icon.SetTextSize(24);
        icon.SetMargins(0, 6, 0, 0, "dp");
        lay.AddChild(icon);
        
        var layout = app.CreateLayout("Linear", "Left");
        layout.SetSize(width*this.swdp-30, null, "dp");
            var label = app.CreateText(hint);
            label.SetTextColor(color);
            label.SetTextSize(12);
            label.Hide();
            if(boolLabel == true) {
                layout.AddChild(label);
                icon.SetMargins(0, 25, 10, 0, "dp");
            }
                        
            var tedit = app.CreateTextEdit("", null, null, options+", Singleline");
            tedit.SetBackColor("#00ffffff");
            tedit.SetTextColor(UI.L?"#000000":"#ffffff");
            tedit.SetTextSize(16);
            tedit.SetSize(width*this.swdp-50, null, "dp");
            tedit.SetHint(hint);
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5");
            tedit.SetPadding(2.5, 7, 2.5, 12, "dp");
            layout.AddChild(tedit);
            tedit.SetOnFocus(function(state) {
                var data = this.data;
                if(state) {
                    data.setBorderColor(data.color);
                    data.setIconColor(data.color);
                    if(data.boolLabel != false) {
                        data.label.Show();
                        this.SetHint("");
                    }
                } else if(!state && this.GetText()=="" ){
                    data.label ? data.label.Hide() : null;
                    this.SetHint(data.hint);
                    data.setBorderColor(UI.L?"#bdbdbd":"#757575");
                    data.setIconColor(UI.L?"#bdbdbd":"#757575");
                }
            });
                        
            var bottomBorder = app.CreateImage(null, null, null, "fix", 1, 1);
            bottomBorder.SetSize(width*this.sw, 4, "px" );
            bottomBorder.SetColor(UI.L?"#bdbdbd":"#757575");
            layout.AddChild(bottomBorder);
            
            tedit.data = {
                label: label,
                color: color,
                hint: hint,
                setBorderColor: bottomBorder.SetColor,
                setIconColor: icon.SetTextColor,
                boolLabel: boolLabel,
            };
        lay.AddChild(layout);
    lay.ClearFocus = tedit.ClearFocus;
    lay.ClearHistory = tedit.ClearHistory;
    lay.Focus = tedit.Focus;
    lay.GetCursorLine = tedit.GetCursorLine;
    lay.GetCursorPos = tedit.GetCursorPos;
    lay.GetSelectedText = tedit.GetSelectedText;
    lay.GetSelectionEnd = tedit.GetSelectionEnd;
    lay.GetSelectionStart = tedit.GetSelectionStart;
    lay.GetText = tedit.GetText;
    lay.GetType = tedit.GetType;
    lay.InsertText = tedit.InsertText;
    lay.Redo = tedit.Redo;
    lay.ReplaceText = tedit.ReplaceText;
    lay.SetCursorPos = tedit.SetCursorPos;
    lay.SetOnChange = tedit.SetOnChange;
    lay.SetOnEnter = tedit.SetOnEnter;
    //lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText;
    lay.Undo = tedit.Undo;
    return lay;
}
UI.CreateTEFilledIconRight = function(width, options, icon, hint, boolLabel, color) {
    color = color || UI.theme.primary;
    boolLabel = boolLabel || false;
    
    var lay = app.CreateLayout("Linear", "VCenter");
        var layout = app.CreateLayout("Linear", "Left, Horizontal, VCenter");
        layout.SetSize(width*this.swdp, null, "dp");
            var cxz = app.CreateLayout("Linear", "Left");
            cxz.SetSize(width*this.swdp-52.5, null, "dp");
                var label = app.CreateText(hint);
                label.SetTextColor(color);
                label.SetTextSize(12);
                label.Hide();
                boolLabel?cxz.AddChild(label):cxz.SetMargins(0, 8, 0, 0, "dp");
                        
                var tedit = app.CreateTextEdit("", null, null, options+", Singleline");
                tedit.SetBackColor("#00ffffff");
                tedit.SetTextColor(UI.L?"#000000":"#ffffff");
                tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5");
                tedit.SetTextSize(16);
                tedit.SetSize(width*this.swdp-50, null, "dp");
                tedit.SetHint(hint);
                tedit.SetPadding(2.5, 7, 2.5, 12, "dp");
                cxz.AddChild(tedit);
                tedit.SetOnFocus(function(state) {
                    var data = this.data;
                    if(state == true) {
                        data.setBorderColor(data.color);
                        data.setIconColor(data.color);
                        if(data.boolLabel != false) {
                            data.label.Show();
                            this.SetHint("");
                        }
                    } else if(!state && this.GetText()=="" ) {
                        data.boolLabel ? data.label.Hide() : null;
                        this.SetHint(data.hint);
                        data.setBorderColor(UI.L?"#bdbdbd":"#757575");
                        data.setIconColor(UI.L?"#bdbdbd":"#757575");
                    }
                });
            layout.AddChild(cxz);
                        
            var icon = app.CreateButton(icon, null, null, "Custom");
            icon.SetFontFile(this.fonts.icon);
            icon.SetTextColor(UI.L?"#bdbdbd":"#757575");
            icon.SetTextSize(22);
            icon.SetStyle(UI.theme.backColor, UI.theme.backColor, 50, 0, 0, 0);
            icon.SetSize(55, 55, "dp");
            icon.SetMargins(0, 12, 0, 0, "dp");
            layout.AddChild(icon);
        lay.AddChild(layout);
        
        var bottomBorder = app.CreateImage(null, null, null, "fix", 1, 1);
        bottomBorder.SetSize(width*this.swdp, 2, "dp" );
        bottomBorder.SetColor(UI.L?"#bdbdbd":"#757575");
        lay.AddChild(bottomBorder);
        tedit.data = {
            label: label,
            color: color,
            hint: hint,
            setBorderColor: bottomBorder.SetColor,
            setIconColor: icon.SetTextColor,
            boolLabel: boolLabel,
        };
    lay.ClearFocus = tedit.ClearFocus;
    lay.ClearHistory = tedit.ClearHistory;
    lay.Focus = tedit.Focus;
    lay.GetCursorLine = tedit.GetCursorLine;
    lay.GetCursorPos = tedit.GetCursorPos;
    lay.GetSelectedText = tedit.GetSelectedText;
    lay.GetSelectionEnd = tedit.GetSelectionEnd;
    lay.GetSelectionStart = tedit.GetSelectionStart;
    lay.GetText = tedit.GetText;
    lay.GetType = tedit.GetType;
    lay.InsertText = tedit.InsertText;
    lay.Redo = tedit.Redo;
    lay.ReplaceText = tedit.ReplaceText;
    lay.SetCursorPos = tedit.SetCursorPos;
    lay.SetOnChange = tedit.SetOnChange;
    lay.SetOnEnter = tedit.SetOnEnter;
    //lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText;
    lay.Undo = tedit.Undo;
    return lay;
}
UI.CreateTEOutlineIconLeft = function(width, options, icon, hint, boolLabel, color, backColor) {
    color = color || UI.theme.primary;
    backColor = backColor || UI.theme.backColor;
    boolLabel = boolLabel || false;
    options = options ? options.toLowerCase() : "Left, Singleline";
    var radius = 4;
    options.search("round") > -1 ? radius = 50 : radius = 4;
    var lay = app.CreateLayout("Absolute");
    lay.SetSize(width, null);
        var bg = app.CreateButton("", null, null, "Custom");
        bg.SetSize( width*this.swdp, 65, "dp" );
        bg.SetStyle("#00000000", "#00000000", radius, UI.L?"#bdbdbd":"#757575", 2, 0);
        bg.SetPosition(0, this.Fr(6));
        lay.AddChild(bg);
        
        var label = app.CreateText(hint);
        label.SetFontFile(this.fonts.regular);
        label.SetTextColor(color);
        label.SetTextSize(12);
        label.SetPadding(4, 0, 4, 0, "dp");
        label.SetBackColor(backColor);
        label.SetPosition(0.048, 0);
        label.Hide();
        if(boolLabel != false) {
            options.search("round") > -1 ? label.SetPosition(0.075, 0) : null;
            lay.AddChild(label);
        }
        
        var bnm = app.CreateLayout("Linear", "VCenter, Horizontal, Left");
        bnm.SetSize(width*this.swdp, 65, "dp");
        bnm.SetPosition( 0, this.Fr(3));
            var icon = app.CreateText(icon);
            icon.SetFontFile(this.fonts.icon);
            icon.SetTextColor(UI.L?"#bdbdbd":"#757575");
            icon.SetTextSize(22);
            icon.SetMargins(20, 0, 12, 0, "dp");
            bnm.AddChild(icon);
            
            var tedit = app.CreateTextEdit("", null, null, options+", Singleline");
            tedit.SetSize( (width*this.swdp)-60, null, "dp");
            tedit.SetTextColor(UI.L?"#000000":"#ffffff");
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5");
            tedit.SetTextSize(16);
            tedit.SetPadding(0, 0, 0, 0, "dp");
            tedit.SetBackColor(this.colors.transparent);
            tedit.SetHint(hint);
            bnm.AddChild(tedit);
            tedit.SetOnFocus(function(state) {
                var data = this.data;
                if(state == true) {
                    data.setStyle("#00000000", "#00000000", data.radius, data.color, 2, 0);
                    data.setIconColor(data.color);
                    if(data.boolLabel) {
                        data.label.Show();
                        this.SetHint("");
                    }
                } else if(!state && this.GetText()=="" ) {
                    data.boolLabel ? data.label.Hide() : null;
                    this.SetHint(data.hint);
                    data.setIconColor(UI.colors.grey.grey);
                    data.setStyle("#00000000", "#00000000", data.radius, UI.L?"#bdbdbd":"#757575", 2, 0);
                }
            });

        lay.AddChild(bnm);
        tedit.data = {
            label: label,
            color: color,
            hint: hint,
            setStyle: bg.SetStyle,
            setIconColor: icon.SetTextColor,
            boolLabel: boolLabel,
            radius: radius
        };
    lay.ClearFocus = tedit.ClearFocus;
    lay.ClearHistory = tedit.ClearHistory;
    lay.Focus = tedit.Focus;
    lay.GetCursorLine = tedit.GetCursorLine;
    lay.GetCursorPos = tedit.GetCursorPos;
    lay.GetSelectedText = tedit.GetSelectedText;
    lay.GetSelectionEnd = tedit.GetSelectionEnd;
    lay.GetSelectionStart = tedit.GetSelectionStart;
    lay.GetText = tedit.GetText;
    lay.GetType = tedit.GetType;
    lay.InsertText = tedit.InsertText;
    lay.Redo = tedit.Redo;
    lay.ReplaceText = tedit.ReplaceText;
    lay.SetCursorPos = tedit.SetCursorPos;
    lay.SetOnChange = tedit.SetOnChange;
    lay.SetOnEnter = tedit.SetOnEnter;
    //lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText;
    lay.Undo = tedit.Undo;
    return lay;
}
UI.CreateTEOutlineIconRight = function(width, options, icon, hint, boolLabel, color, backColor) {
    color = color || UI.theme.primary;
    backColor = backColor || UI.theme.backColor;
    boolLabel = boolLabel || false;
    options?options=options.toLowerCase():options="Left,Singleline";
    var radius = 4;
    options.search("round") > -1 ? radius = 50 : radius = 4;
    var lay = app.CreateLayout("Absolute");
    lay.SetSize(width, null);
        var bg = app.CreateButton("", null, null, "Custom");
        bg.SetSize( width*this.swdp, 65, "dp" );
        bg.SetStyle("#00000000", "#00000000", radius, UI.L?"#bdbdbd":"#757575", 2, 0);
        bg.SetPosition(0, this.Fr(6));
        lay.AddChild(bg);
        
        var label = app.CreateText(hint);
        label.SetFontFile(this.fonts.regular);
        label.SetTextColor(color);
        label.SetTextSize(12);
        label.SetPadding(4, 0, 4, 0, "dp");
        label.SetBackColor(backColor);
        label.SetPosition(0.048, 0);
        label.Hide();
        if(boolLabel != false) {
            options.search("round") > -1 ? label.SetPosition(0.075, 0) : null;
            lay.AddChild(label);
        }
        
        var bnm = app.CreateLayout("Linear", "VCenter, Horizontal, Left");
        bnm.SetSize(width*this.swdp, 65, "dp");
        bnm.SetPosition( 0, 0.008);
            var tedit = app.CreateTextEdit("", null, null, options+", Singleline");
            tedit.SetSize( (width*this.swdp)-60, null, "dp");
            tedit.SetTextColor(UI.L?"#000000":"#ffffff");
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5");
            tedit.SetTextSize(16);
            options.search("round") > -1 ? tedit.SetPadding(30, -4, 18, 0, "dp"):tedit.SetPadding(20, -4, 18, 0, "dp");
            tedit.SetBackColor(this.colors.transparent);
            tedit.SetHint(hint);
            bnm.AddChild(tedit);
            tedit.SetOnFocus(function(state) {
                var data = this.data;
                if(state) {
                    data.setStyle("#00000000", "#00000000", data.radius, data.color, 2, 0);
                    data.setIconColor(data.color);
                    if(data.boolLabel != false) {
                        data.label.Show();
                        this.SetHint("");
                    }
                } else if(!state && this.GetText()=="" ) {
                    data.boolLabel ? data.label.Hide() : null;
                    this.SetHint(data.hint);
                    data.setIconColor(UI.colors.grey.grey);
                    data.setStyle("#00000000", "#00000000", data.radius, UI.L?"#bdbdbd":"#757575", 2, 0);
                }
            });
            
            var icon = app.CreateButton(icon, null, null, "Custom");
            icon.SetFontFile(this.fonts.icon);
            icon.SetTextColor(UI.L?"#bdbdbd":"#757575");
            icon.SetTextSize(22);
            icon.SetStyle(backColor, backColor, 50, 0, 0, 0);
            icon.SetSize(55, 55, "dp");
            icon.SetMargins(0, 2, 0, 0, "dp");
            bnm.AddChild(icon);
        lay.AddChild(bnm);
        tedit.data = {
            label: label,
            color: color,
            hint: hint,
            setStyle: bg.SetStyle,
            setIconColor: icon.SetTextColor,
            boolLabel: boolLabel,
            radius: radius
        };
    lay.ClearFocus = tedit.ClearFocus;
    lay.ClearHistory = tedit.ClearHistory;
    lay.Focus = tedit.Focus;
    lay.GetCursorLine = tedit.GetCursorLine;
    lay.GetCursorPos = tedit.GetCursorPos;
    lay.GetSelectedText = tedit.GetSelectedText;
    lay.GetSelectionEnd = tedit.GetSelectionEnd;
    lay.GetSelectionStart = tedit.GetSelectionStart;
    lay.GetText = tedit.GetText;
    lay.GetType = tedit.GetType;
    lay.InsertText = tedit.InsertText;
    lay.Redo = tedit.Redo;
    lay.ReplaceText = tedit.ReplaceText;
    lay.SetCursorPos = tedit.SetCursorPos;
    lay.SetOnChange = tedit.SetOnChange;
    lay.SetOnEnter = tedit.SetOnEnter;
    //lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText;
    lay.Undo = tedit.Undo;
    return lay;
}
UI.CreateTESearchUnique = function(width, hint, icon, iconColor) {
    width = width*this.swdp || this.swdp;
    iconColor = iconColor || UI.theme.primary;
    var lay = app.CreateLayout("Absolute");
    var backColor = UI.L?this.colors.grey.lighten3:"#424242";
    lay.SetSize(width, null, "dp");
        var bgs = app.CreateButton("", null, null, "Custom");
        bgs.SetSize(width, 60, "dp");
        bgs.SetStyle(backColor, backColor, 60, 0, 0, 0);
        lay.AddChild(bgs);
        
        var asdBox = app.CreateLayout("Linear", "Horizontal, Left, VCenter");
        asdBox.SetSize(width, 60, "dp");
        asdBox.SetPadding(6, 0, 6, 0, "dp");
            var _icon = app.CreateText(icon||"search");
            _icon.SetTextSize(22);
            _icon.SetFontFile(this.fonts.icon);
            _icon.SetTextColor(UI.L?"#bdbdbd":"#757575");
            _icon.SetMargins(15, -3, 15, 0, "dp");
            asdBox.AddChild(_icon);
            
            var tedit = app.CreateTextEdit("", null, null, "Left, SingleLine");
            tedit.SetSize( width-42, null, "dp");
            tedit.SetTextColor(UI.L?"#000000":"#ffffff");
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5");
            tedit.SetTextSize(16);
            tedit.SetMargins(0, -3, 0, 0, "dp");
            tedit.SetPadding(0, 3, 20, 3, "dp");
            tedit.SetBackColor("#00000000");
            tedit.SetHint(hint || "");
            tedit.SetOnFocus(function(state) {
                var data = this.data;
                if(state) {
                    data.setIconColor(data.color);
                } else if(!state && this.GetText()=="" ) {
                    data.setIconColor(UI.L?"#bdbdbd":"#757575");
                }
            });
            asdBox.AddChild(tedit);
        lay.AddChild(asdBox);
        tedit.data = {
            color: iconColor,
            setIconColor: _icon.SetTextColor
        }
    lay.ClearFocus = tedit.ClearFocus;
    lay.ClearHistory = tedit.ClearHistory;
    lay.Focus = tedit.Focus;
    lay.GetCursorLine = tedit.GetCursorLine;
    lay.GetCursorPos = tedit.GetCursorPos;
    lay.GetSelectedText = tedit.GetSelectedText;
    lay.GetSelectionEnd = tedit.GetSelectionEnd;
    lay.GetSelectionStart = tedit.GetSelectionStart;
    lay.GetText = tedit.GetText;
    lay.GetType = tedit.GetType;
    lay.InsertText = tedit.InsertText;
    lay.Redo = tedit.Redo;
    lay.ReplaceText = tedit.ReplaceText;
    lay.SetCursorPos = tedit.SetCursorPos;
    lay.SetOnChange = tedit.SetOnChange;
    lay.SetOnEnter = tedit.SetOnEnter;
    //lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText;
    lay.Undo = tedit.Undo;
    return lay;
}
// iconPosition : 'left' or 'right'
// option : 'small' or 'normal' or 'border'
UI.CreateTESearchElegant = function(width, hint, icon, iconPosition, color, option) {
    width = width * UI.swdp || UI.swdp;
    color = color||UI.theme.primary;
    iconPosition = iconPosition ? iconPosition.toLowerCase() : "right";
    option = option ? option.toLowerCase() : "normal";
    var size = option.search("small") > -1 ? 50 : 60;
    var backColor = UI.L?"#ffffff":UI.theme.cardColor
    var borderColor = UI.L?UI.colors.grey.lighten2:"#9E9E9E";
    
    var lay = app.CreateLayout("Absolute");
    lay.SetSize(width, null, 'dp');
        var bgs = app.CreateButton("", null, null, "Custom");
        bgs.SetSize(width, size, "dp");
        lay.AddChild(bgs);
        if(option.search("border") > -1) bgs.SetStyle(backColor, backColor, 60, borderColor, 1, 0)
        else bgs.SetStyle(backColor, backColor, 60, 0, 0, 0);

        var asdBox = app.CreateLayout("Linear", "Horizontal, Left, VCenter");
        asdBox.SetSize(width, size, "dp");
        asdBox.SetPadding(4, 0, 4, 0, "dp");
            var icon = app.CreateButton(icon || "search", null, null, "Custom");
            icon.SetSize(size-5, size-5, "dp");
            icon.SetStyle(color, color, 50, 0, 0, 0);
            icon.SetTextSize( option.search("small") > -1 ? 16 : 22 );
            icon.SetFontFile(UI.fonts.icon);
            icon.SetTextColor(UI.colors.white);
            
            var tedit = app.CreateTextEdit("", null, null, "Left, SingleLine");
            tedit.SetSize( width-(size+2), null, "dp");
            tedit.SetTextColor(UI.L?"#000000":"#ffffff");
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5");
            tedit.SetTextSize(16);
            tedit.SetMargins(0, -3, 0, 0, "dp");
            tedit.SetBackColor("#00000000");
            tedit.SetHint(hint);                
            if(iconPosition == "right") {
                tedit.SetPadding(20, 3, 20, 3, "dp");
                asdBox.AddChild(tedit);
                asdBox.AddChild(icon);
            } else {
                tedit.SetPadding(8, 3, 20, 3, "dp");
                asdBox.AddChild(icon);
                asdBox.AddChild(tedit);
            }
        lay.AddChild(asdBox);
    lay.ClearFocus = tedit.ClearFocus;
    lay.ClearHistory = tedit.ClearHistory;
    lay.Focus = tedit.Focus;
    lay.GetCursorLine = tedit.GetCursorLine;
    lay.GetCursorPos = tedit.GetCursorPos;
    lay.GetSelectedText = tedit.GetSelectedText;
    lay.GetSelectionEnd = tedit.GetSelectionEnd;
    lay.GetSelectionStart = tedit.GetSelectionStart;
    lay.GetText = tedit.GetText;
    lay.GetType = tedit.GetType;
    lay.InsertText = tedit.InsertText;
    lay.Redo = tedit.Redo;
    lay.ReplaceText = tedit.ReplaceText;
    lay.SetCursorPos = tedit.SetCursorPos;
    lay.SetOnChange = tedit.SetOnChange;
    lay.SetOnEnter = tedit.SetOnEnter;
    lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText;
    lay.SetIconOnTouch = icon.SetOnTouch;
    lay.Undo = tedit.Undo;
    return lay;
}
// Textarea
UI.CreateTextAreaFilled = function(width, height, hint, boolLabel, color) {
    color = color || UI.theme.primary;
    boolLabel = boolLabel || false;
    var lay = app.CreateLayout("Linear", "Vertical, Left");
    lay.SetBackColor("#00000000");
        var label = app.CreateText(hint);
        label.SetTextColor(color);
        label.SetTextSize(12);
        label.Hide();
        if( boolLabel ) lay.AddChild(label);
    
        var tedit = app.CreateTextEdit("", width, height, "Left, Multiline");
        tedit.SetBackColor("#00ffffff");
        tedit.SetTextColor(UI.L?"#000000":"#ffffff");
        tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5");
        tedit.SetTextSize(16);
        tedit.SetHint(hint || "Enter text");
        tedit.SetPadding(2.5, 7.5, 2.5, 10, "dp");
        lay.AddChild(tedit);
        tedit.SetOnFocus(function(state) {
            var data = this.data;
            if(state) {
                data.setBorderColor(data.color);
                if(data.boolLabel != false) {
                    data.label.Show();
                    this.SetHint("");
                }
            } else if(!state && this.GetText()=="" ){
                data.label ? data.label.Hide() : null;
                this.SetHint(data.hint);
                data.setBorderColor(UI.L?"#bdbdbd":"#757575");
            }
        });
            
        var bottomBorder = app.CreateImage(null, null, null, "fix", 1, 1);
        bottomBorder.SetSize(width*this.sw, 4, "px" );
        bottomBorder.SetColor(UI.L?"#bdbdbd":"#757575");
        lay.AddChild(bottomBorder);
        tedit.data = {
            label: label,
            color: color,
            hint: hint,
            setBorderColor: bottomBorder.SetColor,
            boolLabel: boolLabel
        };
    lay.ClearFocus = tedit.ClearFocus;
    lay.ClearHistory = tedit.ClearHistory;
    lay.Focus = tedit.Focus;
    lay.GetCursorLine = tedit.GetCursorLine;
    lay.GetCursorPos = tedit.GetCursorPos;
    lay.GetSelectedText = tedit.GetSelectedText;
    lay.GetSelectionEnd = tedit.GetSelectionEnd;
    lay.GetSelectionStart = tedit.GetSelectionStart;
    lay.GetText = tedit.GetText;
    lay.GetType = tedit.GetType;
    lay.InsertText = tedit.InsertText;
    lay.Redo = tedit.Redo;
    lay.ReplaceText = tedit.ReplaceText;
    lay.SetCursorPos = tedit.SetCursorPos;
    lay.SetOnChange = tedit.SetOnChange;
    lay.SetOnEnter = tedit.SetOnEnter;
    //lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText;
    lay.Undo = tedit.Undo;
    return lay;
}
UI.CreateTextAreaFilledA = function(width, height, hint, boolLabel, color) {
    color = color || UI.theme.primary;
    boolLabel = boolLabel || false;
    var lay = app.CreateLayout("Linear", "Vertical, Left");
        var label = app.CreateText(hint||"");
        label.SetTextColor(color);
        label.SetTextSize(12);
        
        var tedit = app.CreateTextEdit("", width, height, "Left, Multiline");
        tedit.SetBackColor("#00ffffff");
        tedit.SetTextColor(UI.L?"#000000":"#ffffff");
        tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5");
        tedit.SetTextSize(16);
        tedit.SetPadding(2.5, 7.5, 2.5, 10, "dp");
        
        boolLabel == true ? lay.AddChild(label) : tedit.SetHint(hint || "Enter text");
        lay.AddChild(tedit); 

        var bottomBorder = app.CreateImage(null, null, null, "fix", 1, 1);
        bottomBorder.SetSize(width*this.sw, 4, "px" );
        bottomBorder.SetColor(color);
        lay.AddChild(bottomBorder);
    lay.ClearFocus = tedit.ClearFocus;
    lay.ClearHistory = tedit.ClearHistory;
    lay.Focus = tedit.Focus;
    lay.GetCursorLine = tedit.GetCursorLine;
    lay.GetCursorPos = tedit.GetCursorPos;
    lay.GetSelectedText = tedit.GetSelectedText;
    lay.GetSelectionEnd = tedit.GetSelectionEnd;
    lay.GetSelectionStart = tedit.GetSelectionStart;
    lay.GetText = tedit.GetText;
    lay.GetType = tedit.GetType;
    lay.InsertText = tedit.InsertText;
    lay.Redo = tedit.Redo;
    lay.ReplaceText = tedit.ReplaceText;
    lay.SetCursorPos = tedit.SetCursorPos;
    lay.SetOnChange = tedit.SetOnChange;
    lay.SetOnEnter = tedit.SetOnEnter;
    lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText;
    lay.Undo = tedit.Undo;
    return lay;
}
UI.CreateTextAreaOutline = function(width, height, hint, boolLabel, color, backColor) {
    color = color || UI.theme.primary;
    backColor = backColor || UI.theme.backColor;
    boolLabel = boolLabel || false;
    var lay = app.CreateLayout("Absolute");
    lay.SetSize(width, height);
        var bg = app.CreateButton("", null, null, "Custom");
        bg.SetSize( width, height-0.001);
        bg.SetStyle("#00000000", "#00000000", 4, UI.L?"#bdbdbd":"#757575", 2, 0);
        bg.SetPosition(0, this.DpToPx(8)/this.sh);
        lay.AddChild(bg);
        
        var label = app.CreateText(hint);
        label.SetFontFile(this.fonts.regular);
        label.SetTextColor(color);
        label.SetTextSize(12);
        label.SetPadding(4, 0, 4, 0, "dp");
        label.SetBackColor(backColor);
        label.SetPosition(0.048, 0);
        label.Hide();
        if(boolLabel) {
            lay.AddChild(label);
        }

        var bnm = app.CreateLayout("Linear", "VCenter, Horizontal, Left");
        bnm.SetSize(width, height);
        bnm.SetPosition( 0, 0.0075);
            var tedit = app.CreateTextEdit("", width, height, "Left, Multiline");
            tedit.SetTextColor(UI.L?"#000000":"#ffffff");
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5");
            tedit.SetTextSize(16);
            tedit.SetPadding(20, 15, 18, 12, "dp");
            tedit.SetBackColor("#00000000");
            tedit.SetHint(hint);
            bnm.AddChild(tedit);
            tedit.SetOnFocus(function(state) {
                var data = this.data;
                if(state) {
                    data.setStyle("#00000000", "#00000000", 4, data.color, 2, 0);
                    if(data.boolLabel != false) {
                        data.label.Show();
                        this.SetHint("");
                    }
                } else if( !state && this.GetText()=="" ) {
                    data.label ? data.label.Hide() : null;
                    this.SetHint(data.hint);
                    data.setStyle("#00000000", "#00000000", 4, UI.L?"#bdbdbd":"#757575", 2, 0);
                }
            });
        lay.AddChild(bnm);
        tedit.data = {
            label: label,
            color: color,
            hint: hint,
            setStyle: bg.SetStyle,
            boolLabel: boolLabel
        };
    lay.ClearFocus = tedit.ClearFocus;
    lay.ClearHistory = tedit.ClearHistory;
    lay.Focus = tedit.Focus;
    lay.GetCursorLine = tedit.GetCursorLine;
    lay.GetCursorPos = tedit.GetCursorPos;
    lay.GetSelectedText = tedit.GetSelectedText;
    lay.GetSelectionEnd = tedit.GetSelectionEnd;
    lay.GetSelectionStart = tedit.GetSelectionStart;
    lay.GetText = tedit.GetText;
    lay.GetType = tedit.GetType;
    lay.InsertText = tedit.InsertText;
    lay.Redo = tedit.Redo;
    lay.ReplaceText = tedit.ReplaceText;
    lay.SetCursorPos = tedit.SetCursorPos;
    lay.SetOnChange = tedit.SetOnChange;
    lay.SetOnEnter = tedit.SetOnEnter;
    //lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText;
    lay.Undo = tedit.Undo;
    return lay;
}
UI.CreateTextAreaOutlineA = function(width, height, hint, boolLabel, color, backColor) {
    color = color || UI.theme.primary;
    backColor = backColor || UI.theme.backColor;
    boolLabel = boolLabel || false;
    var lay = app.CreateLayout("Absolute");
    lay.SetSize(width, height);
        var bg = app.CreateButton("", null, null, "Custom");
        bg.SetSize( width, height-0.001);
        bg.SetStyle("#00000000", "#00000000", 4, color, 2, 0);
        bg.SetPosition(0, this.Fr(6));
        lay.AddChild(bg);
        
        var lbl = app.CreateText(hint);
        lbl.SetFontFile(this.fonts.regular);
        lbl.SetTextColor(color);
        lbl.SetTextSize(12);
        lbl.SetPadding(4, 0, 4, 0, "dp");
        lbl.SetBackColor(backColor);
        lbl.SetPosition(0.048, 0);
        if(boolLabel != false) {
            lay.AddChild(lbl);
        }

        var bnm = app.CreateLayout("Linear", "VCenter, Horizontal, Left");
        bnm.SetPosition( 0, this.Fr(8));
            var tedit = app.CreateTextEdit("", width, height, "Left, Multiline");
            tedit.SetTextColor(UI.L?"#000000":"#ffffff");
            tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5");
            tedit.SetTextSize(16);
            tedit.SetPadding(20, 12, 18, 12, "dp");
            tedit.SetBackColor("#00000000");
            bnm.AddChild(tedit);
            boolLabel != false ? tedit.SetHint("") : tedit.SetHint(hint);
        lay.AddChild(bnm);
    lay.ClearFocus = tedit.ClearFocus;
    lay.ClearHistory = tedit.ClearHistory;
    lay.Focus = tedit.Focus;
    lay.GetCursorLine = tedit.GetCursorLine;
    lay.GetCursorPos = tedit.GetCursorPos;
    lay.GetSelectedText = tedit.GetSelectedText;
    lay.GetSelectionEnd = tedit.GetSelectionEnd;
    lay.GetSelectionStart = tedit.GetSelectionStart;
    lay.GetText = tedit.GetText;
    lay.GetType = tedit.GetType;
    lay.InsertText = tedit.InsertText;
    lay.Redo = tedit.Redo;
    lay.ReplaceText = tedit.ReplaceText;
    lay.SetCursorPos = tedit.SetCursorPos;
    lay.SetOnChange = tedit.SetOnChange;
    lay.SetOnEnter = tedit.SetOnEnter;
    lay.SetOnFocus = tedit.SetOnFocus;
    lay.SetText = tedit.SetText;
    lay.Undo = tedit.Undo;
    return lay;
}
// Cards
/**
 * @params [Object] options MUI card options object
 * title        String          Title of the card
 * body         String          Body text of the card
 * image        String-path     Path to the image
 * buttonText   String          "Cancel,See MOre"
 * color        String          Hexadecimal color optional
 * width        Number          Fraction of the screen width
 * divider1     Boolean         
 * divider2     Boolean
 * avatar       String-path
 * buttonType   String
 * avatarOnTop  Boolean
 * name         String
 */
UI.CreateCard = function(options) {
    var o = options
    
    var color = o.color || UI.theme.primary
    var backColor = UI.L?"#ffffff":"#212121"
    var width = o.width || 0.96
    var name = o.name||o.title
    o.buttonType = o.buttonType?o.buttonType.toLowerCase():"flat"
    o.avatarOnTop = (o.avatarOnTop && o.image) ? true : false
    
    var lay = app.CreateLayout("Card")
    lay.SetElevation(2)
    lay.SetCornerRadius(4)
    lay.SetBackColor(backColor)
    
    UI._controls[lay.id] = {onBtnTouch:null, onImgTouch: null, onAvtTouch:null, onTitleTouch:null, name: name}

    lay.SetOnButtonTouch = function(cb) {
        UI._controls[this.id].onBtnTouch = cb
    }
    lay.SetOnTouch = lay.SetOnButtonTouch
    lay.SetOnImageTouch = function(cb) {
        UI._controls[this.id].onImgTouch = cb
    }
    lay.SetOnTouchImage = lay.SetOnImageTouch
    lay.SetOnAvatarTouch = function(cb) {
        UI._controls[this.id].onAvtTouch = cb
    }
    lay.SetOnTitleTouch = function(cb) {
        UI._controls[this.id].onTitleTouch = cb
    }
    
        var layout = app.CreateLayout("Linear")
        if(_mui_obj.isPortrait) layout.SetSize(width)
        else layout.SetSize((width*UI.swdp)/UI.shdp)
            if(o.image) {
                if(app.FileExists(o.image)) {
                    var img = app.CreateImage(o.image, width, -1);
                    img.SetMargins(0, 0, 0, 12, "dp");
                    img.data.id = lay.id
                    img.data.name = name
                    img.SetOnTouchUp( function() {
                        var cb = UI._controls[this.data.id].onImgTouch
                        if(cb) cb(this.data.name);
                    })
                    if(!o.avatar) layout.AddChild(img)
                } else console.log("Card image path does not exist")
            }
            
            var header = app.CreateLayout("Linear", "Horizontal, Left, VCenter")
            o.avatarOnTop ? header.SetPadding(12, 8, 12, 5, "dp") : header.SetPadding(18, 0, 20, 10, "dp")
            if(!o.avatar) header.SetPadding(20, 0, 12, 7, "dp")
            if(!o.image) header.SetPadding(20, 12, 20, 10, "dp")
                if(o.avatar && app.FileExists(o.avatar)) {
                    var avatar = app.CreateLayout("Card")
                    avatar.SetSize(42, 42, "dp")
                    avatar.SetElevation(3)
                    avatar.SetCornerRadius(21)
                    avatar.SetMargins(2, 2, 2, 3, "dp")
                        var a = app.CreateImage(o.avatar)
                        a.SetSize(42, 42, "dp")
                        avatar.AddChild(a)
                        a.data.id = lay.id
                        a.data.name = name
                        a.SetOnTouchUp(function() {
                            var cb = UI._controls[this.data.id].onImgTouch
                            if(cb) cb(this.data.name)
                        })
                    header.AddChild(avatar)
                } else if(!app.FileExists(o.avatar)) console.log("Card avatar path does not exist")
                
                var ttl = UI.CreateTextH5(o.title||"", width, null, "Left", null, "Medium")
                if(o.avatar) ttl.SetPadding(12, 0, 0, 0, "dp")
                else ttl.SetPadding(0, 0, 0, 0, "dp")
                header.AddChild(ttl)
                ttl.data.id = lay.id
                ttl.data.name = name
                ttl.SetOnTouchUp(function() {
                    var cb = UI._controls[this.data.id].onTitleTouch
                    if(cb) cb(this.GetText(), this.data.name)
                })
            
            if(o.avatarOnTop && o.title) {
                layout.AddChild(header)
                layout.AddChild(img)
            } else if(o.title && img){
                layout.AddChild(img)
                layout.AddChild(header)
            } else if(o.title) {
                layout.AddChild(header)
            } else if(img) layout.AddChild(img)
            
            if(o.divider1 && o.title && !o.avatarOnTop) layout.AddChild(UI.CreateDivider())
            
            var bdy = UI.CreateTextParagraph(o.body, width, null, "Left, Multiline")
            if(o.divider1 && o.avatar) bdy.SetPadding(20, 12, 20, 12, "dp")
            else bdy.SetPadding(20, 0, 20, 12, "dp")
            layout.AddChild(bdy)
            
            if(o.divider2) layout.AddChild(UI.CreateDivider())
            
            var btmlay = app.CreateLayout("Linear", "Horizontal, Right, VCenter")
            if(_mui_obj.isPortrait) btmlay.SetSize(width)
            else btmlay.SetSize((width*UI.swdp)/UI.shdp)
            if(o.divider2) btmlay.SetPadding(0, 6, 16, 0, "dp")
            else btmlay.SetPadding(0, 0, 16, 0, "dp")
                var btn;
                if(typeof(o.buttonText)=="string") o.buttonText = o.buttonText.split(",")
                for(var i=0; i<o.buttonText.length&&o.buttonText[0]; i++) {
                    if(o.buttonType === "raised") btn = UI.CreateButtonRaised(" "+o.buttonText[i].toUpperCase()+" ", null, null, color);
                    else if(o.buttonType === "round") btn = UI.CreateButtonRound(" "+o.buttonText[i].toUpperCase()+" ", null, null, color);
                    else if(o.buttonType === "roundoutline") btn = UI.CreateButtonRoundO(" "+o.buttonText[i].toUpperCase()+" ", null, null, color, backColor);
                    else if(o.buttonType === "raisedoutline") btn = UI.CreateButtonRaisedO(" "+o.buttonText[i].toUpperCase()+" ", null, null, color, backColor);
                    else if(o.buttonType === "flat") btn = UI.CreateButtonFlat(o.buttonText[i].toUpperCase(), null, null, color, backColor);
                    
                    btmlay.AddChild(btn)
                    btn.data.id = lay.id
                    btn.data.name = name
                    btn.SetOnTouch( function() {
                        var cb = UI._controls[this.data.id].onBtnTouch
                        /**
                         * Change from  cb(card-name, "button", this.GetText())
                         * to           cb(this.GetText(), n)
                         */
                        if(cb) cb(this.GetText(), this.data.name)
                    })
                }
            layout.AddChild(btmlay)
        lay.AddChild(layout)
    return lay
}
// Appbars
// controls : Comma separated material icons
UI.CreateAppBar = function(title, logoIcon, controls) {
    var color = "#ffffff"
    var backColor = UI.L?UI.theme.primary:"#212121"
    controls = controls?controls.split(","):[]
    var lay = app.CreateLayout("Card")
    lay.SetElevation(5)
    lay.SetCornerRadius(0)
    UI._controls[lay.id] = {}
    lay.SetOnMenuTouch = function(cb) {
        UI._controls[this.id].menuCallback = cb
    }
    lay.SetOnControlTouch = function(cb) {
       UI._controls[this.id].ctrlCallback = cb
    }
    lay.GetHeight = function() {
        return 55/UI.shdp
    }
    var header = app.CreateLayout( "Linear", "VCenter,Left,Horizontal")
        header.SetSize( UI.swdp, 55, "dp")
        header.SetBackColor(backColor)
        header.SetPosition(0, 0)
            var menu = null
            if(logoIcon && logoIcon!="") {
                menu = app.CreateButton( logoIcon.trim(), null, null, "Custom")
                menu.SetFontFile(UI.fonts.icon)
                menu.SetTextSize(25, "dp")
                menu.SetMargins(0, 3, 0, 0, "dp")
                menu.SetSize(55, 55, "dp")
                menu.SetTextColor(color)
                menu.SetStyle(backColor, backColor, 50, 0, 0, 0)
                header.AddChild(menu)

                menu.data.id = lay.id
                menu.SetOnTouch(function() {
                    var cb = UI._controls[this.data.id].menuCallback
                    if(cb) cb(this)
                })
            }
            
            var lw = (logoIcon && logoIcon!="")?70:15
            var appTitle = app.CreateText(title.trim()||"", null, null, "Left")
            appTitle.SetSize(UI.swdp-lw-(45*controls.length), null, "dp")
            appTitle.SetFontFile(MUI.fonts.medium)
            appTitle.SetPadding(menu?5:20, 0, 0, 0, "dp")
            appTitle.SetEllipsize("end")
            appTitle.SetTextSize(20)
            appTitle.SetTextColor(color)
            header.AddChild(appTitle)
           
            for(var i=0; i<controls.length&&controls[0]; i++) {
                ctrl = app.CreateButton( controls[i].trim(), null, null, "Custom")
                ctrl.SetFontFile( UI.fonts.icon)
                ctrl.SetTextSize(24, "dp")
                ctrl.SetMargins( 0, 2.5, 0, 0, "dp")
                ctrl.SetSize(50, 50, "dp")
                ctrl.SetTextColor(color)
                ctrl.SetStyle(backColor, backColor, 50, 0, 0, 0)
                header.AddChild(ctrl)
                ctrl.data.id=lay.id
                ctrl.data.index=i
                ctrl.SetOnTouch(function() {
                    var cb = UI._controls[this.data.id].ctrlCallback
                    if(cb) cb(this.GetText(), this.data.index)
                })
            }   
        lay.AddChild(header)
        
    lay.SetTitleText = appTitle.SetText
    lay.GetTitleText = appTitle.GetText
    lay.SetTitleTextColor = appTitle.SetTextColor
    lay.SetMenuIcon = menu?menu.SetText:null
    lay.GetMenuIcon = menu?menu.GetText:null
    lay.SetMenuIconColor = menu?menu.SetTextColor:null
    return lay
}
UI.CreateAppBarElegant = function(title, logoIcon, controls) {
    var color = UI.L?MUI.theme.primary:"#ffffff"
    var backColor = UI.L?MUI.theme.backColor:"#212121"
    controls = controls?controls.split(","):[]
    var ovrLay = UI.L?"#eeeeee":UI.colors.grey.darken3
    ovrLay = "#22000000"
    
    var lay = app.CreateLayout("Card")
    lay.SetElevation(5)
    lay.SetCornerRadius(0)
    
    UI._controls[lay.id] = {}
    
    lay.SetOnMenuTouch = function(cb) {
        UI._controls[this.id].menuCallback=cb
    }
    lay.SetOnControlTouch = function(cb) {
       UI._controls[this.id].ctrlCallback = cb
    }
    lay.GetHeight = function() {
        return 55/UI.shdp
    }
    
    var header = app.CreateLayout( "Linear", "VCenter, Left, Horizontal")
        header.SetSize( UI.swdp, 55, "dp")
        header.SetBackColor(backColor)
        header.SetPosition(0, 0)
            var menu = null
            if(logoIcon && logoIcon!=="") {
                menu = app.CreateButton( logoIcon.trim()||"menu", null, null, "Custom")
                menu.SetFontFile(UI.fonts.icon)
                menu.SetTextSize(25, "dp")
                menu.SetMargins(0, 3, 0, 0, "dp")
                menu.SetSize(55, 55, "dp")
                menu.SetTextColor(color)
                menu.SetStyle(backColor, backColor, 50, 0, 0, 0)
                header.AddChild(menu)
                menu.data.id = lay.id
                menu.SetOnTouch(function() {
                    var cb = UI._controls[this.data.id].menuCallback
                    if(cb) cb(this)
                });
            }
        
            var lw = (logoIcon && logoIcon!="")?70:15
            var appTitle = app.CreateText(title.trim()||"", null, null, "Left")
            appTitle.SetSize(UI.swdp-lw-(45*controls.length), null, "dp")
            appTitle.SetFontFile(MUI.fonts.bold)
            appTitle.SetPadding(menu?5:20, 0, 0, 0, "dp")
            appTitle.SetEllipsize("end")
            appTitle.SetTextSize(20)
            appTitle.SetTextColor(color)
            header.AddChild(appTitle)
            for(var i=0; i<controls.length&&controls[0]; i++) {
                ctrl = app.CreateButton( controls[i].trim(), null, null, "Custom")
                ctrl.SetFontFile( UI.fonts.icon)
                ctrl.SetTextSize(24, "dp")
                ctrl.SetMargins( 0, 2.5, 0, 0, "dp")
                ctrl.SetSize(50, 50, "dp")
                ctrl.SetTextColor(color)
                ctrl.SetStyle(ovrLay, ovrLay, 50, 0, 0, 0)
                header.AddChild(ctrl)
                ctrl.data.id=lay.id
                ctrl.data.index=i
                ctrl.SetOnTouch(function() {
                    var cb = UI._controls[this.data.id].ctrlCallback
                    if(cb) cb(this.GetText(), this.data.index)
                });
            }   
        lay.AddChild(header)
    
    lay.SetTitleText = appTitle.SetText
    lay.GetTitleText = appTitle.GetText
    lay.SetTitleTextColor = appTitle.SetTextColor
    lay.SetMenuIcon = menu?menu.SetText:null
    lay.GetMenuIcon = menu?menu.GetText:null
    lay.SetMenuIconColor = menu?menu.SetTextColor:null
    return lay
}
//options : round or rectangle
UI.CreateAppBarModern = function(hint, controlIcon, options, color) {
    var radius = 5
    var shadow = 5
    var color = color || UI.theme.primary
    var backColor = UI.theme.backColor
    if(options) options = options.toLowerCase()
    if(options && options.search("round")>-1) radius = 27.5

    var lay = app.CreateLayout("Card")
    lay.SetElevation(shadow)
    lay.SetCornerRadius(radius)
    lay.SetBackColor(backColor)
    lay.SetSize(0.95, null)
    lay.SetMargins(0.025, 0, 0.025, 0)
    
    UI._controls[lay.id] = {}

    lay.SetOnMenuTouch = function(cb) {
        UI._controls[this.id].menuCallback = cb
    }
    lay.SetOnLogoTouch = function(cb) {
        UI._controls[this.id].menuCallback = cb
    }
    lay.SetOnControlTouch = function(cb) {
        UI._controls[this.id].controlCallback = cb
    }
    lay.GetHeight = function() {
        return 55/UI.shdp
    }

    var header = app.CreateLayout( "Linear", "VCenter, Left, Horizontal")
    header.SetSize(UI.swdp-20, 55, "dp")
        var menu = app.CreateButton( "menu", null, null, "Custom")
        menu.SetMargins(0, 2.5, 0, 0, "dp")
        menu.SetSize(60, 60, "dp")
        menu.SetTextSize(25, "dp")
        menu.SetTextColor(color)
        menu.SetStyle(backColor, backColor, 50, 0, 0, 0)
        menu.SetFontFile(UI.fonts.icon)
        header.AddChild(menu)
        menu.data.id = lay.id
        menu.SetOnTouch(function() {
            var cb = UI._controls[this.data.id].menuCallback
            if(cb) cb(this)
        });

        var tedit = app.CreateTextEdit("", null, null, "SingleLine, Left")
        tedit.SetSize(UI.swdp-137.5, null, "dp")
        tedit.SetHint(hint||"")
        tedit.SetBackColor(backColor)
        tedit.SetTextColor(UI.L?"#000000":"#ffffff")
        tedit.SetCursorColor(UI.L?"#424242":"#F5F5F5")
        tedit.SetPadding(0)
        tedit.SetTextSize(18)
        header.AddChild(tedit)
        
        var ctrl = app.CreateButton(controlIcon||"", null, null, "Custom")
        ctrl.SetFontFile(UI.fonts.icon)
        ctrl.SetTextSize(24, "dp")
        ctrl.SetMargins(0, 2.5, 0, 0, "dp")
        ctrl.SetSize(60, 60, "dp")
        ctrl.SetTextColor(color)
        ctrl.SetStyle(backColor, backColor, 50, 0, 0, 0)
        header.AddChild(ctrl)
        ctrl.data.id = lay.id
        ctrl.SetOnTouch(function() {
            var cb = UI._controls[this.data.id].controlCallback
            if(cb) cb(this)
        });
    lay.AddChild(header)

    lay.ClearFocus = tedit.ClearFocus
    lay.ClearHistory = tedit.ClearHistory
    lay.Focus = tedit.Focus
    lay.GetCursorLine = tedit.GetCursorLine
    lay.GetCursorPos = tedit.GetCursorPos
    lay.GetSelectedText = tedit.GetSelectedText
    lay.GetSelectionEnd = tedit.GetSelectionEnd
    lay.GetSelectionStart = tedit.GetSelectionStart
    lay.GetText = tedit.GetText
    lay.GetType = "AppBar:Modern"
    lay.InsertText = tedit.InsertText
    lay.Redo = tedit.Redo
    lay.ReplaceText = tedit.ReplaceText
    lay.SetCursorPos = tedit.SetCursorPos
    lay.SetOnChange = tedit.SetOnChange
    lay.SetOnEnter = tedit.SetOnEnter
    lay.SetOnFocus = tedit.SetOnFocus
    lay.SetText = tedit.SetText
    lay.Undo = tedit.Undo
    return lay
}
// Dialogs & alerts
// divider : boolean
UI.CreateDialog = function(title, body, okText, cancelText, divider) {
    var lay = app.CreateDialog()
    UI._controls[lay.id] = {lay:lay, callback:null}
    lay.SetOnTouchOK = function(cb) {
        UI._controls[this.id].callback = cb
    }
    lay.SetOnTouch = lay.SetOnTouchOK
    lay.Destroy = function() {
        var self = this
        self = null
    }
    var card = app.CreateLayout("Card")
    card.SetCornerRadius(8)
        var box = app.CreateLayout("Linear", "Left")
        box.SetSize(0.85)
        box.SetBackColor(MUI.theme.frgClr)
        box.SetMargins( 0,0,0,0.01 )
            var ttl = UI.CreateTextH6(title, null, null, "", null, "Medium")
            ttl.SetEllipsize("end")
            ttl.SetPadding(24, 16, 24, 16, "dp")
            box.AddChild(ttl)
            
            if(divider) box.AddChild(UI.CreateDivider())
            
            var txt = UI.CreateTextParagraph(body, null, null, "Left, Multiline")
            txt.SetMargins(24, divider ? 12 : 0, 24, 12, "dp")
            box.AddChild(txt)
            
            var ctrlLay = app.CreateLayout("Linear", "Horizontal, Right")
            ctrlLay.SetSize(0.85)
                var cancelBtn = null
                if(cancelText && cancelText!=="") {
                    cancelBtn = UI.CreateButtonFlat(cancelText, null, null, null, MUI.theme.frgClr)
                    ctrlLay.AddChild(cancelBtn)
                    cancelBtn.data.id = lay.id
                    cancelBtn.SetOnTouch(function() {
                        UI._controls[this.data.id].lay.Hide()
                        if(UI._controls[this.data.id].callback) UI._controls[this.data.id].callback(false, this.GetText());
                    })
                }
                var okBtn = UI.CreateButtonFlat(okText || "OKAY", null, null, null, MUI.theme.frgClr)
                okBtn.SetMargins(8, 0, 16, 8, "dp")
                ctrlLay.AddChild(okBtn)
                okBtn.data.id = lay.id
                okBtn.SetOnTouch(function() {
                    UI._controls[this.data.id].lay.Hide()
                    if(UI._controls[this.data.id].callback) UI._controls[this.data.id].callback(true, this.GetText());
                });
            box.AddChild(ctrlLay)
        card.AddChild(box)
        lay.AddLayout(card)
    lay.SetTitle = ttl.SetText
    lay.SetTitleColor = ttl.SetTextColor
    lay.SetText = txt.SetText
    lay.SetHtml = txt.SetHtml
    lay.SetTextColor = txt.SetTextColor
    lay.SetTextSize = txt.SetTextSize
    return lay
}
UI.CreateBanner = function(text, okText, cancelText) {
    var backColor = UI.theme.backColor
    var lay = app.CreateLayout("Card")
    lay.SetPosition(0, -0.1)
    lay.SetPadding(0, 0.1, 0, 0)
    lay.SetElevation(8)
    lay.Hide()
    lay.HideLay = lay.Hide
    
    UI._controls[lay.id] = {lay:null, cb:null}
    
    lay.SetOnTouchOK = function(cb) {
        UI._controls[this.id].cb=cb
    }
    lay.SetOnTouch = lay.SetOnTouchOK
    lay.Show = function() {
        app.AddLayout(this)
        this.Animate("SlideFromTop")
    }
    lay.Hide = function() {
        this.Animate("SlideToTop")
        app.RemoveLayout(this)
        this.HideLay()
    }
    lay.Destroy = function() {
        app.DestroyLayout(this)
    }
    
    UI._controls[lay.id].lay = lay
    
    var box = app.CreateLayout("Linear", "FillX, Bottom, Left")
        box.SetBackColor(MUI.theme.frgClr)
        box.SetPadding(25, 15, 25, 0, "dp")
        txt = UI.CreateTextParagraph(text||"", null, null, "Left")
        box.AddChild(txt)

        var ctrlLay = app.CreateLayout("Linear", "Horizontal, Right")
        ctrlLay.SetSize(UI.swdp-50, null, "dp")
            var cancelBtn = UI.CreateButtonFlat(cancelText||"CANCEL", null, null, null, MUI.theme.frgClr)
            ctrlLay.AddChild(cancelBtn)
            cancelBtn.data.id = lay.id
            cancelBtn.SetOnTouch(function() {
                var cb = UI._controls[this.data.id].cb
                if(cb) cb(false, this.GetText())
                UI._controls[this.data.id].lay.Hide()
            });
            
            var okBtn = UI.CreateButtonFlat(okText||"", null, null, null, MUI.theme.frgClr)
            ctrlLay.AddChild(okBtn)
            okBtn.SetMargins(8, 0, 0, 0, "dp")
            okBtn.data.id = lay.id
            okBtn.SetOnTouch(function() {
                var cb = UI._controls[this.data.id].cb
                if(cb) cb(true, this.GetText())
                UI._controls[this.data.id].lay.Hide()
            })
            
        box.AddChild(ctrlLay)
    lay.AddChild(box)
    lay.SetText = txt.SetText
    lay.SetHtml = txt.SetHtml
    lay.SetTextColor = txt.SetTextColor
    lay.SetTextSize = txt.SetTextSize
    return lay
}
UI.CreateModal = function(title, bodyText, okText, cancelText, show) {
    var lay = app.CreateDialog()
    var color = this.theme.primary
    var backColor = UI.theme.frgClr
    UI._controls[lay.id] = {lay: null, cb:null, layout: null}
    show = typeof(show) == 'boolean' ? show : false
    lay.SetOnTouchOK = function(cb) {
        UI._controls[this.id].cb = cb
    }
    lay.SetOnTouch = lay.SetOnTouchOK
    lay.GetLayout = function() {
        return UI._controls[this.id].layout
    }
    lay.Destroy = function() {
        var self = this
        self = null
    }
    lay.ShowModal = lay.Show
    lay.HideModal = lay.Hide
    UI._controls[lay.id].lay = lay
    
    var mdlCard = app.CreateLayout("Card")
    mdlCard.SetCornerRadius(6)
    mdlCard.SetBackColor(backColor)
        var layout = app.CreateLayout("Linear", "left")
        layout.SetSize(0.94)
            var layTop = app.CreateLayout("Linear", "Left, VCenter")
            layTop.SetSize(0.94)
            layTop.SetPadding(25, 12.5, 25, 12.5, "dp")
            layTop.SetBackColor(color)
                var title = UI.CreateTextH6(title, null, null, "Left", "#ffffff", "Medium")
                title.SetEllipsize("end")
                layTop.AddChild(title)
                // SetTitle
                lay.SetTitle = title.SetText
            layout.AddChild(layTop)
            // SetHeaderColor
            lay.SetHeaderColor = layTop.SetBackColor
            
            var body = app.CreateLayout("Linear")
            body.SetSize(0.94)
            body.SetPadding(0, 20, 0, 8, "dp")
                if(bodyText != "" && bodyText != null) {
                    var bodyText = UI.CreateTextParagraph(bodyText||"", 0.94, null, "Multiline, Left")
                    bodyText.SetPadding(25, 0, 25, 0, "dp")
                    body.AddChild(bodyText)
                    //SetText
                    lay.SetText = bodyText.SetText
                    lay.SetTextColor = bodyText.SetTextColor
                }
            layout.AddChild(body)
            UI._controls[lay.id].layout = body

            var layBottom = app.CreateLayout("Linear", "Horizontal, Right, VCenter")
            layBottom.SetSize(0.94)
            layBottom.SetPadding(20, 0, 12, 4, "dp")
                var closeBtn = null
                if(cancelText&&cancelText!="") {
                    closeBtn = UI.CreateButtonFlat(cancelText.toUpperCase(), null, null, null, MUI.theme.frgClr)
                    closeBtn.SetMargins(0, 2.5, 16, 0, "dp")
                    layBottom.AddChild(closeBtn)
                    closeBtn.data.id = lay.id
                    closeBtn.SetOnTouch(function() {
                        UI._controls[this.data.id].lay.Hide()
                        var cb = UI._controls[this.data.id].cb
                        if(cb) cb(false, this.GetText())
                    });
                }
                var okBtn = UI.CreateButtonFlat(okText?okText.toUpperCase():"OK", null, null, null, MUI.theme.frgClr)
                okBtn.SetMargins(0, 2.5, 0, 0, "dp")
                layBottom.AddChild(okBtn)
                okBtn.data.id = lay.id
                okBtn.SetOnTouch(function() {
                    UI._controls[this.data.id].lay.Hide()
                    var cb = UI._controls[this.data.id].cb
                    if(cb) cb(true, this.GetText())
                })
            layout.AddChild(layBottom)
        mdlCard.AddChild(layout)
    lay.AddLayout(mdlCard)
    if(show) {
        lay.Show()
    }
    return lay
}
UI.CreateAlertSimple = function(text, btnText, color) {
    var lay = app.CreateDialog()
    UI._controls[lay.id] = {lay:null, cb: null, card:null, text: null}
    lay.SetOnTouchOK = function(cb) {
        UI._controls[this.id].cb = cb
    }
    lay.SetOnTouch = lay.SetOnTouchOK
    lay.Destroy = function() {
        var self = this
        self = null
    }
        var box = app.CreateLayout("Card")
        box.SetCornerRadius(8)
            var container = app.CreateLayout("Linear")
            container.SetSize((UI.swdp-80) / UI.swdp)
            container.SetPadding(25, 10, 25, 5, "dp")
            container.SetBackColor(MUI.theme.frgClr)
                var txt = UI.CreateTextParagraph(text, null, null, "MultiLine, Left")
                txt.SetMargins(0, 10, 0, 20, "dp")
                container.AddChild(txt)
                
                var okBtn = UI.CreateButtonFlat(btnText||"OKAY", null, null, color, UI.theme.frgClr)
                okBtn.SetSize((UI.swdp-130)/UI.swdp)
                container.AddChild(okBtn)
                okBtn.data.id = lay.id
                okBtn.SetOnTouch(function() {
                    if(UI._controls[this.data.id].cb) UI._controls[this.data.id].cb(true, this.GetText())
                    UI._controls[this.data.id].lay.Hide()
                })
            box.AddChild(container)
        lay.AddLayout(box)
    UI._controls[lay.id].lay = lay
    lay.SetText = txt.SetText
    lay.SetHtml = txt.SetHtml
    lay.SetTextColor = txt.SetTextColor
    return lay
}
UI.CreateAlert = function(text, icon, color) {
    color = color || UI.theme.primary
    var lay = app.CreateLayout("Linear", "FillX")
    lay.SetPadding(0, 5, 0, 10, "dp")
    lay.Hide()
    lay.HideLay = lay.Hide
    
    UI._controls[lay.id] = {}
    
    lay.SetOnClose = function(cb) {
        UI._controls[this.id].cb = cb
    }
    lay.Show = function() {
        app.AddLayout(this)
        this.Animate("Bounce")
    }
    lay.Hide = function() {
        this.Animate("ZoomOutExit")
        app.RemoveLayout(this)
        this.HideLay()
    }
    lay.Destroy = function() {
        app.DestroyLayout(this)
    }

        var box = app.CreateLayout("Card")
        box.SetCornerRadius(8)
        box.SetElevation(5)
        box.SetMargins(0, 0, 0, 5, "dp")
        box.SetBackColor(color)
            var c = app.CreateLayout("Absolute")
            c.SetSize(UI.swdp-8, null, "dp")
            c.SetMargins(4, 4, 4, 0, "dp")
                var container = app.CreateLayout("Linear", "VCenter, Horizontal, Left")
                container.SetSize(UI.swdp-8, null, "dp")
                container.SetPadding(25, 15, 20, 18, "dp")
                    if(icon) {
                        var Icon = app.CreateText(icon.trim())
                        Icon.SetTextColor("#ffffff")
                        Icon.SetTextSize(22)
                        Icon.SetMargins(0, 0, 20, 0, "dp")
                        Icon.SetFontFile(UI.fonts.icon)
                        container.AddChild(Icon)
                    }
                    var Text = UI.CreateTextParagraph(text.trim(), null, null, "Left, Multiline", "#ffffff")
                    Text.SetMargins(0, 0, 20, 0, "dp")
                    container.AddChild(Text)
                c.AddChild(container)
                
                var cbtn = app.CreateButton("close", null, null, "Custom")
                cbtn.SetSize(40, 40, "dp")
                cbtn.SetFontFile(UI.fonts.icon)
                cbtn.SetStyle(color, color, 30, 0, 0, 0)
                cbtn.SetTextColor("#000000")
                cbtn.SetPosition(1-UI.Fw(48), 0)
                c.AddChild(cbtn)
                cbtn.data.id = lay.id
                cbtn.SetOnTouch(function(){
                    if(UI._controls[this.data.id].cb) UI._controls[this.data.id].cb(true)
                    UI._controls[this.data.id].layout.Hide()
                });
            box.AddChild(c)
        lay.AddChild( box )
    lay.SetText = Text.SetText
    UI._controls[lay.id].layout = lay
    return lay
}

// Lists
// options : 'divider', ect
UI.CreateList = function(list, width, height, options) {
    var bodyText = list[0].search(":")>-1?true:false
    options = options?options.toLowerCase():""
    var divider = (options.search("divider")>-1)?true:false
    width = width || 1
    var list = app.CreateList(list, width, height, "Html, Fontawesome")
    if(bodyText) list.SetTextMargins(5, 0, 5, 0, "dp")
    else list.SetTextMargins(5, 8, 5, 8, "dp")
    list.SetFontFile(UI.fonts.regular)
    list.SetTextSize1(18)
    list.SetTextSize2(15)
    list.SetTextColor1(UI.theme.mainTextColor)
    list.SetTextColor2(bodyText?UI.theme.secondaryTextColor:UI.theme.primary)
    if(divider) list.SetDivider(this.Fr(0.5), UI.L?UI.colors.grey.lighten2:UI.colors.grey.darken2)
    else list.SetDivider(0, "#00ffffff")
    list.SetEllipsize1("end")
    list.SetIconMargins(15, 10, 5, 10, "dp")
    list.SetIconSize(22)
    return list
}
/**
 * @params [Object] list The list object
 * title
 * icon
 * badge
 * color
 * @params [Number] width Fraction of the screen width
 * @params [Number] height Fraction of the screen height
 * @params [String] options A comma separated options
 * Divider  //Adds a divider on the list items
 */
UI.CreateListSimple = function(list, width, height, options) {
    var lay = app.CreateScroller(width, height, "NoScrollBar")
    lay._id = "_"+ (++UI._counts)
    options = options?options.toLowerCase():""
    lay._divider = options.search("divider")>-1?true:false
    lay._width = width
    var divider = lay._divider
    
    //global object
    UI._controls[lay._id] = {};
    UI._controls[lay._id].list = list;
    UI._controls[lay._id].rows = [];
    UI._controls[lay._id].entries = [];
    UI._controls[lay._id].titleIds = [];

    //container of the list
    var layout = app.CreateLayout("Linear", "Right");
    layout.SetSize(width, null);
    lay.AddChild(layout);
    UI._controls[lay._id].layout = layout;
    
    lay.SetOnTouch = function(cb) {
        UI._controls[this._id].callback = cb
    }
    lay.AppendItem = function(data) {
        var row = CreateItem(data, this._width, this._divider, this._id);
        row.Hide();
        UI._controls[this._id].layout.AddChild(row);
        row.Animate("FadeIn");
        UI._controls[this._id].list.push(data);
        UI._controls[this._id].rows.push(row);
    }
    lay.RemoveItem = function(index) {
        var cmp = UI._controls[this._id];
        var row = cmp.rows[index];
        row.Animate("SlideToRight");
        
        _mui_obj._layout_to_remove.push(row)
        _mui_obj._remove_child_func.push(cmp.layout.RemoveChild)
        setTimeout(_mui_obj._destroy_layout, 300)
        
        // Remove from arrays
        cmp.list.splice(index, 1);
        cmp.rows.splice(index, 1);
        cmp.titleIds.splice(index, 1);
        cmp.entries.splice(index, 1);
    }
    lay.SetBadge = function(badge, index) {
        if(!index) return;
        badge = parseInt(badge);
        var cmp = UI._controls[this._id];
        var id = cmp.titleIds[index];
        var wdp = this._width * MUI.swdp - (cmp.entries[id].icon?70:0) - 5;
        var wd;
        if(badge <= 9) wd = 37;
        else if(badge > 9 && badge < 100) wd = 45;
        else if(badge > 99) wd = 55;

        if(UI._controls[this._id].entries[id].badge) {
            cmp.entries[id].title.SetSize(wdp-wd, null, "dp");
            cmp.entries[id].badge.SetSize(wd, null, "dp");
            cmp.entries[id].badge.SetText(badge>99?"99+":badge || "");
        } else {
            cmp.entries[id].title.SetSize(wdp-wd, null, "dp");
            var clr = cmp.entries[id].data.color || MUI.theme.primary;
            var n = badge>99?"99+":badge;
            var badge = app.CreateButton(n, null, null, "Custom, NoSound");
            badge.SetSize(wd, 35, "dp");
            badge.SetMargins(0, 0, 5, -2.5, "dp");
            badge.SetStyle(clr, clr, 25, 0, 0, 0.25);
            badge.SetTextSize(12, "dp");
            badge.SetFontFile(UI.fonts.medium);
            badge.Hide();
            cmp.entries[id].ctLay(badge);
            cmp.entries[id].badge = badge;
            badge.Animate("FadeIn");
        }
    }
    lay.SetTitleText = function(title, index) {
        var cmp = UI._controls[this._id]
        var id = cmp.titleIds[index]
        cmp.entries[id].title.SetText(title.toString()||"");
    }
    lay.GetList = function() {
        return UI._controls[this._id].list;
    }
    
    for(var i = 0; i<list.length; i++) {
        var data = list[i];
        var row = CreateItem(data, width, divider, lay._id);
        layout.AddChild(row);
        UI._controls[lay._id].rows[i] = row;
    }
    return lay;
    function CreateItem(data, width, divider, id) {
        var wdp = width * MUI.swdp;
        var row = app.CreateLayout("Linear", "VCenter, Right, Horizontal");
            if(data.icon) {
                var bdclr = MUI.L ? "#E0E0E0" : "#616161";
                var icon = app.CreateButton(data.icon.trim(), null, null, "Custom");
                icon.SetSize(45, 45, "dp");
                icon.SetStyle("#00ffffff", "#00ffffff", 45, bdclr, 1, 0);
                icon.SetTextColor(data.color ? data.color : UI.theme.primary);
                icon.SetTextSize(18);
                icon.SetFontFile(UI.fonts.icon);
                icon.SetMargins(10, 2.5, 15, 0, "dp");
                row.AddChild(icon);
                wdp =  width * MUI.swdp - 70;
            }
            
            var innerLay = app.CreateLayout("Linear", "VCenter, Right");
                var ctLay = app.CreateLayout("Linear", "Horizontal, Left, VCenter");
                    var title = UI.CreateTextParagraph(data.title.trim().toString() || "", null, null, "Left");
                    title.SetFontFile(MUI.fonts.medium);
                    title.SetPadding( (data.icon ? 0 : 16), 16, 0, 16, "dp");
                    ctLay.AddChild(title);
                    title.data.id = id;
                    UI._controls[id].titleIds.push(title.id);
                    title.SetOnTouch(function(ev) {
                        if(ev.action == "Down") {
                            UI._controls[this.data.id].entries[this.id].setBackColor("#22616161");
                        } else if(ev.action == "Move") {
                            UI._controls[this.data.id].entries[this.id].setBackColor("#00ffffff");
                        } else if(ev.action == "Up") {
                            UI._controls[this.data.id].entries[this.id].setBackColor("#00ffffff");
                            var data = UI._controls[this.data.id].entries[this.id].data;
                            if(UI._controls[this.data.id].callback) {
                                UI._controls[this.data.id].callback(data.title, UI._controls[this.data.id].titleIds.indexOf(this.id), data.icon, data.badge);
                            }    
                        }
                    });
                    
                    UI._controls[id].entries[title.id] = {
                        data: data,
                        setBackColor: row.SetBackColor,
                        title: title,
                        icon: data.icon?true:false,
                        ctLay: null
                    };
                    
                    var wd = 0;
                    var clr = data.color || MUI.theme.primary;
                    var q = parseInt(data.badge);
                    if(q <= 9) wd = 37;
                    else if(q > 9 && q < 100) wd = 45;
                    else if(q > 99) wd = 55;
                    title.SetSize(wdp-wd-(data.badge?5:0),null,"dp");
                        
                    if(data.badge) {
                        var n = parseInt(data.badge) > 99 ? "99+" : data.badge;
                        var badge = app.CreateButton(n, null, null, "Custom, NoSound");
                        badge.SetSize(wd, 35, "dp");
                        badge.SetMargins(0, 0, 5, -2.5, "dp");
                        badge.SetStyle(clr, clr, 25, 0, 0, 0.25);
                        badge.SetTextSize(12, "dp");
                        badge.SetFontFile(UI.fonts.medium);
                        ctLay.AddChild(badge);
                        
                        UI._controls[id].entries[title.id].badge = badge;
                    }
                    UI._controls[id].entries[title.id].ctLay = ctLay.AddChild;
                    
                innerLay.AddChild(ctLay);
                if( divider ) innerLay.AddChild(MUI.CreateDivider(null, (width - (data.icon ? 70 : 16)/MUI.swdp ) * MUI.sw));
            row.AddChild(innerLay);
        return row;
    }
}
/**
 * @params [Object] data The object data that has the following props
 * title
 * image
 * note
 * @params [Number] width Fraction of the screen width
 * @params [Number] height Fraction of the screen height
 * @params [String] options Comma separated options
 * RightIcon or RightNote       //Either right controls is an icon or note
 * ------------------
 * Selectable                   //List item is selectable when avatar is click
 * ------------------
 * Initial                      //Type of icon to show for material and avatar
 * Material
 * Avatar
 * 
 * Remove param
 * @params [String] color
 * 
 * Previous args
 * ls, height, color
 */
UI.CreateListModern = function(data, width, height, options) {
    width = width || 1 
    var lay = app.CreateScroller(width, height, "NoScrollBar")
    lay._width = width
    
    options = options? options.toLowerCase():"icon,avatar"
    lay._controlType = options.search("rightnote")>-1?"note":"icon"
    if(options.search("avatar")>-1) lay._avatarType = "avatar"
    else if(options.search("material")>-1) lay._avatarType = "material"
    else lay._avatarType = "initial"
    var selectable = options.search("selectable")>-1?true:false
    UI._controls[lay.id] = {onTouch:null, onControlTouch:null, onAvatarTouch:null, list:data, layout:null, entries:[], titleIds:[], selectable: selectable, selected:0}
    /**
     * entries = {
     *      setBody: //a function to set the text of the body
     *      setRightIcon: //a function to change the right icon
     *      setTitle: // a function to change the title
     *      avatar: // the avatar image
     * }
     */
    
    //container of the list
    var layout = app.CreateLayout("Linear", "Left")
    layout.SetSize(width, height)
    lay.AddChild(layout)
    UI._controls[lay.id].layout = layout
    
    lay.SetOnTouch = function(cb) {
        UI._controls[this.id].onTouch = cb
    }
    lay.SetIconOnTouch = function(cb) {
        UI._controls[this.id].onAvatarTouch = cb
    }
    lay.SetAvatarOnTouch = lay.SetIconOnTouch
    lay.SetControlOnTouch = function(cb) {
        UI._controls[this.id].onControlTouch = cb
    }
    lay.SetOnSelect = function(cb) {
        UI._controls[this.id].onSelect= cb
    }
    // from AppendItems
    //Now accepts
    /**
     * @param [Object] data The object data that has the following props
     * title
     * image
     * note
     */
    lay.AppendItem = function(data) {
        CreateItem(data, this._width, this.id, this._avatarType, this._controlType)
        UI._controls[this.id].list.push(data)
    }
    lay.RemoveItem = function(index) {
        var cmp = UI._controls[this.id]
        var row = cmp.entries[index].row
        row.Animate("SlideToRight")
        
        _mui_obj._layout_to_remove.push(row)
        _mui_obj._remove_child_func.push(cmp.layout.RemoveChild)
        setTimeout(_mui_obj._destroy_layout, 300)
        
        if(cmp.list[index].checked) MUI._controls[this.id].selected--

        cmp.list.splice(index, 1)
        cmp.titleIds.splice(index, 1)
        cmp.entries.splice(index, 1)
    }
    lay.RemoveItems = function(indexes) {
        if(typeof(indexes) !== "object") return
        var rows = []
        var cmp = UI._controls[this.id]
        for(var i=0; i<indexes.length&&cmp.entries[indexes[i]]; i++) {
            rows[i] = cmp.entries[indexes[i]].row
            if(cmp.list[indexes[i]].checked) MUI._controls[this.id].selected--
        }
        for(var i=0; i<rows.length; i++) {
            rows[i].Animate("SlideToRight")
            
            _mui_obj._layout_to_remove.push(rows[i])
            _mui_obj._remove_child_func.push(cmp.layout.RemoveChild)
            setTimeout(_mui_obj._destroy_layout, 300)
            
            cmp.list.splice(indexes[i]-i, 1)
            cmp.titleIds.splice(indexes[i]-i, 1)
            cmp.entries.splice(indexes[i]-i, 1)
        }
    }
    lay.SetTitle = function(title, index) {
        if(index < 0 || index >= UI._controls[this.id].list.length) return null
        var cmp = UI._controls[this.id]
        var list = cmp.list[index]
        list.title = title
        var txt = "<b>"+list.title+'</b><br><font color="#757575">'+list.body+"</font>"
        cmp.entries[index].setTitle(txt)
    }
    lay.SetTitleText = lay.SetTitle
    lay.SetBodyText = function(text, index) {
        if(index < 0 || index >= UI._controls[this.id].list.length) return null
        UI._controls[this.id].list[index].body = text
        var body = UI._controls[this.id].list[index]
        var txt = "<b>"+body.title+'</b><br><font color="#757575">'+body.body+"</font>"
        UI._controls[this.id].entries[index].setBody(txt)
    }
    lay.SetRightIcon = function(icon, index) {
        if(index < 0 || index >= UI._controls[this.id].list.length) return
        if(this._controlType == "note") UI._controls[this.id].list[index].rightNote = icon
        else UI._controls[this.id].list[index].rightIcon = icon
        UI._controls[this.id].entries[index].setRightIcon(icon)
    }
    lay.SetNoteText = lay.SetRightIcon
    lay.PopItem = function() {
        this.RemoveItem(UI._controls[this.id].list.length-1)
    }
    lay.ShiftItem = function() {
        this.RemoveItem(0)
    }
    lay.GetList = function() {
        return UI._controls[this.id].list
    }
    lay.GetItem = function(i) {
        return UI._controls[this.id].list[i]
    }
    lay.GetSelectedItems = function() {
        var list = UI._controls[this.id].list, ret = []
        for(var i=0; i<list.length; i++) {
            if(list[i].checked) ret.push(i)
        }
        return ret
    }
    lay.Highlight = function(index) {
        var list = UI._controls[this.id].list[index]
        if(!list) return
        var titleClr = UI.theme.mainTextColor
        var bodyClr = UI.theme.secondaryTextColor
        var txt = '<b><font color="'+titleClr+'">'+list.title+'</font></b><br><font color="'+bodyClr+'">'+list.body+"</font>"
        UI._controls[this.id].entries[index].setBody(txt)
    }
    lay.SetUnread = lay.Highlight
    lay.RemoveHighlight = function(index) {
        var list = UI._controls[this.id].list[index]
        if(!list) return
        var titleClr = UI.L?"#616161":"#BDBDBD"
        var bodyClr = UI.L?"#757575":"#9E9E9E"
        var txt = '<b><font color="'+titleClr+'">'+list.title+'</font></b><br><font color="'+bodyClr+'">'+list.body+"</font>"
        UI._controls[this.id].entries[index].setBody(txt)
    }
    lay.SetImage = function(img, index) {
        var list = UI._controls[this.id].list[index]
        if(!list || !app.FileExists(img)) return
        list.image = img
        UI._controls[this.id].entries[index].avatar.SetImage(img)
    }
    lay.SetItem = function(data, index) {
        if(!UI._controls[this.id].list[index]) return
        UI._controls[this.id].list[index] = data
        var titleClr = UI.theme.mainTextColor
        var bodyClr = UI.theme.secondaryTextColor
        var txt = '<b><font color="'+titleClr+'">'+data.title+'</font></b><br><font color="'+bodyClr+'">'+data.body+"</font>"
        UI._controls[this.id].entries[index].setBody(txt)
        if(this._controlType == "note") UI._controls[this.id].entries[index].setRightIcon(data.rightNote?data.rightNote.trim():"")
        else UI._controls[this.id].entries[index].setRightIcon(data.rightIcon.trim())
        var avatar = UI._controls[this.id].entries[index].avatar
        if(data.image && app.FileExists(data.image)) avatar.SetImage(data.image)
        else {
            var color = _mui_obj._dark_colors[_mui_obj._alp.indexOf(data.title.charAt(0).toUpperCase())]
            //avatar.SetImage(null)
            avatar.SetPaintColor(color)
            avatar.DrawCircle( 0.5, 0.5, 1)
            avatar.SetPaintColor("#ffffff")
            avatar.DrawText(data.title.charAt(0).toUpperCase(), 0.32, 0.675)
            if(this._avatarType == "initial") avatar.DrawText(data.title.charAt(0).toUpperCase(), 0.32, 0.675)
            else if(this._avatarType == "material") avatar.DrawText(data.icon, 0.24, 0.75)
            else avatar.DrawText("person", 0.225, 0.75)
        }
    }
    
    for(var i = 0; i<data.length; i++) CreateItem(data[i], width, lay.id, lay._avatarType, lay._controlType)
    return lay
    function CreateItem(data, width, id, avatarType, controlType) {
        var wdp = width * MUI.swdp
        var backColor = UI.theme.backColor
        var color = _mui_obj._dark_colors[_mui_obj._alp.indexOf(data.title.charAt(0).toUpperCase())]
        
        var row = app.CreateLayout("Linear", "VCenter, Horizontal, Left")
        row.SetSize(width)
        row.SetPadding(0, 10, 0, 10, "dp")

            var img = (data.image && app.FileExists(data.image)) ? data.image.trim() : data.title.trim().charAt(0).toUpperCase()
            
            var image = app.CreateLayout("Card")
            image.SetSize(40, 40, "dp")
            image.SetMargins(15, 0, 15, 0, "dp")
            image.SetCornerRadius(20)
                var avatar = app.CreateImage(null, UI.Fw(40), UI.Fr(40))
                if(avatarType!="material" && data.image && app.FileExists(data.image)) {
                    avatar.SetImage(img)
                    //avatar.SetTextSize(60)
                    var x = avatar.MeasureText("check").width
                    var y = (-2554.324*x)+190
                    avatar.SetTextSize(y)
                }
                else {
                    avatar.SetPaintColor( color )
                    avatar.SetTextSize(22)
                    avatar.DrawCircle( 0.5, 0.5, 0.5)
                    avatar.SetPaintColor("#ffffff")
                    avatar.SetFontFile(UI.fonts.icon)
                    if(avatarType == "initial") avatar.DrawText( img, 0.32, 0.675)
                    else if(avatarType == "material") avatar.DrawText(data.icon, 0.24, 0.75)
                    else avatar.DrawText("person", 0.225, 0.75)
                }
                image.AddChild(avatar)
                
                var checkImg = app.CreateImage(null, UI.Fw(40), UI.Fr(40))
                checkImg.SetBackColor("#00000000")
                checkImg.SetFontFile(UI.fonts.icon)
                checkImg.SetTextSize(22)
                image.AddChild(checkImg)
                checkImg.data.id = id
                checkImg.Update()
                checkImg.SetOnTouchUp(function() {
                    var i = UI._controls[this.data.id].titleIds.indexOf(this.data.tid)
                    if(UI._controls[this.data.id].selectable) {
                        var list = UI._controls[this.data.id].list[i]
                        var row = UI._controls[this.data.id].entries[i].row
                        if(list.checked) {
                            row.SetBackColor("#00000000")
                            this.Clear()
                            list.checked = false
                            UI._controls[this.data.id].selected--
                        } else {
                            row.SetBackColor(UI.L?"#33616161":"#66616161")
                            this.SetPaintColor(UI.theme.primary)
                            this.DrawCircle( 0.5, 0.5, 1)
                            this.SetPaintColor("#ffffff")
                            this.DrawText("check", 0.26, 0.75)
                            list.checked = true
                            UI._controls[this.data.id].selected++
                        }
                        this.Update()
                        if(UI._controls[this.data.id].onSelect) UI._controls[this.data.id].onSelect(i, list.checked)
                        return
                    }
                    var cb = UI._controls[this.data.id].onAvatarTouch
                    if(cb) cb(i)
                })
            row.AddChild(image)

            var clr = UI.theme.secondaryTextColor
            var txtClr = MUI.theme.mainTextColor
            var bsw = null
            if(controlType && controlType == "note") bsw = data.rightNote?(wdp-135):(wdp-70)
            else bsw = data.rightIcon?(wdp-120):(wdp-70)
            
            var txt = '<b><font color="'+txtClr+'">'+data.title+'</b><br><font color="'+ clr +'">'+data.body+"</font>"
            var body = UI.CreateTextParagraph(txt, null, null, "Left, Html, Sound", UI.theme.mainTextColor)
            body.SetEllipsize("end")
            body.SetSize(bsw, null, "dp")
            row.AddChild(body)
            body.data.id = id
            body.SetOnTouch(function(e) {
                var index = UI._controls[this.data.id].titleIds.indexOf(this.id)
                var row = UI._controls[this.data.id].entries[index].row
                var shade = UI.L?"#33616161":"#66616161"
                if(e.action == "Up") {
                    if(UI._controls[this.data.id].selected) {
                        var list = UI._controls[this.data.id].list[index]
                        var checkImg = UI._controls[this.data.id].entries[index].checkImg
                        if(list.checked) {
                            row.SetBackColor("#00000000")
                            checkImg.Clear()
                            list.checked = false
                            UI._controls[this.data.id].selected--
                        } else {
                            row.SetBackColor(shade)
                            checkImg.SetPaintColor(UI.theme.primary)
                            checkImg.DrawCircle( 0.5, 0.5, 1)
                            checkImg.SetPaintColor("#ffffff")
                            checkImg.DrawText("check", 0.26, 0.75)
                            list.checked = true
                            UI._controls[this.data.id].selected++
                        }
                        if(UI._controls[this.data.id].onSelect) UI._controls[this.data.id].onSelect(index, list.checked)
                        return    
                    }
                    row.SetBackColor("#00000000")
                    var cb = UI._controls[this.data.id].onTouch
                    var s = this.GetText().split('\n')
                    if(cb) cb(s[0], s[1], index)
                }
                else if(e.action == "Down") row.SetBackColor(shade)
                else if(e.action == "Move" && !UI._controls[this.data.id].selected) row.SetBackColor("#00ffffff")
            })

            checkImg.data.tid = body.id
            
            var rightIcon = null
            if(controlType && controlType == "note") {
                if(data.rightNote) {
                    rightIcon = app.CreateText(data.rightNote.trim())
                    rightIcon.SetSize(65, null, "dp")
                    rightIcon.SetTextColor(UI.theme.secondaryTextColor)
                    rightIcon.SetFontFile(UI.fonts.light)
                    rightIcon.SetTextSize(12)
                    row.AddChild(rightIcon)
                }
            } else {
                if(data.rightIcon) {
                    rightIcon = app.CreateButton(data.rightIcon ? data.rightIcon.trim() : "", null, null, "Custom")
                    rightIcon.SetSize(50, 50, "dp")
                    rightIcon.SetTextSize(22)
                    rightIcon.SetFontFile(UI.fonts.icon)
                    rightIcon.SetTextColor(UI.theme.secondaryTextColor)
                    rightIcon.SetStyle("#00000000", "#00000000", 50, 0, 0, 0)
                    row.AddChild(rightIcon)
                    rightIcon.data.id = id
                    rightIcon.data.tid = body.id
                    rightIcon.SetOnTouch(function() {
                        var cb = UI._controls[this.data.id].onControlTouch
                        if(cb) cb(UI._controls[this.data.id].titleIds.indexOf(this.data.tid))
                    })
                }
            }
        
        //For PopItem and RemoveItem
        UI._controls[id].titleIds.push(body.id)
        UI._controls[id].entries.push({
            setBody: body.SetHtml,
            setTitle: body.SetHtml,
            setRightIcon: rightIcon?rightIcon.SetText:null,
            avatar: avatar,
            checkImg: checkImg,
            row: row
        })
        
        row.Hide()
        UI._controls[id].layout.AddChild(row)
        row.Animate("FadeIn")
    }
}

// List dialogs & Checklist
// bottom : boolean
UI.CreateListDialog = function(title, list, color, bottom) {
    color = color || UI.theme.primary
    var backColor = UI.theme.backColor
    var w = bottom ? 1 : 0.8
    var r = bottom ? 0 : 10
    var align = bottom ? "Bottom" : "VCenter"
    var anim = bottom ? "SlideFromBottom" : "FadeIn"
    
    var lay=null
    if(bottom) {
        lay = app.CreateLayout("Linear", "Center, FillXY, " + align)
        lay.SetBackColor("#99000000")
        lay.Hide()
        lay.HideLay = lay.Hide
        lay.ShowLay = lay.Show
        lay._bottom = bottom
        
        lay.Show = function() {
            app.AddLayout(this)
            this.ShowLay()
            UI._controls[this.id].card.Animate(this._bottom?"SlideFromBottom":"FadeIn")
        }
        lay.Hide = function() {
            app.RemoveLayout(this)
            this.HideLay()
            UI._controls[this.id].card.Hide()
        }
        lay.SetOnTouchUp(function() {
            this.Hide()
        })
    } else {
        lay = app.CreateDialog()
        lay._bottom = false
    }
    
    UI._controls[lay.id] = {onSelect: null, lay: null, card:null}
    lay.data.w=w
    
    lay.SetOnSelect = function(cb) {
        UI._controls[this.id].onSelect = cb
    }
    lay.Destroy = function() {
        if(this._bottom) {
            app.DestroyLayout(this)
            return
        }
        var self = this
        self = null
    }
    UI._controls[lay.id].lay = lay
    
        var card = app.CreateLayout("Card")
        card.SetCornerRadius(r)
        if(bottom) {
            card.Hide()
            card.SetElevation(8)
        }
        UI._controls[lay.id].card = card
            var box = app.CreateLayout("Linear", "Left")
            box.SetSize(w)
            box.SetBackColor(backColor)
                var c, icon, name, title
                
                title = UI.CreateTextH5(title||"", w, null, "Left", UI.L?color:'#ffffff', "Medium")
                title.SetPadding(20, 10, 20, 10, "dp");
                box.AddChild(title)
                box.AddChild(UI.CreateDivider())
                
                var scrl = app.CreateScroller(w, null, "")
                var slay = MUI.CreateLayout("Linear", "Left")
                scrl.AddChild(slay)
                box.AddChild(scrl)
                
                for(var i=0; i<list.length&&list[0]; i++) {
                    c = app.CreateLayout("Linear", "VCenter, Horizontal, Left")
                    c.SetSize(w)
                    c.SetPadding(0, 15, 0, 15, "dp")
                        if(list[i].icon) {
                            icon = app.CreateText(list[i].icon)
                            icon.SetTextSize(18)
                            icon.SetSize(0.15)
                            icon.SetTextColor(list[i].color||color)
                            icon.SetFontFile(UI.fonts.icon)
                            c.AddChild(icon)
                        }
                        
                        name = UI.CreateTextParagraph(list[i].name, 0.65, null, "Left", null, "Medium")
                        list[i].icon ? null : name.SetPadding(20, 0, 0, 0, "dp")
                        c.AddChild(name)
                        name.data.id = lay.id
                        name.data.row = c
                        name.data.index = i
                        name.SetOnTouch( function(e) {
                            var row = this.data.row
                            if(e.action == "Down") row.SetBackColor(UI.L?'#10000000':'#10ffffff')
                            if(e.action == "Move") row.SetBackColor("#00000000")
                            if(e.action == "Up") {
                                row.SetBackColor("#00000000")
                                var cb = UI._controls[this.data.id].onSelect
                                if(cb) cb(this.GetText(), this.data.index)
                                UI._controls[this.data.id].lay.Hide()
                            }
                        })
                    slay.AddChild(c)
                }
            card.AddChild( box )
            
        if(bottom) lay.AddChild(card)
        else lay.AddLayout(card)
        
    lay.SSbox = box.SetSize
    lay.SSslay = slay.SetSize
    lay.SetHeight = function(h) {
        this.SSbox(this.data.w, h)
        this.SSslay(this.data.w, h)
    }
    return lay
}
UI.CreateCheckList = function(title, list, color, bottom) {
    color = color || UI.theme.primary
    var backColor = UI.theme.backColor
    var w = bottom ? 1 : 0.8
    var r = bottom ? 0 : 10
    var align = bottom ? "Bottom" : "VCenter"
    var anim = bottom ? "SlideFromBottom" : "FadeIn"
    
    var lay = null
    if(bottom) {
        lay = app.CreateLayout("Linear", "Center, FillXY, " + align)
        lay.SetBackColor("#99000000")
        lay.Hide()
        lay.HideLay = lay.Hide
        lay.ShowLay = lay.Show
        lay._bottom = bottom
        lay.Show = function() {
            app.AddLayout(this)
            this.ShowLay()
            UI._controls[this.id].card.Animate(this._bottom?"SlideFromBottom":"FadeIn")
        }
        lay.Hide = function() {
            app.RemoveLayout(this)
            this.HideLay()
            UI._controls[this.id].card.Hide()
        }
        lay.SetOnTouchUp(function() {
            this.Hide()
        })
    } else {
        lay = app.CreateDialog()
        lay._bottom = false
    }
    
    UI._controls[lay.id] = {onSubmit:null, lay:null, values:list}
    lay.data.w=w
    
    lay.SetOnSubmit = function(cb) {
        UI._controls[this.id].onSubmit = cb
    }
    
    lay.Destroy = function() {
        if(this._bottom)
            app.DestroyLayout(this)
        else {
            var self = this
            self = null
        }
    }
    
    UI._controls[lay.id].lay = lay
        var card = app.CreateLayout("Card")
        card.SetCornerRadius(r)
        if(bottom) {
            card.Hide()
            card.SetElevation(8)
        }
        UI._controls[lay.id].card = card
            var box = app.CreateLayout("Linear", "Left")
            box.SetSize(w)
            box.SetBackColor(backColor)
                var c, icon, name, title
                
                title = UI.CreateTextH5(title||"", w, null, "Left", UI.L?color:'#ffffff', "Bold")
                title.SetPadding(20, 10, 20, 10, "dp")
                box.AddChild(title)
                box.AddChild(UI.CreateDivider())
                
                var scrl = app.CreateScroller(w)
                var slay = MUI.CreateLayout("Linear", "Left")
                scrl.AddChild(slay)
                box.AddChild(scrl)
                
                for(var i=0; i<list.length&&list[0]; i++) {
                    c = app.CreateLayout("Linear", "VCenter, Horizontal, Left")
                    c.SetSize(w)
                        icon = app.CreateButton(list[i].check ? "check_box" : "check_box_outline_blank", null, null, "Custom")
                        icon.SetTextSize(22, "dp")
                        icon.SetMargins(5, 2.5, 5, 0, "dp")
                        icon.SetSize(48, 48, "dp")
                        icon.SetTextColor(color)
                        icon.SetFontFile(UI.fonts.icon)
                        icon.SetStyle("#00ffffff", "#00ffffff", 24, 0, 0, 0)
                        icon.data.id = lay.id
                        icon.data.index = i
                        icon.data.name = list[i].name
                        c.AddChild(icon)
                        icon.SetOnTouch( function() {
                            if(this.GetText() == "check_box_outline_blank") {
                                this.SetText("check_box")
                                UI._controls[this.data.id].values[this.data.index].check = true
                            } else {
                                this.SetText("check_box_outline_blank")
                                UI._controls[this.data.id].values[this.data.index].check = false
                            }
                        })
                    
                        name = UI.CreateTextParagraph(list[i].name||"", 0.65, null, "Left, Sound", null, "Medium");
                        c.AddChild(name)
                        name.data.row = c
                        name.data.icon = icon
                        name.SetOnTouch( function(e) {
                            var row = this.data.row;
                            if(e.action == "Down") { row.SetBackColor(UI.L?"#EEEEEE":"#424242"); app.SimulateTouch(this.data.icon, e.X, e.Y, "Down"); }
                            if(e.action == "Move")  { row.SetBackColor("#00000000"); app.SimulateTouch(this.data.icon, e.X, e.Y, "Move"); }
                            if(e.action == "Up") {  row.SetBackColor("#00000000"); app.SimulateTouch(this.data.icon, e.X, e.Y, "Up"); }
                        });
                    slay.AddChild(c)
                }
                
                var b = app.CreateLayout("Linear", "Horizontal, VCenter, Right")
                b.SetSize(w)
                b.SetPadding(0, 2.5, 5, 0, "dp")
                    var close = UI.CreateButtonFlat("CLOSE", null, null, color)
                    close.SetMargins(0, 0, 12, 0, "dp")
                    close.data.id = lay.id
                    b.AddChild(close)
                    close.SetOnTouch(function() {
                        UI._controls[this.data.id].lay.Hide()
                    })
                    
                    var ok = UI.CreateButtonFlat("SUBMIT", null, null, color)
                    ok.SetMargins(0, 0, 12, 0, "dp")
                    ok.data.id = lay.id
                    b.AddChild(ok)
                    ok.SetOnTouch( function() {
                        var cb = UI._controls[this.data.id].onSubmit
                        if(cb) cb( UI._controls[this.data.id].values)
                        UI._controls[this.data.id].lay.Hide()
                    })
                slay.AddChild(b)
            card.AddChild(box)
            
        if(lay._bottom) lay.AddChild(card)
        else lay.AddLayout(card)
        
    lay.SSbox = box.SetSize
    lay.SetHeight = function(h) {
        this.SSbox(this.data.w, h)
    }
    return lay
}
// Radios
UI.CreateRadio = function(list, width, height, color) {
    var color = color || UI.theme.primary
    var list = list.split(",")
    list.forEach(function(item, i) {
        list[i] = item+":[fa-circle-thin]".trim()
    });
    var lay = app.CreateList(list, width, height, "Fontawesome")
    lay.SetDivider(0, "#00000000")
    lay.SetIconSize(22)
    lay.SetIconMargins(15, 0, 0, 0, "dp")
    lay.SetTextMargins(0, 7, 0, 7, "dp")
    lay.SetTextColor1(UI.theme.mainTextColor)
    lay.SetTextColor2(color)
    lay.SetFontFile(UI.fonts.regular)
    lay.setOnTouch = lay.SetOnTouch
    lay.setOnTouch(function(a, b, c, d) {
        var id = this.id
        var checkItem = UI._controls[id].checkItem
        this.SetItemByIndex(checkItem, null, null, "[fa-circle-thin]")
        this.SetItemByIndex(d, null, null, "[fa-circle]")
        UI._controls[id].checkItem = d
        if(UI._controls[id].onSelect) UI._controls[id].onSelect(a, d)
    })
    
    UI._controls[lay.id] = {layout: lay, onSelect: null, checkItem: -1}
    
    lay.SetOnSelect = function(cb) {
        UI._controls[this.id].onSelect = cb
    }
    lay.SetOnTouch = lay.SetOnSelect
    lay.GetCheckItem = function() {
        var checkItem = UI._controls[this.id].checkItem
        if(checkItem == -1) return null
        var item = this.GetItemByIndex(checkItem)
        return item.title+","+checkItem
    }
    lay.CheckItemByIndex = function(index) {
        var checkItem = UI._controls[this.id].checkItem
        this.SetItemByIndex(checkItem, null, null, "[fa-circle-thin]")
        this.SetItemByIndex(index, null, null, "[fa-circle]")
        UI._controls[this.id].checkItem = index
    }
    return lay
}
UI.CreateRadioMaterial = function(list, width, height, orientation, color, backColor) {
    color = color || UI.theme.primary
    backColor = backColor || UI.theme.backColor
    list = list.split(",")
    
    var lay = app.CreateScroller(width, height, "NoScrollBar")
    
    UI._controls[lay.id] = {layout: null, radios: [], list: list, onTouch: null, checkItem: -1}
    
    lay.SetOnTouch = function(cb) {
        UI._controls[this.id].cb = cb
    }
    lay.SetOnSelect = lay.SetOnTouch
    lay.GetCheckItem = function() {
        var checkItem = UI._controls[this.id].checkItem
        if(checkItem == -1) return null
        var title = UI._controls[this.id].list[checkItem]
        return title+","+checkItem
    }
    lay.CheckItemByIndex = function(index) {
        var checkItem = UI._controls[this.id].checkItem
        if(checkItem > -1) UI._controls[this.id].radios[checkItem].SetText("radio_button_unchecked")
        UI._controls[this.id].radios[index].SetText("radio_button_checked")
        UI._controls[this.id].checkItem = index
    }
    lay.Toggle = function() {
        if(this.GetVisibility() == "Show") this.Hide()
        else this.Show()
    }
    lay.GetItem = function(index) {
        return UI._controls[this.id].list[index]
    }
    lay.GetList = function() {
        return UI._controls[this.id].list
    }
    
    var vert = false
    if(orientation && orientation.toLowerCase() == "vertical") {
        orientation+= ", Left"
        vert = true
    }
    
    var layout = app.CreateLayout("Linear", orientation || "Vertical, Left")
        for(var i = 0; i<list.length&&list[0]; i++) {
            var box = app.CreateLayout("Linear", "Horizontal, Left, VCenter")
            box.SetSize(-1, UI.Fr(50))
                var radio = app.CreateButton("radio_button_unchecked", null, null, "Custom")
                radio.SetSize(55, 55, "dp")
                radio.SetMargins(0, 3, 0, 0, "dp")
                radio.SetTextSize(25, "dp")
                radio.SetStyle(backColor, backColor, 50, 0, 0, 0)
                radio.SetTextColor(color)
                radio.SetFontFile(UI.fonts.icon)
                box.AddChild(radio)
                radio.data = {id: lay.id, index: i}
                UI._controls[lay.id].radios[i] = radio
                radio.SetOnTouch(function() {
                    var data = this.data
                    var checkItem = UI._controls[data.id].checkItem
                    if(checkItem > -1) UI._controls[data.id].radios[checkItem].SetText("radio_button_unchecked")
                    this.SetText("radio_button_checked")
                    UI._controls[data.id].checkItem = data.index
                    var title = UI._controls[data.id].list[data.index]
                    var cb = UI._controls[data.id].cb
                    if(cb) cb(title, data.index)
                })
                
                var text = app.CreateText(list[i].trim()||"")
                text.SetTextColor(UI.theme.mainTextColor)
                text.SetFontFile(UI.fonts.regular)
                text.SetTextSize(18)
                if(!vert) text.SetMargins(0, 0, 12, 0, "dp")
                box.AddChild(text)
            layout.AddChild(box)
        }
    lay.AddChild(layout)
    return lay
}
UI.CreateRadioButtons = function(list, width, height, orientation, color, backColor) {
    color = color || UI.theme.primary
    backColor = backColor || UI.theme.backColor
    list = list.split(",")
    if(orientation) orientation = orientation.toLowerCase()
    orientation = orientation=="vertical"?"Vertical":"Horizontal,Center"
    
    var lay = app.CreateScroller(width, height, "NoScrollBar")
    UI._controls[lay.id] = {layout: null, radios: [], list: list, cb: null, checkItem: -1, color: color, backColor: backColor}

    lay.SetOnTouch = function(cb) {
        UI._controls[this.id].cb = cb
    }
    lay.SetOnSelect = lay.SetOnTouch
    lay.GetCheckItem = function() {
        var checkItem = UI._controls[this.id].checkItem
        if(checkItem == -1) return null
        var name = UI._controls[this.id].list[checkItem]
        return name+","+checkItem
    }
    lay.CheckItemByIndex = function(index) {
        if(index < UI._controls[this.id].list.length && index >= 0) {
            var color = UI._controls[this.id].color
            var backColor = UI._controls[this.id].backColor
            var checkItem = UI._controls[this.id].checkItem
            if(checkItem > -1) {
                UI._controls[this.id].radios[checkItem].SetTextColor(UI.L?"#616161":"#e0e0e0")
                UI._controls[this.id].radios[checkItem].SetStyle(backColor, backColor, 50, "#e0e0e0", 1, 0)
            }
            var clr = UI.CreateLightColor(color)
            UI._controls[this.id].radios[index].SetStyle(clr, clr, 50, color, 1, 0)
            UI._controls[this.id].radios[index].SetTextColor(color)
            UI._controls[this.id].checkItem = index;
        }
    }
    lay.Toggle = function() {
        if(this.GetVisibility() == "Show") this.Hide()
        else this.Show()
    }
    lay.GetItem = function(index) {
        return UI._controls[this.id].list[index]
    }
    lay.GetList = function() {
        return UI._controls[this.id].list
    }
    
    var layout = app.CreateLayout("Linear", orientation);
        for(var i = 0; i < list.length; i++) {
            var radio = app.CreateButton( list[i], null, null, "Custom")
            radio.SetSize(-1, 40, "dp")
            radio.SetMargins(0, 3, 0, 0, "dp")
            radio.SetTextSize(14, "dp")
            radio.SetStyle(backColor, backColor, 50, "#e0e0e0", 1, 0)
            radio.SetTextColor(UI.L?"#616161":"#e0e0e0")
            layout.AddChild(radio)
            radio.data = {id: lay.id, index: i, backColor: backColor, color: color}
            UI._controls[lay.id].radios[i] = radio
            radio.SetOnTouch(function() {
                var data = this.data;
                var checkItem = UI._controls[data.id].checkItem
                if(checkItem > -1) {
                    UI._controls[data.id].radios[checkItem].SetTextColor(UI.L?"#616161":"#e0e0e0")
                    UI._controls[data.id].radios[checkItem].SetStyle(data.backColor, data.backColor, 50, "#e0e0e0", 1, 0)
                }
                var clr = UI.CreateLightColor(data.color)
                this.SetStyle(clr, clr, 50, data.color, 1, 0)
                this.SetTextColor(data.color)
                UI._controls[data.id].checkItem = data.index
                var title = UI._controls[data.id].list[data.index]
                var cb = UI._controls[data.id].cb
                if(cb) cb(title, data.index)
            });
        }
    lay.AddChild(layout)
    return lay;
}
// Swicthes
UI.CreateSwitch = function(value, color) {
    color = color || UI.theme.primary
    var size = 0.2
    var text = value?"[fa-toggle-on]":"[fa-toggle-off]"
    var offColor = UI.L?"#9e9e9e":"#616161"
    var clr = value?color:offColor
    var backColor = UI.theme.backColor
    
    var lay = app.CreateButton(text, null, null, "Fontawesome, Custom")
    lay.SetSize(65, 65, "dp")
    lay.SetStyle(backColor, backColor, 50, 0, 0, 0)
    lay.SetMargins(0, -2.5, 0, -5, "dp");
    lay.SetTextSize(30, "dp")
    lay.SetTextColor(clr)
    lay.SetOnPress = lay.SetOnTouch
    lay.data.color = color
    lay.data.checked = value
    lay.data.offColor = offColor

    UI._controls[lay.id] = {onTouch:null}

    lay.SetOnTouch = function(c) {
        UI._controls[this.id].onTouch = c
    }
    lay.GetValue = function() {
        return this.data.checked
    }
    lay.SetValue = function(value) {
        if(!value) {
            this.SetText("[fa-toggle-off]")
            this.SetTextColor(this.data.offColor)
        } else {
            this.SetText("[fa-toggle-on]")
            this.SetTextColor(this.data.color)
        }
        this.data.checked = value
    }
    lay.SetOnPress(function() {
        var checked = this.data.checked
        if(checked) {
            this.SetText("[fa-toggle-off]")
            this.SetTextColor(this.data.offColor)
            this.data.checked = false
        } else {
            this.SetText("[fa-toggle-on]")
            this.SetTextColor(this.data.color)
            this.data.checked = true
        }
        checked = this.data.checked
        if(UI._controls[this.id].onTouch) UI._controls[this.id].onTouch(checked)
    })
    return lay
}
UI.CreateSwitchSettings = function(text, width, height, value, color, backColor) {
    var color = color || UI.theme.primary
    var icon = value?"[fa-toggle-on]":"[fa-toggle-off]"
    var offColor = UI.L?"#9e9e9e":"#616161"
    var clr = value?color:offColor
    var backColor = backColor||UI.theme.backColor
    var w = (width||0) * UI.swdp

    var lay = app.CreateLayout("Linear", "VCenter,Horizontal, Left")
    lay.SetSize(width, height)

    UI._controls[lay.id] = {onTouch:null,checked:value?true:false,color:color,offColor:offColor}
    lay.SetOnTouch = function(c) {
        UI._controls[this.id].onTouch = c
    }
    lay.data.color = color
    lay.data.checked = value
    lay.data.offColor = offColor
    
        var label = MUI.CreateTextParagraph(text||"", null, null, "Left")
        if(width) label.SetSize(w-65, null, "dp")
        label.SetPadding(12.5, 0, 12.5, 0, "dp")
        label.SetEllipsize("end")
        label.SetTextColor(UI.theme.secondaryTextColor)
        lay.AddChild(label)

        var control = app.CreateButton(icon, null, null, "Fontawesome, Custom")
        control.SetSize(65, 65, "dp")
        control.SetStyle(backColor, backColor, 50, 0, 0, 0)
        control.SetMargins(0, -2.5, 0, -5, "dp");
        control.SetTextSize(30, "dp")
        control.SetTextColor(clr)
        control.data.id = lay.id
        control.data.text = text||""
        control.SetOnTouch(function() {
            var x = UI._controls[this.data.id].checked
            this.SetText(x?"[fa-toggle-off]":"[fa-toggle-on]")
            this.SetTextColor(UI._controls[this.data.id][x?"offColor":"color"])
            UI._controls[this.data.id].checked = !x
            if(UI._controls[this.data.id].onTouch) UI._controls[this.data.id].onTouch(this.data.text, !x)
        })
        lay.AddChild(control)
    lay.SetText = control.SetText
    lay.SetTextColor = control.SetTextColor
    lay.GetValue = function() {
        return UI._controls[this.id].checked
    }
    lay.SetValue = function(value) {
        if(value===null) value = UI._controls[this.id].checked
        this.SetText(value?"[fa-toggle-on]":"[fa-toggle-off]")
        this.SetTextColor(UI._controls[this.id][value?"color":"offColor"])
        UI._controls[this.id].checked = value 
    }
    lay.SetEnabled = control.SetEnabled
    return lay
}
// Checkboxes
UI.CreateCheckbox = function(list, width, height, color) {
    var color = color || UI.theme.primary
    var list = list.split(",")
    var backColor = UI.theme.backColor
    
    var lay = app.CreateScroller(width, height, "NoScrollBar")   
    UI._controls[lay.id] = {onTouch:null, checkBoxIndexes:[], checkItems:[], checkBox:[], checkBoxes:[]}
    
    
    lay.SetOnTouch = function(cb) {
        UI._controls[this.id].onTouch = cb
    }
    lay.GetCheckItem = function() {
        var ind = []
        var lst = UI._controls[this.id].checkItems
        for(var i = 0; i<lst.length; i++) {
            if(lst[i] == true) {
               ind.push(i)
            }
        }
        return ind
    }
    lay.CheckItemByIndex = function(indexes) {
        if( !typeof(indexes) ) return null
        var boxes = UI._controls[this.id].checkBox
        if(typeof(indexes) == "string") indexes = indexes.split(",")
        else if(typeof(indexes) == "object") {
            for(var i = 0; i<indexes.length&&indexes[0]; i++) {
               boxes[indexes[i]].SetText("check_box")
               UI._controls[this.id].checkItems[indexes[i]] = true
            }
        } else {
            boxes[indexes].SetText("check_box")
            UI._controls[this.id].checkItems[indexes] = true
        }
    }
    lay.UncheckItemByIndex = function(indexes) {
        if( !typeof(indexes) ) return null
        var boxes = UI._controls[this.id].checkBox
        if(typeof(indexes) == "object") {
            for(var i = 0;  i < indexes.length; i++ ) {
               boxes[indexes[i]].SetText("check_box_outline_blank")
               UI._controls[this.id].checkItems[indexes[i]] = false
            }
        } else {
            boxes[indexes].SetText("check_box_outline_blank")
            UI._controls[this.id].checkItems[indexes] = false
        }
    }
    
    var layout = app.CreateLayout("Linear", "Left")
    layout.SetSize(width, null)
    var box = null
    for(var i = 0; i<list.length&&list[0]; i++) {
        box = app.CreateLayout("Linear", "Horizontal, Left, VCenter")
        box.SetSize(width, UI.Fr(50))
           var checkBox = app.CreateButton("check_box_outline_blank", null, null, "Custom")
           checkBox.SetSize(55, 55, "dp")
           checkBox.SetMargins(0, 3, 0, 0, "dp")
           checkBox.SetTextSize(22)
           checkBox.SetStyle(backColor, backColor, 50, 0, 0, 0)
           checkBox.SetTextColor(color)
           checkBox.SetFontFile(UI.fonts.icon)
           box.AddChild(checkBox)
           
           checkBox.data.id = lay.id
           UI._controls[lay.id].checkBoxIndexes[checkBox.id] = i
           UI._controls[lay.id].checkItems[i] = false
           UI._controls[lay.id].checkBox[i] = checkBox

           checkBox.SetOnTouch(function() {
                var id = this.data.id
                var index = UI._controls[id].checkBoxIndexes[this.id]
                this.GetText() == "check_box" ? this.SetText("check_box_outline_blank") : this.SetText("check_box")
                if(this.GetText() == "check_box") UI._controls[id].checkItems[index] = true
                else UI._controls[id].checkItems[index] = false
                if(UI._controls[id].onTouch) UI._controls[id].onTouch(index, UI._controls[id].checkItems[index])
           })
           
           var text = app.CreateText(list[i].trim()||"", null, null, "Left")
           text.SetSize(width*UI.swdp-55, null, "dp")
           text.SetTextColor(UI.theme.mainTextColor)
           text.SetFontFile(UI.fonts.regular)
           text.SetTextSize(18)
           text.data.id = lay.id
           text.data.index = i
           box.AddChild(text)
           text.SetOnTouchUp(function(e) {
                app.SimulateTouch(UI._controls[this.data.id].checkBox[this.data.index])
            });
        layout.AddChild(box)
    }
    lay.AddChild(layout)
    return lay
}
// Tabs
UI.CreateTabFixed = function(titles, width, height, options, color, animation) {
    titles = titles.split(",");
    color = color || UI.theme.primary;
    backColor = UI.L?"#ffffff":"#212121"
    var no = titles.length;
    var w = width/no;
    animation = animation || false;
    
    var lay = app.CreateLayout("Absolute");
    lay.SetSize(width, height);
    
    UI._controls[lay.id] = {tab: [], layout: [], container: null, callback: null, color: color, lastTouch: null, animation: animation};
    
    lay.SetOnSelect = function(cb) {
        UI._controls[this.id].callback = cb;
    }
    lay.SetActiveTabByIndex = function(index) {
        var border = UI._controls[this.id].tab[index].border;
        var color = UI._controls[this.id].color;
        var con = UI._controls[this.id].tab[index].con;
        var cb = UI._controls[this.id].callback;
        
        con.SetBackColor("#00000000");
        border.SetColor(color);
        UI._controls[this.id].tab[index].title.SetTextColor(color);
        UI._controls[this.id].tab[index].layout.Show();
        if(cb) cb(UI._controls[this.id].tab[index].title.GetText());
        var lastTouch = UI._controls[this.id].lastTouch;
        if(lastTouch) {
            UI._controls[this.id].lastTouch.border.SetColor("#ffffff");
            UI._controls[this.id].lastTouch.title.SetTextColor(UI.colors.grey.darken1);
            UI._controls[this.id].lastTouch.layout.Hide();
        }
        UI._controls[this.id].lastTouch = {
            border: border,
            title: UI._controls[this.id].tab[index].title,
            layout: UI._controls[this.id].tab[index].layout,
            index: index
        };
    }
    lay.GetLayout = function(title) {
       return UI._controls[this.id].layout[title.trim().toLowerCase()];
    }
        var cardLay = app.CreateLayout("Card");
        cardLay.SetElevation(2)
        cardLay.SetCornerRadius(0)
        cardLay.SetMargins(0, 0, 0, 12, "dp");
            var box = app.CreateLayout("Linear", "Horizontal");
            box.SetSize(width);
            box.SetBackColor(backColor);
           
            for(var i=0; i<no&&titles[0]; i++) {
               var con = app.CreateLayout("Linear", "Bottom");
               con.SetSize(w);
               
                    var title = app.CreateText(titles[i].trim(), w);
                    title.SetTextColor(UI.L?UI.colors.grey.darken1:UI.colors.grey.lighten1);
                    title.SetPadding(0, 12.5, 0, 12.5, "dp");
                    title.SetFontFile(UI.fonts.medium);
                    con.AddChild(title);                        
                    title.data.id = lay.id;
                    title.data.index = i;
                    title.SetOnTouch(function(e) {
                        var border = UI._controls[this.data.id].tab[this.data.index].border;
                        var color = UI._controls[this.data.id].color;
                        var con = UI._controls[this.data.id].tab[this.data.index].con;
                        
                        if(e.action == "Down") con.SetBackColor("#10000000");
                        if(e.action == "Move") con.SetBackColor("#00000000");
                        if(e.action == "Up" && UI._controls[this.data.id].lastTouch.index != this.data.index) {
                            var cb = UI._controls[this.data.id].callback;
                            if(cb) cb(this.GetText(), this.data.index);
                            var lastTouch = UI._controls[this.data.id].lastTouch;
                            if(lastTouch) {
                                UI._controls[this.data.id].lastTouch.border.SetColor("#00ffffff");
                                UI._controls[this.data.id].lastTouch.title.SetTextColor(UI.colors.grey.darken1);
                                UI._controls[this.data.id].lastTouch.layout.Hide();
                            }
                            con.SetBackColor("#00000000");
                            border.SetColor(color);
                            this.SetTextColor(color);
                            
                            var layout = UI._controls[this.data.id].tab[this.data.index].layout;
                            var anim = UI._controls[this.data.id].animation;
                            var x = UI._controls[this.data.id].lastTouch.index;
                            if(anim && this.data.index > x) {
                                layout.Animate("SlideFromRight");
                            } else if(anim && this.data.index < x) {
                                layout.Animate("SlideFromLeft");
                            } else if(anim && (this.data.index+1) < x) {
                                layout.Show();
                            } else layout.Show();
                            UI._controls[this.data.id].lastTouch = {
                                border: border,
                                title: this,
                                layout: layout,
                                index: this.data.index
                            };
                        }
                        else if(e.action == "Up") {
                            con.SetBackColor("#00000000");
                        }
                    });

                    var border = app.CreateImage(null, null, null, "fix", 1, 1);
                    border.SetSize(w*UI.swdp, 2, "dp");
                    border.SetColor("#00ffffff");
                    con.AddChild(border);
                box.AddChild(con);
                
                var layout = app.CreateLayout("Linear", options);
                layout.SetPosition(0, 0);
                layout.SetPadding(0, 50, 0, 0, "dp");
                layout.SetSize(width, height-UI.Fr(50));
                layout.Hide();
                lay.AddChild(layout);
                UI._controls[lay.id].layout[titles[i].trim().toLowerCase()] = layout;
                UI._controls[lay.id].tab.push({
                    title: title,
                    border: border,
                    con: con,
                    layout: layout
                });
            }
            cardLay.AddChild(box);
        lay.AddChild(cardLay);
    lay.SetActiveTabByIndex(0);
    return lay;
}
// Menus
UI.CreateMenu = function(list, width, height, position) {
    var lay = app.CreateLayout("Linear", "FillXY,"+position)
    lay.Hide()
    lay.HideLay = lay.Hide
    
    UI._controls[lay.id] = {lay: null, onSelect: null}
    
    lay.SetOnSelect = function(cb) {
        UI._controls[this.id].onSelect = cb
    }
    lay.Show = function() {
        app.AddLayout(this)
        this.Animate("FadeIn")
    }
    lay.Hide = function() {
        this.HideLay()
        app.RemoveLayout(this)
    }
    lay.Destroy = function() {
        app.DestroyLayout(this)
    }
    lay.SetOnTouchUp(function() {
        this.Hide()
    });
    UI._controls[lay.id].lay=lay
    
    var color = UI.theme.backColor;
    var textColor = "#000000";
    if(!UI.L) {
        color = "#424242";
        textColor = "#e0e0e0";
    }
    var box = app.CreateLayout("Card")
    box.SetElevation(10)
    box.SetCornerRadius(8)
    box.SetBackColor(color)
    box.SetMargins(4, 4, 4, 4, "dp")
    box.SetSize(0.55, null)
        var list = app.CreateList(list, null, null)
        list.SetFontFile(UI.fonts.regular)
        list.SetTextMargins(10, 6, 10, 6, "dp")
        list.SetDivider(0, "#00000000")
        list.SetTextColor(textColor)
        list.SetTextSize(16)
        box.AddChild(list)
        list.data.id = lay.id
        list.SetOnTouch(function(a, b, c, d) {
            UI._controls[this.data.id].lay.Hide()
            var cb = UI._controls[this.data.id].onSelect
            if(cb) cb(a, d)
        });
    lay.AddChild(box)
    return lay
}
UI.CreateMenuWithIcon = function(list, width, height, position) {
    var lay = app.CreateLayout("Linear", "FillXY,"+position);
    lay.Hide();
    lay.HideLay = lay.Hide;
    
    UI._controls[lay.id] = {lay: null, onSelect: null, list: []};
    
    lay.SetOnSelect = function(cb) {
        UI._controls[this.id].onSelect = cb;
    }
    lay.Show = function() {
        app.AddLayout(this);
        this.Animate("FadeIn");
    }
    lay.Hide = function() {
        this.HideLay()
        app.RemoveLayout(this);
    }
    lay.Destroy = function() {
        app.DestroyLayout(this);
    }
    lay.SetOnTouchUp(function() {
        this.Hide();
    });
    UI._controls[lay.id].lay=lay;
    
    if(typeof(list)=="string") list = list.split(",")
    
    var color = UI.theme.backColor;
    var textColor = "#000000";
    if(!UI.L) {
        color = "#424242";
        textColor = "#e0e0e0";
    }
        var box = app.CreateLayout("Card");
        box.SetElevation(10);
        box.SetCornerRadius(8);
        box.SetBackColor(color);
        box.SetMargins(4, 4, 4, 4, "dp");
        box.SetSize(0.55, null);
            var ct = app.CreateLayout("Linear", "Left");
                var item;
                for(var i = 0; i<list.length&&list[0]; i++) {
                    item = list[i].split(':');
                    var lst = app.CreateLayout("Linear", "FillX, Horizontal, Left, VCenter");
                    UI._controls[lay.id].list.push(lst);
                        var icon = app.CreateText(item[1].trim()||"");
                        icon.SetTextColor(textColor);
                        icon.SetFontFile(UI.fonts.icon);
                        icon.SetPadding(20, null, null, null, "dp");
                        icon.SetTextSize(18);
                        lst.AddChild(icon);
                        icon.data.id = lay.id;
                        icon.data.index = i;
                        icon.SetOnTouch( function(e) {
                            var row = UI._controls[this.data.id].list[this.data.index];
                            if(e.action == "Down") row.SetBackColor("#10000000");
                            if(e.action == "Move") row.SetBackColor("#00000000");
                            if(e.action == "Up") {
                                row.SetBackColor("#00000000");
                                var cb = UI._controls[this.data.id].onSelect;
                                if(cb) cb(this.GetText(), this.data.index);
                                UI._controls[this.data.id].lay.Hide();
                            }
                        });
                        
                        var txt = app.CreateText(item[0].trim(), 0.45, null, "Left");
                        txt.SetTextColor(textColor);
                        txt.SetPadding(12.5, 12.5, 20, 12.5, "dp");
                        txt.SetFontFile(UI.fonts.regular);
                        txt.SetTextSize(16);
                        lst.AddChild(txt);
                        txt.data.id = lay.id;
                        txt.data.index = i;
                        txt.SetOnTouch( function(e) {
                            var row = UI._controls[this.data.id].list[this.data.index];
                            if(e.action == "Down") row.SetBackColor("#10000000");
                            if(e.action == "Move") row.SetBackColor("#00000000");
                            if(e.action == "Up") {
                                row.SetBackColor("#00000000");
                                var cb = UI._controls[this.data.id].onSelect;
                                if(cb) cb(this.GetText(), this.data.index);
                                UI._controls[this.data.id].lay.Hide();
                            }
                        });
                    ct.AddChild(lst);
                }
            box.AddChild(ct);
        lay.AddChild(box);
    return lay;
}
// Seekbars
UI.CreateSeekBar = function(value, range, width, color) {
    width = width || 1;
    var r = 0.02, r1 = 0.015;
    if(width >= 0.7 && width <= 0.8) {
        r = 0.025; r1 = 0.018;
    } else if(width >= 0.5 && width <= 0.6) {
        r = 0.035; r1 = 0.025;
    } else if(width >= 0.3 && width <= 0.4) {
        r = 0.05; r1 = 0.04;
    } else if(width >= 0.1 && width <= 0.2) {
        r = 0.06; r1 = 0.045;
    }
    
    var w = 1 - (2*r);
    var x1 = r;
    var x2 = 1 - r;
    color = color || UI.theme.primary;
    value = value/range;
    
    var lay = app.CreateImage( null, width, 2*r+0.005);
    
    lay.SetColor("#00000000");
    lay.SetPaintColor(UI.L?UI.colors.grey.lighten2:"#757575");
    lay.SetLineWidth(1);
    lay.DrawLine( x1, 0.5, x2, 0.5 );
    lay.SetPaintColor(color);
    lay.SetLineWidth(3);
    lay.DrawLine( x1, 0.5, value*w, 0.5 );
    lay.DrawCircle( value*w , 0.5, r1 );
    lay.SetAutoUpdate();
    lay.data = {
        color: color,
        w: w,
        value: value * w,
        id: this.id,
        x1: x1,
        x2: x2,
        r: r,
        r1: r1,
        range: range || 1,
        dec: 2
    };
    lay.setOnTouch = lay.SetOnTouch
    lay.setOnTouch( function(e) {
        if(e.X > this.data.x1 && e.X < this.data.x2 && this.IsEnabled()) {
            var x = e.X.toFixed(2);        
            this.Clear();
            this.SetPaintColor(UI.L?UI.colors.grey.lighten2:"#757575");
            this.SetLineWidth(1);
            this.DrawLine( this.data.x1, 0.5, this.data.x2, 0.5 );
            this.SetPaintColor(this.data.color);
            this.SetLineWidth(3);
            this.DrawLine( this.data.x1, 0.5, x, 0.5 );
            this.DrawCircle( x, 0.5, this.data.r );
            this.Update();
            if(e.action == "Up") {
                this.Clear();
                this.SetPaintColor(UI.L?UI.colors.grey.lighten2:"#757575");
                this.SetLineWidth(1);
                this.DrawLine( this.data.x1, 0.5, this.data.x2, 0.5 );
                this.SetPaintColor(this.data.color);
                this.SetLineWidth(3);
                this.DrawLine( this.data.x1, 0.5, x, 0.5 );
                this.DrawCircle( x, 0.5, this.data.r1 );
                this.Update();
                this.data.value = ((((x-this.data.x1) / this.data.w) ) * this.data.range ).toFixed( this.data.dec );
                var cb = UI._controls[this.id].onSelect;
                if(cb) cb(this.data.value); 
            }
        } else if(e.X >= this.data.x2 && e.action == "Up" && this.IsEnabled()) {
            this.Clear();
            this.SetPaintColor(UI.L?UI.colors.grey.lighten2:"#757575");
            this.SetLineWidth(1);
            this.DrawLine( this.data.x1, 0.5, this.data.x2, 0.5 );
            this.SetPaintColor(this.data.color);
            this.SetLineWidth(3);
            this.DrawLine( this.data.x1, 0.5, this.data.x2, 0.5 );
            this.DrawCircle( this.data.x2, 0.5, this.data.r1 );
            this.Update();
            this.data.value = 1 * this.data.range;
            var cb = UI._controls[this.id].onSelect;
            if(cb) cb(this.data.value); 
        } else if(e.X <= this.data.x1 && e.action == "Up" && this.IsEnabled()) {
            this.Clear();
            this.SetPaintColor(UI.L?UI.colors.grey.lighten2:"#757575");
            this.SetLineWidth(1);
            this.DrawLine( this.data.x1, 0.5, this.data.x2, 0.5 );
            this.SetPaintColor(this.data.color);
            this.DrawCircle( this.data.x1, 0.5, this.data.r1 );
            this.Update();
            this.data.value = 0;
            var cb = UI._controls[this.id].onSelect;
            if(cb) cb(this.data.value);
        }
    });
    
    UI._controls[lay.id] = {onSelect:null, onChange:null};
    this.GetValue = function() {
        return this.data.value;
    }
    this.SetValue = function(v) {
        if(v > this.data.range) return;
        var value = v.toFixed(this.data.dec);
        v = v/this.data.range;
        this.Clear();
        this.SetPaintColor( UI.colors.grey.lighten2 );
        this.SetLineWidth(2.5);
        this.DrawLine( this.data.x1, 0.5, this.data.x2, 0.5 );
        this.SetPaintColor(this.data.color);
        this.DrawLine( this.data.x1, 0.5, v, 0.5 );
        this.DrawCircle( v, 0.5, this.data.r1 );
        this.Update();
        this.data.value = value;     
    }
    lay.SetDecimals = function(n) {
        this.data.dec = n;
    }
    lay.SetOnSelect = function(cb) {
        UI._controls[this.id].onSelect = cb;
    }
    lay.SetOnTouch = lay.SetOnSelect
    lay.SetOnChange = function(cb) {
        UI._controls[this.id].onChange = cb;
    }
    return lay;
}
// Pickers
UI.CreateDatePicker = function(yyyy, mm, dd, color) {
    color = color || UI.theme.primary
    var backColor = UI.theme.frgClr
    var width = UI.Fw(310)
    var lay = app.CreateDialog()
    var date = new Date();
    var choosenDate = {
        yyyy: yyyy || date.getFullYear(),
        mm: mm || date.getMonth(),
        dd: dd || date.getDate()
    };
    UI._controls[lay.id] = {
        id: lay.id,
        lay: null,
        datesLayout: null,
        title: null,
        year: null,
        subtitle: null,
        onSelect: null,
        color: color,
        dates: [],
        datesArray: [],
        choosenDate: choosenDate,
        currentDate: {
            yyyy: yyyy || date.getFullYear(),
            mm: mm || date.getMonth()
        },
        choosenDateBtn: null,
        render: function(slide) {
            var id = this.id;
            var y = UI._controls[id].currentDate;
            var x = UI._controls[id].choosenDate;
            
            var currBtn = UI._controls[id].choosenDateBtn;
            if( currBtn) {
                currBtn.SetStyle(UI.theme.frgClr, UI.theme.frgClr, 38, 0, 0, 0);
                currBtn.SetTextColor(UI.theme.mainTextColor);
            }
            
            UI._controls[id].dates = [];
            var day = 1;
            UI._controls[id].datesLayout.Hide();
            UI._controls[id].datesArray.map(function(item, i) {
                item.Hide();
                var id = item.data.id;
                var x = UI._controls[id].currentDate;
                var date = new Date(x.yyyy, x.mm, day);
                if(i<7 && date.getDay()== i) {
                    item.SetText(day);
                    item.Show();
                    UI._controls[id].dates[day] = item;
                    day++;
                } else if(i>6 && date.getMonth() == x.mm) {
                    item.SetText(day);
                    item.Show();
                    UI._controls[id].dates[day] = item;
                    day++;
                }
            });
            UI._controls[id].datesLayout.Animate(slide);
            if(x.mm == y.mm && x.yyyy == y.yyyy) {
                currBtn.SetStyle(currBtn.data.color, currBtn.data.color, 38, 0, 0, 0);
                currBtn.SetTextColor("#ffffff");
            }
        }
    };
    
    lay.SetOnSelect = function(cb) {
        UI._controls[this.id].onSelect = cb;    
    }
    lay.Destroy = function() {
        var self = this
        self = null
    }
    
    UI._controls[lay.id].lay = lay;
    
    var cardLay = app.CreateLayout("Card");
    cardLay.SetCornerRadius(4);

    var layout = app.CreateLayout("Linear", "left");
    layout.SetSize(width, null);
        var layTop = app.CreateLayout("Linear", "Left, VCenter");
        layTop.SetBackColor(color);
        layTop.SetSize(width, UI.Fr(100));
        layTop.SetPadding(25, 0, 25, 0, "dp");
            var yearText = UI.CreateTextH6(choosenDate.yyyy, null, null, "Left", "#ffffff");
            layTop.AddChild(yearText);
            UI._controls[lay.id].yearText = yearText;
            
            var newDate = new Date(choosenDate.yyyy, choosenDate.mm, choosenDate.dd).toDateString().split(" ");
            var dateText = UI.CreateTextH2(newDate[0]+", "+newDate[1]+" "+newDate[2], null, null, "Left", "#ffffff", "Medium");
            layTop.AddChild(dateText);
            UI._controls[lay.id].dateText = dateText;
        layout.AddChild(layTop);

        var monYearLay = app.CreateLayout("Linear", "Horizontal, VCenter");
        monYearLay.SetSize(width, UI.Fr(60));
        monYearLay.SetBackColor(backColor);
            var prevMonBtn = app.CreateButton("keyboard_arrow_left", null, null, "Custom");
            prevMonBtn.SetStyle(backColor, backColor, 50, 0, 0, 0);
            prevMonBtn.SetSize(50, 50, "dp");
            prevMonBtn.SetTextSize(24);
            prevMonBtn.SetMargins(0, 5, 0, 0, "dp");
            prevMonBtn.SetTextColor(UI.theme.mainTextColor);
            prevMonBtn.SetFontFile(UI.fonts.icon);
            monYearLay.AddChild(prevMonBtn);
            prevMonBtn.data.id = lay.id;
            prevMonBtn.SetOnTouch(function() {
                var id = this.data.id;
                var x = UI._controls[id].currentDate;
                x.mm -= 1;
                if(x.mm < 0) {
                    x.mm = 11;
                    x.yyyy -= 1;
                }
                UI._controls[id].monthText.SetText(_mui_obj._months[x.mm]+" "+x.yyyy);
                UI._controls[id].render("SlideFromLeft");
            });
            
            var monthText = UI.CreateTextParagraph(_mui_obj._months[choosenDate.mm]+" "+choosenDate.yyyy);
            monthText.SetSize(width-UI.Fw(120));
            monYearLay.AddChild(monthText);
            UI._controls[lay.id].monthText = monthText;
            
            var nextMonBtn = app.CreateButton("keyboard_arrow_right", null, null, "Custom");
            nextMonBtn.SetStyle(backColor, backColor, 50, 0, 0, 0);
            nextMonBtn.SetSize(50, 50, "dp");
            nextMonBtn.SetTextSize(24);
            nextMonBtn.SetMargins(0, 5, 0, 0, "dp");
            nextMonBtn.SetTextColor(UI.theme.mainTextColor);
            nextMonBtn.SetFontFile(UI.fonts.icon);
            monYearLay.AddChild(nextMonBtn);
            nextMonBtn.data.id = lay.id;
            nextMonBtn.SetOnTouch(function() {
                var id = this.data.id;
                var x = UI._controls[id].currentDate;
                x.mm += 1;
                if(x.mm > 11) {
                    x.mm = 0;
                    x.yyyy += 1;
                }
                UI._controls[id].monthText.SetText(_mui_obj._months[x.mm]+" "+x.yyyy);
                UI._controls[id].render("SlideFromRight");
            });
        layout.AddChild(monYearLay);

        var body = app.CreateLayout("Linear");
        body.SetSize(width, null);
        body.SetBackColor(backColor);
            var layDays = app.CreateLayout("Linear", "Horizontal");
            layDays.SetMargins(0, 0, 0, 30, "dp");
                var DI, days = ["S", "M", "T", "W", "T", "F", "S"];
                for(var i = 0; i < 7; i++) {
                    DI = UI.CreateTextSecondary(days[i], UI.Fw(39), null, "Center", UI.colors.grey.darken1, "Regular");
                    layDays.AddChild(DI);
                }
            body.AddChild(layDays);
            
            var datesLayout = app.CreateLayout("Linear");
            UI._controls[lay.id].datesLayout = datesLayout;
                var x = UI._controls[lay.id].currentDate;
                var day = 1, dt = "", def = null
                
                for(var i = 0; i < 6; i++) {
                    var layDays = app.CreateLayout("Linear", "Horizontal");
                    var daysBtn;
                    for(var j = 0; j<7; j++) {
                        var nowDate = new Date(x.yyyy, x.mm, day);
                        if( nowDate.getMonth() == x.mm && nowDate.getDay()==j) {
                            dt = day;
                            day++;
                        } else if( nowDate.getMonth() != x.mm ){
                            dt = "";
                        }
                        daysBtn = app.CreateButton( dt, null, null, "Custom");
                        daysBtn.SetSize(45, 45, "dp");
                        daysBtn.SetMargins(-3, -2, -3, -2.5, "dp");
                        daysBtn.SetTextColor(UI.theme.mainTextColor);
                        daysBtn.SetTextSize(13, "dp");
                        daysBtn.SetStyle(backColor, backColor, 38, 0, 0, 0);
                        daysBtn.data.id = lay.id;
                        daysBtn.data.color = color;
                        layDays.AddChild(daysBtn);
                        if(dt=="") daysBtn.Hide()
                        else if(dt == choosenDate.dd) {
                            UI._controls[lay.id].choosenDateBtn = daysBtn;
                            daysBtn.SetStyle(color, color, 38, 0, 0, 0);
                        }
                        
                        UI._controls[lay.id].datesArray.push( daysBtn );
                        daysBtn.SetOnTouch(function() {
                            var id = this.data.id;
                            var currBtn = UI._controls[id].choosenDateBtn;
                            currBtn.SetStyle(UI.theme.frgClr, UI.theme.frgClr, 38, 0, 0, 0);
                            currBtn.SetTextColor(UI.theme.mainTextColor);
                            UI._controls[id].choosenDateBtn = this;
                            var color = this.data.color;
                            this.SetStyle(color, color, 38, 0, 0, 0);
                            this.SetTextColor("#ffffff");
                            UI._controls[id].choosenDate = {
                                yyyy: UI._controls[id].currentDate.yyyy,
                                mm: UI._controls[id].currentDate.mm,
                                dd: this.GetText()
                            };
                            var choosenDate = UI._controls[id].choosenDate;
                            var newDate = new Date(choosenDate.yyyy, choosenDate.mm, choosenDate.dd).toDateString().split(" ");
                            UI._controls[id].dateText.SetText(newDate[0]+", "+newDate[1]+" "+newDate[2]);
                            UI._controls[id].yearText.SetText(UI._controls[id].choosenDate.yyyy);
                        });
                    }
                    datesLayout.AddChild(layDays);
                }
                
            UI._controls[lay.id].render("SlideFromRight");
            body.AddChild(datesLayout);
        layout.AddChild(body);
        
        var layBottom = app.CreateLayout("Linear", "Horizontal, Right, VCenter");
        layBottom.SetSize(width, UI.Fr(60));
        layBottom.SetPadding(20, 0, 12, 0, "dp");
        layBottom.SetBackColor(backColor);
            var closeBtn = UI.CreateButtonFlat("CANCEL", null, null, color, backColor);
            layBottom.AddChild(closeBtn);
            closeBtn.data.id = lay.id;
            closeBtn.SetOnTouch(function() {
                UI._controls[this.data.id].lay.Hide();
            });
            
            var okBtn = UI.CreateButtonFlat("OK", null, null, color, backColor);
            layBottom.AddChild(okBtn);
            okBtn.data.id = lay.id;
            okBtn.SetOnTouch(function() {
                var id = this.data.id;
                var cb = UI._controls[this.data.id].onSelect;
                if(cb) {
                    var date = UI._controls[this.data.id].choosenDate;
                    cb(date.yyyy+"-"+date.mm+"-"+date.dd, date.yyyy, date.mm, date.dd);
                }
                UI._controls[this.data.id].lay.Hide();
            });
        layout.AddChild(layBottom);
    cardLay.AddChild(layout);

    lay.AddLayout(cardLay)
    return lay;
}
UI.CreateTimePicker = function(hh, mm, color) {
    color = color || UI.theme.primary;
    var backColor = UI.theme.frgClr
    var lay = app.CreateDialog()
    UI._controls[lay.id] = {
        color: color,
        layout: null,
        cancelBtn: null,
        okBtn: null,
        clockIsHour: true,
        cb: null,
        hhText: null,
        mmText: null,
        amText: null,
        pmText: null,
        backClock: null,
        frontClock: null,
        clockBody: null,
        chosenTime: {
            hh: null,
            mm: null,
            pos: null
        }    
    }
    
    lay.SetOnSelect = function(cb) {
        UI._controls[this.id].cb = cb;    
    }
    lay.Destroy = function() {
        var self = this
        self = null
    }
    
    UI._controls[lay.id].layout = lay;
    
    var width = UI.Fw(300);
    var date = new Date();
    var hour = hh || date.getHours();
    var minutes = mm || date.getMinutes();
    
    var isAM = true;
    if(hour > 12) {
        isAM = false;
        hour = hour - 12;
    }
    if(hour < 10) hour = "0"+hour;
    if(minutes<10) minutes = "0"+minutes;
    if(isAM) UI._controls[lay.id].chosenTime.pos = "AM";
    else UI._controls[lay.id].chosenTime.pos = "PM";
    
    UI._controls[lay.id].chosenTime.hh = hour;
    UI._controls[lay.id].chosenTime.mm = minutes;
    
        var cardLay = app.CreateLayout("Card");
        cardLay.SetElevation(10);
        cardLay.SetCornerRadius(4);
            var box = app.CreateLayout("Linear");
            box.SetBackColor(backColor);
            box.SetSize(width, null);
                var layTop = app.CreateLayout("Linear", "Horizontal, VCenter");
                layTop.SetSize(width, UI.Fr(100));
                layTop.SetBackColor(color);
                layTop.SetMargins(0, 0, 0, 20, "dp");
                    var hhText = app.CreateText(hour+":");
                    hhText.SetTextColor("#ffffff");
                    hhText.SetTextSize(50);
                    hhText.SetFontFile(UI.fonts.regular);
                    layTop.AddChild(hhText);
                    UI._controls[lay.id].hhText = hhText;
                    
                    var mmText = app.CreateText(minutes);
                    mmText.SetTextColor("#ffffff");
                    mmText.SetTextSize(50);
                    mmText.SetFontFile(UI.fonts.regular);
                    layTop.AddChild(mmText);
                    UI._controls[lay.id].mmText = mmText;
                    
                    var lay1 = app.CreateLayout("Linear");
                    lay1.SetMargins(10, 0, 0, 0, "dp");
                        var amText = UI.CreateTextParagraph("AM", null, null, "Left", UI.colors.grey.lighten1, "Medium");
                        amText.SetMargins(0, 0, 0, 5, "dp");
                        lay1.AddChild(amText);
                        amText.data.id = lay.id;
                        UI._controls[lay.id].amText = amText;
                        amText.SetOnTouchUp(function() {
                            var id = this.data.id;
                            var pos = UI._controls[id].chosenTime.pos;
                            if(pos != "AM") {
                                this.SetTextColor("#ffffff");
                                UI._controls[id].pmText.SetTextColor(UI.colors.grey.lighten1);
                                UI._controls[id].chosenTime.pos = "AM";
                            }
                            UI._controls[id].chosenTime.pos = "AM";
                        });
                        
                        var pmText = UI.CreateTextParagraph("PM", null, null, "Left", UI.colors.grey.lighten1, "Medium");
                        lay1.AddChild(pmText);
                        pmText.data.id = lay.id;
                        UI._controls[lay.id].pmText = pmText;
                        pmText.SetOnTouchUp(function() {
                            var id = this.data.id;
                            var pos = UI._controls[id].chosenTime.pos;
                            if(pos != "PM") {
                                this.SetTextColor("#ffffff");
                                UI._controls[id].amText.SetTextColor(UI.colors.grey.lighten1);
                                UI._controls[id].chosenTime.pos = "PM";
                            }
                            UI._controls[id].chosenTime.pos = "PM";
                        });
                        if(isAM) amText.SetTextColor("#ffffff");
                        else pmText.SetTextColor("#ffffff");
                    layTop.AddChild(lay1);
                box.AddChild(layTop);
                
                var clockBody = app.CreateLayout("Linear");
                clockBody.SetSize(252, 252, "dp");
                
                var body = app.CreateLayout("Absolute");
                UI._controls[lay.id].clockBody = body;
                    var backClock = app.CreateImage(null, UI.Fw(252), UI.Fr(252));
                    body.AddChild(backClock);
                    UI._controls[lay.id].backClock = backClock;
                    backClock.SetAutoUpdate(false);
                    
                    var frontClock = app.CreateImage(null, UI.Fw(252), UI.Fr(252));
                    body.AddChild(frontClock);
                    UI._controls[lay.id].frontClock = frontClock;
                    frontClock.SetAutoUpdate(false);
                    frontClock.SetPaintColor(UI.theme.mainTextColor);
                    frontClock.SetTextSize(14); 
                    frontClock.data.id = lay.id;
                    UI.functions.RenderHour(lay.id, true);
                    frontClock.SetOnTouch(function(e) {
                        var id = this.data.id;
                        var angle = Math.atan((0.5-e.Y)/(e.X-0.5));
                        if(e.X<0.5) angle += Math.PI;
                        if(angle<0) angle += (2*Math.PI);
                        if(UI._controls[id].clockIsHour === true) angle = UI.functions.CheckClockTouchAngleHour(angle, id); 
                        else {
                            var min = UI._controls[id].mmText;
                            var mm = 75 - ( (0.5*angle/Math.PI) * 60 ).toFixed(0);
                            if(mm > 59) mm -= 60;
                            if(mm < 10) mm = "0"+mm;
                            min.SetText(mm);
                            UI._controls[id].chosenTime.mm = mm;
                        }
                        
                        var backClock = UI._controls[id].backClock;
                        backClock.Clear();
                        backClock.SetPaintColor(UI.L?"#E0E0E0":"#424242");
                        backClock.DrawCircle(0.5, 0.5, 0.5);
                        backClock.SetPaintColor(color);
                        backClock.DrawCircle(0.5, 0.5, 0.0125);
                        if(e.action == "Move") {
                            backClock.SetPaintColor(color);
                            backClock.SetLineWidth(2);
                            backClock.DrawLine(0.5, 0.5, 0.5+0.45*Math.cos(angle), 0.5-0.45*Math.sin(angle));
                            backClock.DrawCircle(0.5+0.425*Math.cos(angle), 0.5-0.425*Math.sin(angle), 0.07);
                            backClock.Update();
                        }
                        else if(e.action == "Up") {
                            app.Wait(0.25);
                            backClock.SetPaintColor(color);
                            backClock.SetLineWidth(2);
                            backClock.DrawLine(0.5, 0.5, 0.5+0.45*Math.cos(angle), 0.5-0.45*Math.sin(angle));
                            backClock.DrawCircle(0.5+0.425*Math.cos(angle), 0.5-0.425*Math.sin(angle), 0.07);
                            backClock.Update();
                            if(UI._controls[id].clockIsHour) {
                                UI._controls[id].okBtn.SetText("OK");
                                UI._controls[id].cancelBtn.SetText("BACK");
                                UI.functions.RenderMinutes(id);
                                UI._controls[id].clockIsHour = false;
                            }
                        }
                    });
                
                clockBody.AddChild(body);
                box.AddChild(clockBody);
                
                var layBottom = app.CreateLayout("Linear", "Horizontal, Right, VCenter");
                layBottom.SetSize(width, UI.Fr(60));
                layBottom.SetPadding(20, 0, 12, 0, "dp");
                    var closeBtn = UI.CreateButtonFlat("CANCEL", null, null, color, backColor);
                    layBottom.AddChild(closeBtn);
                    closeBtn.data.id = lay.id;
                    UI._controls[lay.id].cancelBtn = closeBtn;
                    closeBtn.SetOnTouch(function() {
                        var id = this.data.id;
                        if(this.GetText() === "CANCEL") {
                            UI._controls[id].layout.Hide();
                        } else {
                            this.SetText("CANCEL");
                            UI._controls[id].okBtn.SetText("NEXT");
                            UI.functions.RenderHour(id);
                            UI._controls[id].clockIsHour = true;
                        }
                    });
                    
                    var okBtn = UI.CreateButtonFlat("NEXT", null, null, color, backColor);
                    layBottom.AddChild(okBtn);
                    okBtn.data.id = lay.id;
                    UI._controls[lay.id].okBtn = okBtn;
                    okBtn.SetOnTouch(function() {
                        var id = this.data.id;
                        var cb = UI._controls[id].cb;
                        if(this.GetText() === "OK" && cb) {
                            var hh = UI._controls[id].chosenTime.hh;
                            var mm = UI._controls[id].chosenTime.mm;
                            var pos = UI._controls[id].chosenTime.pos;
                            UI._controls[id].layout.Hide();
                            cb(hh+":"+mm+" "+pos, hh, mm, pos); 
                        } else if( this.GetText() === "OK" && cb == null ) {
                            UI._controls[id].layout.Hide();
                        } else {
                            this.SetText("OK");
                            UI._controls[id].cancelBtn.SetText("BACK");
                            UI.functions.RenderMinutes(id);
                            UI._controls[id].clockIsHour = false;
                        }
                    });
                box.AddChild(layBottom);
            cardLay.AddChild(box);
        lay.AddLayout(cardLay)
    return lay;
}
UI.CreateColorPicker = function(title) {
    var lay = app.CreateDialog()
    UI._controls[lay.id] = {lay: lay, onSelect:null, onChange:null, colors:[], lastChoosen:null, choosenColor:null, prevGroup:null};
    
    lay.SetOnSelect = function(cb) {
        UI._controls[this.id].onSelect = cb;
    }
    lay.SetOnChange = function(cb) {
        UI._controls[this.id].onChange = cb;
    }
    lay.HideDialog = lay.Hide
    
    var backColor = UI.L?"#ffffff":"#212121";
    var card = app.CreateLayout("Card")
    card.SetElevation(10)
    card.SetCornerRadius(8)
    card.SetBackColor(backColor)
    
        var layout = app.CreateLayout("Linear", "left");
        layout.SetSize(299, null, "dp");
        layout.SetPadding(12, 0, 12, 0, "dp");
            var layTop = app.CreateLayout("Linear", "Left, VCenter, Horizontal");
            layTop.SetSize(275, null, "dp");
            layTop.SetPadding(12.5, 8, 0, 5, "dp");
                var title = UI.CreateTextH6(title||"Pick a color", null, null, "Left", null, "Medium");
                title.SetSize(212.5, null, "dp");
                layTop.AddChild(title);
                
                var saveBtn = app.CreateButton("close", null, null, "Custom")
                saveBtn.SetSize(50, 50, "dp")
                saveBtn.SetTextSize(22)
                saveBtn.SetFontFile(UI.fonts.icon)
                saveBtn.SetTextColor(UI.theme.mainTextColor)
                saveBtn.SetStyle(backColor, backColor, 50, 0, 0, 0)
                layTop.AddChild(saveBtn)
                saveBtn.data.id = lay.id
                saveBtn.SetOnTouch(function() {
                    UI._controls[this.data.id].lay.Hide()
                });
            layout.AddChild(layTop);
            
            var line1 = app.CreateLayout("Linear", "Horizontal, Left");
            line1.SetSize(275, null, "dp");
                line1.AddChild(_createCircleClr(UI.colors.red.red, lay.id, false, "MUI.colors.red"));
                line1.AddChild(_createCircleClr(UI.colors.pink.pink, lay.id, false, "MUI.colors.pink"));
                line1.AddChild(_createCircleClr(UI.colors.purple.purple, lay.id, false, "MUI.colors.purple"));
                line1.AddChild(_createCircleClr(UI.colors.deepPurple.deepPurple, lay.id, false, "MUI.colors.deepPurple"));
                line1.AddChild(_createCircleClr(UI.colors.indigo.indigo, lay.id, false, "MUI.colors.indigo"));
            layout.AddChild(line1);
            var line2 = app.CreateLayout("Linear", "Horizontal, Left");
            line2.SetSize(275, null, "dp");
                line2.AddChild(_createCircleClr(UI.colors.blue.blue, lay.id, false, "MUI.colors.blue"));
                line2.AddChild(_createCircleClr(UI.colors.lightBlue.lightBlue, lay.id, false, "MUI.colors.lightBlue"));
                line2.AddChild(_createCircleClr(UI.colors.cyan.cyan, lay.id, false, "MUI.colors.cyan"));
                line2.AddChild(_createCircleClr(UI.colors.teal.teal, lay.id, false, "MUI.colors.teal"));
                line2.AddChild(_createCircleClr(UI.colors.green.green, lay.id, false, "MUI.colors.green"));
            layout.AddChild(line2);
            var line3 = app.CreateLayout("Linear", "Horizontal, Left");
            line3.SetSize(275, null, "dp");
                line3.AddChild(_createCircleClr(UI.colors.lightGreen.lightGreen, lay.id, false, "MUI.colors.lightGreen"));
                line3.AddChild(_createCircleClr(UI.colors.lime.lime, lay.id, false, "MUI.colors.lime"));
                line3.AddChild(_createCircleClr(UI.colors.yellow.yellow, lay.id, false, "MUI.colors.yellow"));
                line3.AddChild(_createCircleClr(UI.colors.amber.amber, lay.id, false, "MUI.colors.amber"));
                line3.AddChild(_createCircleClr(UI.colors.orange.orange, lay.id, false, "MUI.colors.orange"));
            layout.AddChild(line3);
            var line4 = app.CreateLayout("Linear", "Horizontal, Left");
            line4.SetSize(275, null, "dp");
                line4.AddChild(_createCircleClr(UI.colors.deepOrange.deepOrange, lay.id, false, "MUI.colors.deepOrange"));
                line4.AddChild(_createCircleClr(UI.colors.brown.brown, lay.id, false, "MUI.colors.brown"));
                line4.AddChild(_createCircleClr(UI.colors.grey.grey, lay.id, false, "MUI.colors.grey"));
                line4.AddChild(_createCircleClr(UI.colors.blueGrey.blueGrey, lay.id, false, "MUI.colors.blueGrey"));
            layout.AddChild(line4);
            
            var shadeTxt = MUI.CreateTextSecondary("Select shading");
            shadeTxt.SetMargins(12.5, 0, 0, 0, "dp");
            layout.AddChild(shadeTxt);
            
            var scr = app.CreateScroller(null, null, "NoScrollBar");
            scr.SetSize(275, null, "dp");
                var panel = app.CreateLayout("Linear", "Horizontal, Left");
                panel.SetPadding(0, 2.5, 0, 0, "dp");
                    panel.AddChild(_createCircleClr(UI.colors.red.lighten4, lay.id, true));
                    panel.AddChild(_createCircleClr(UI.colors.red.lighten3, lay.id, true));
                    panel.AddChild(_createCircleClr(UI.colors.red.lighten2, lay.id, true));
                    panel.AddChild(_createCircleClr(UI.colors.red.lighten1, lay.id, true));
                    panel.AddChild(_createCircleClr(UI.colors.red.red, lay.id, true));
                    panel.AddChild(_createCircleClr(UI.colors.red.darken1, lay.id, true));
                    panel.AddChild(_createCircleClr(UI.colors.red.darken2, lay.id, true));
                    panel.AddChild(_createCircleClr(UI.colors.red.darken3, lay.id, true));
                    panel.AddChild(_createCircleClr(UI.colors.red.darken4, lay.id, true));
                scr.AddChild(panel);
            layout.AddChild(scr);
            
            var bLay = app.CreateLayout("Linear", "Right")
            bLay.SetSize(275, null, 'dp')
            bLay.SetPadding(0, 4, 0, 4, 'dp')
                var cBtn = MUI.CreateButtonFlat('DONE',null,null,null,backColor)
                bLay.AddChild(cBtn)
                cBtn.data.id = lay.id
                cBtn.SetOnTouch(function() {
                    UI._controls[this.data.id].lay.Hide()
                    var cb = UI._controls[this.data.id].onSelect
                    if(cb) cb(UI._controls[this.data.id].choosenColor)
                })
            layout.AddChild(bLay)
        card.AddChild(layout)
    lay.AddLayout(card)
    return lay
    
    function _createCircleClr(color, id, final, name) {
        var clr = app.CreateButton("", null, null, "Custom");
        clr.SetSize(55, 55, "dp");
        clr.SetStyle(color, color, 50, 0, 0, 0);
        clr.data.id = id;
        clr.data.color = color;
        clr.data.name = name;
        if(final) {
            clr.SetFontFile(UI.fonts.icon);
            clr.SetTextColor(UI.theme.mainTextColor);
            clr.SetTextSize(20);
            clr.SetOnTouch(function() {
                var lastChoosen = UI._controls[this.data.id].lastChoosen;
                if(lastChoosen) lastChoosen.SetText("");
                UI._controls[this.data.id].lastChoosen = this;
                
                UI._controls[this.data.id].choosenColor = this.data.color;
                this.SetText("check");
                var cb = UI._controls[this.data.id].onChange;
                if(cb) cb(this.data.color);
            });
            UI._controls[id].colors.push(clr);
        } else {
            clr.SetOnTouch(function() {
                var prevGroup = UI._controls[this.data.id].prevGroup;
                if(prevGroup) prevGroup.SetStyle(prevGroup.data.color, prevGroup.data.color, 50, 0, 0, 0);
                UI._controls[this.data.id].prevGroup = this;
                
                this.SetStyle(this.data.color, this.data.color, 50, UI.L?"#000000":"#ffffff", 2, 0);
                var colors = eval(this.data.name);
                var j = 0;
                for(var i in colors) {
                    var clr = UI._controls[this.data.id].colors[j];
                    clr.SetStyle(colors[i], colors[i], 50, 0, 0, 0);
                    clr.data.color = colors[i];
                    j++;
                }
            });
        }
        return clr;
    }
}
// Table
UI.CreateDataTable = function(columns, values, width, height, options) {
    var header = columns
    var lay = app.CreateLayout('Card')
    lay.SetSize(width, height)
    lay.SetCornerRadius(6)
    lay.SetElevation(4)
    
    UI._controls[lay.id] = {onRow: null,onSelect:function(){},slctStat:function(){},_slR:[]}
    UI._controls[lay.id].cb = function(c){
        if(this.onRow) this.onRow(c.split(',').map(parseFloat))
    }
    lay._w = width
    lay._h = height
    
    options = options||''
    if(options) options = options.toLowerCase()
    var box = MUI.CreateLayout("Linear")
    var web = app.CreateWebView(width, height, "NoScrollBar")
    web.SetBackColor(UI.theme.frgClr)
    box.AddChild(web)
    lay.AddChild(box)
    lay._e = web.Execute
    
    var html='<!DOCTYPE html><html lang="en"><head><script src="file:///android_asset/app.js"><\/script><meta charset="UTF-8"><meta name="viewport" content="initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><style>@font-face {font-family: Roboto;src: url('+UI.fonts.regular+");}@font-face {font-family: MaterialIcon; src: url("+(_is_ds?'file:///android_asset/fonts/mui/Icon.ttf':MUI.fonts.icon)+")}body {background-color: "+UI.theme.frgClr+"; height: 100vh; width: 100vw;}* {margin: 0;padding: 0;font-family: Roboto;-webkit-user-select: none; -webkit-touch-callout: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}.icon {font-family: MaterialIcon; font-size: 16px; margin-left: 10px; font-weight: 300; color: "+UI.theme.mainTextColor+";}i.icon {font-style: normal;}.tf {overflow-y: auto; height: 100%;}.tf thead th {position: sticky; top: 0; background-color: "+UI.theme.frgClr+"; font-size: 85%; height: 56px; color: "+UI.theme.mainTextColor+"; z-index:10;}table {width: 100%; border-collapse: collapse;}tbody {overflow-x: hidden; overflow-y: hidden; border-top: 1px solid grey;}td {color: "+UI.theme.secondaryTextColor+";}th, td {text-align: left;padding: 0px 16px; border: 0px; margin: 0px; white-space: nowrap;}tbody tr {border-top: 1px solid "+(UI.L?"#E0E0E0":"#424242")+"; height: 52px;}tbody tr:active {background: "+(UI.L?"#E0E0E0":"#424242")+";}td.num {text-align: right;}table button {font-family: MaterialIcon; height: 56px; width: 56px; border-radius: 0px; background-color: transparent; border: none; font-size: 22px; color: "+UI.theme.primary+'; overflow: hidden; position: relative; display: inline-block;}button:focus {outline: none;}.p-0 {padding:0;}span {position: absolute; background: #fff; transform: translate(-50%, -50%); pointer-events: none; border-radius: 50%; animation: animate 1s linear forwards;}@keyframes animate {0% {width: 0px;height: 0px; opacity: 0.5;}100% {width: 500px;height: 500px;opacity: 0;}}</style></head><body><div class="tf"><table id="tbl"><thead><tr>';
    
    var isSel = options.indexOf('selectable')>-1?true:false
    if(isSel) html += '<th class="p-0"><button id="bth">check_box_outline_blank</button></th>'
    if(typeof header == 'string') header = header.split(',')
    var th='', type='', icon='', onC = '', isNum = 0, el
    for(var i=0; i<header.length; i++){
        th = header[i].split(':')
        icon = ''
        onC = ''
        isNum = false
        if(th[1]) {
            type = th[1].toLowerCase()
            if(type.indexOf('sortable')>-1) {
                icon = '<i id="s-'+i+'" class="icon">arrow_downward</i>'
                isNum = type.indexOf('numeric')>-1?1:0
                onC = 'onclick="SortCol('+i+','+isNum+')"'
            }
        }
        html += '<th '+onC+'>'+th[0]+' '+icon+'</th>'
    }
    html += '</tr></thead><tbody id="tbody">'
    var cl = ''
    values.map(function(row){
        html += '<tr>'
        x = row.split(':')
        if(isSel) html += '<td class="p-0"><button class="btd">check_box_outline_blank</button></td>'
        for(var i=0; i<x.length; i++){
            cl = header[i].toLowerCase().indexOf('numeric')>-1?'class="num"':''
            html+= '<td '+cl+'>'+x[i]+'</td>'
        }
        html += '</tr>'
    })
    
    html += "</tbody></table></div><script>"
    +'var numRows = '+values.length+', numCheck=0, id=\''+lay.id+'\', headers=JSON.parse(\''+JSON.stringify(header)+'\'), selectable='+isSel+';'
    +'function RemoveRow(e){if("number"==typeof e)document.getElementById("tbl").deleteRow(e);else for(var t=e.split(","),o=0;o<t.length;o++)document.getElementById("tbl").deleteRow(t[o]-o+1);numRows--}'
    +'function AppendRow(e){var t,d,n,a=e.split(":"),c=document.createElement("tr");selectable&&((t=document.createElement("td")).className="p-0",(n=document.createElement("button")).className="btd",d=document.createTextNode("check_box_outline_blank"),n.appendChild(d),t.appendChild(n),c.appendChild(t));for(var l=0;l<a.length;l++)(t=document.createElement("td")).className=headers[l].toLowerCase().indexOf("numeric")>-1?"num":"",d=document.createTextNode(a[l]),t.appendChild(d),c.appendChild(t);document.getElementById("tbody").appendChild(c),numRows++}'
    +'function PrependRow(e){var t,d,n,a=e.split(":"),c=document.createElement("tr");selectable&&((t=document.createElement("td")).className="p-0",(n=document.createElement("button")).className="btd",d=document.createTextNode("check_box_outline_blank"),n.appendChild(d),t.appendChild(n),c.appendChild(t));for(var o=0;o<a.length;o++)(t=document.createElement("td")).className=headers[o].toLowerCase().indexOf("numeric")>-1?"num":"",d=document.createTextNode(a[o]),t.appendChild(d),c.appendChild(t);var l=document.getElementById("tbody");l.insertBefore(c,l.childNodes[0]),numRows++}'
    +'function GetCheckRows(){var t=document.querySelectorAll("button.btd"),c="";t.forEach(function(t,e){"check_box"==t.textContent&&(c+=c?","+e:e)}),app.Execute("MUI._controls[\'"+id+"\'].cb(\'"+c+"\')")}'
    +'function SetRows(t){numRows=0,document.getElementById("tbody").textContent="",t=JSON.parse(t);for(var e=0;e<t.length;e++)AppendRow(t[e]);document.getElementById("bth").textContent="check_box_outline_blank",_addL()}'
    +'function _cb(t){let e=t.clientX-t.target.offsetLeft,n=t.clientY-t.target.offsetTop,c=document.createElement("span");(c.style.left=e+"px",c.style.top=n+"px",this.appendChild(c),setTimeout(function(){c.remove()},500),"bth"==this.id)?("check_box"!=this.textContent?(this.textContent="check_box",numCheck=numRows):(this.textContent="check_box_outline_blank",numCheck=0),document.querySelectorAll("button.btd").forEach(function(t){t.textContent=0==numCheck?"check_box_outline_blank":"check_box"})):"check_box"==this.textContent?(this.textContent="check_box_outline_blank",numCheck--,0==numCheck?document.getElementById("bth").textContent="check_box_outline_blank":document.getElementById("bth").textContent="indeterminate_check_box"):(this.textContent="check_box",numCheck++,numCheck==numRows?document.getElementById("bth").textContent="check_box":document.getElementById("bth").textContent="indeterminate_check_box");"check_box_outline_blank"!=document.getElementById("bth").textContent?app.Execute("MUI._controls[\'"+id+"\'].slctStat(true)"):app.Execute("MUI._controls[\'"+id+"\'].slctStat(false)")}'
    +'function _addL(){document.querySelectorAll("button").forEach(function(e){e.removeEventListener("click",_cb),e.addEventListener("click",_cb)})}'
    +'function SortCol(t,e){var n=t;selectable&&t++;var o,r,a,C,d,m,w,s,l,x="arrow_downward"!=document.getElementById("s-"+n).textContent;for(o=document.getElementById("tbl"),a=!0;a;){for(a=!1,r=o.rows,C=1;C<r.length-1;C++)if(w=!1,d=r[C].getElementsByTagName("td")[t],m=r[C+1].getElementsByTagName("td")[t],e){if(s=Number(d.textContent)>Number(m.textContent),l=Number(d.textContent)==Number(m.textContent),s&&x&&!l||!s&&!x&&!l){w=!0;break}}else if(s=d.textContent.toLowerCase()>m.textContent.toLowerCase(),l=d.textContent.toLowerCase()==m.textContent.toLowerCase(),s&&x&&!l||!s&&!x&&!l){w=!0;break}w&&(r[C].parentNode.insertBefore(r[C+1],r[C]),a=!0)}document.getElementById("s-"+n).textContent=x?"arrow_downward":"arrow_upward"}'
    +'_addL()'
    +'<\/script></body></html>'
    web.LoadHtml(html)
    
    lay.AppendRow = function(row) {
        this._e('AppendRow("'+row+'")')
    }
    lay.AddRow = lay.AppendRow
    lay.PrependRow = function(row) {
        this._e('PrependRow(\''+row+'\')')
    }
    lay.RemoveRows = function(i) {
        if(typeof i != 'number') this._e('RemoveRow(\''+i.toString()+'\')')
        else this._e('RemoveRow('+i+')')
    }
    lay.GetSelectedRows = function(cb) {
        UI._controls[this.id].onRow=cb
        this._e('GetCheckRows()')
    }
    // lay.SetOnSelect = function(cb) {
    //     UI._controls[this.id].onSelect=cb
    // }
    lay.SetOnSelectionStatus = function(cb) {
        UI._controls[this.id].slctStat=cb
    }
    lay.SetRows = function(rows) {
        this._e('SetRows(\''+JSON.stringify(rows)+'\')')
    }
    lay._addChild = box.AddChild
    lay.AddFooter = function(type, options, height) {
        height = height||0.09
        var ftr = MUI.CreateLayout(type||'Linear', options||'Horizontal,Right,VCenter')
        ftr.SetBackColor(UI.theme.frgClr)
        ftr.SetSize(this._w, height)
        this.SetSize(this._w, this._h+height)
        this._addChild(MUI.CreateDivider())
        this._addChild(ftr)
        return ftr
    }
    return lay
}
// Pages
UI.CreatePage = function(pageTitle, icon, iconPosition, layoutOptions) {
    return new CreatePage(pageTitle, icon, iconPosition, layoutOptions);
    function CreatePage(pageTitle, icon, iconPosition, layoutOptions) {
        this.Page = MUI.CreateLayout( "Absolute", "FillXY" )
            var scroller = app.CreateScroller(null, null, "NoScrollBar");
            scroller.SetSize(1, 1)
                this.Layout = MUI.CreateLayout("Linear", layoutOptions);
                 this.Layout.SetSize(1, 1);
                this.Layout.SetPadding(0, 55, 0, 0, "dp");
                scroller.AddChild(this.Layout);
            this.Page.AddChild(scroller);
            
            var lay = MUI.CreateLayout("Card")
            lay.SetElevation(5)
            lay.SetCornerRadius(0)
                var header = app.CreateLayout( "Linear", "VCenter, Left, Horizontal");
                header.SetSize(1, UI.Fr(55))
                    var bck = UI.L?"#ffffff":"#212121"
                    this.Icon = app.CreateButton(icon, null, null, "Custom")
                    this.Icon.SetTextSize(24, "dp")
                    this.Icon.SetMargins( 4, 3, 4, 0, "dp")
                    this.Icon.SetSize(55, 55, "dp")
                    this.Icon.SetFontFile(UI.fonts.icon)
                    this.Icon.SetTextColor(UI.theme.mainTextColor)
                    this.Icon.SetStyle(bck, bck, 50, 0, 0, 0)
                
                    this.PageTitle = app.CreateText(pageTitle, -1, -1, "Left")
                    this.PageTitle.SetSize(UI.swdp-63, null, "dp")
                    this.PageTitle.SetTextSize(22)
                    this.PageTitle.SetFontFile(UI.fonts.bold)
                    this.PageTitle.SetTextColor(UI.theme.mainTextColor)
                    this.PageTitle.SetEllipsize("end")
                
                    if(iconPosition.toLowerCase() == "left") {
                        header.AddChild(this.Icon)
                        header.AddChild(this.PageTitle)
                    } else {
                        this.PageTitle.SetPadding(25, 0, 10, 0, "dp");
                        header.AddChild(this.PageTitle)
                        header.AddChild(this.Icon)
                    }
                lay.AddChild(header)
            this.Page.AddChild(lay)
    }
}
// Miscellaneous
UI.CreateDivider = function (px, w) {
    var px = px || 2;
    s = app.CreateImage(null, null, null, "fix", 1, 1)
    s.SetSize(w || UI.sw, px, "px")
    s.SetColor(UI.L?"#E0E0E0":"#424242")
    return s
}
UI.DpToPx = function(dp) {
    return (this.dp*dp)/160;
}
UI.Fr = function(dp) {
    return ((this.dp*dp)/160)/this.sh;
}
UI.Fw = function(dp) {
    return ((this.dp*dp)/160)/this.sw;
}
UI.CreateLightColor = function(color) {
    if(color.length==7) color = color.replace("#", "#ff");
    color = color.replace("#ff", "#40");
    return color;
}
String.prototype.toFontName = function() {
    var str = this.charAt(0).toUpperCase() + this.slice(1).toLocaleLowerCase();
    return _is_ds?"/Sys/fonts/mui/"+str.trim()+ ".ttf":"Fonts/"+str.trim()+".ttf"
}

UI.functions = {
    CheckClockTouchAngleHour: function(angle, id) {
        if( angle > (Math.PI/12) && angle < (Math.PI/4) ) {
            angle = Math.PI/6;
            UI._controls[id].hhText.SetText("02:");
            UI._controls[id].chosenTime.hh = "02";
        }
        else if(angle > (Math.PI/4) && angle < (5*Math.PI/12)) {
            angle = Math.PI/3;
            UI._controls[id].hhText.SetText("01:");
            UI._controls[id].chosenTime.hh = "01";
        }
        else if(angle > (5*Math.PI/12) && angle < (7*Math.PI/12)) {
            angle = Math.PI/2;
            UI._controls[id].hhText.SetText("12:");
            UI._controls[id].chosenTime.hh = "12";
        }
        else if(angle > (7*Math.PI/12) && angle < (9*Math.PI/12)) {
            angle = 2*Math.PI/3;
            UI._controls[id].hhText.SetText("11:");
            UI._controls[id].chosenTime.hh = "11";
        }
        else if(angle > (9*Math.PI/12) && angle < (11*Math.PI/12)) {
            angle = 5*Math.PI/6;
            UI._controls[id].hhText.SetText("10:");
            UI._controls[id].chosenTime.hh = "10";
        }
        else if(angle > (11*Math.PI/12) && angle < (13*Math.PI/12)) {
            angle = Math.PI;
            UI._controls[id].hhText.SetText("09:");
            UI._controls[id].chosenTime.hh = "09";
        }
        else if(angle > (13*Math.PI/12) && angle < (15*Math.PI/12)) {
            angle = 7*Math.PI/6;
            UI._controls[id].hhText.SetText("08:");
            UI._controls[id].chosenTime.hh = "08";
        }
        else if(angle > (15*Math.PI/12) && angle < (17*Math.PI/12)) {
            angle = 4*Math.PI/3;
            UI._controls[id].hhText.SetText("07:");
            UI._controls[id].chosenTime.hh = "07";
        }
        else if(angle > (17*Math.PI/12) && angle < (19*Math.PI/12)) {
            angle = 3*Math.PI/2;
            UI._controls[id].hhText.SetText("06:");
            UI._controls[id].chosenTime.hh = "06";
        }
        else if(angle > (19*Math.PI/12) && angle < (21*Math.PI/12)) {
            angle = 5*Math.PI/3;
            UI._controls[id].hhText.SetText("05:");
            UI._controls[id].chosenTime.hh = "05";
        }
        else if(angle > (21*Math.PI/12) && angle < (23*Math.PI/12)) {
            angle = 11*Math.PI/6;
            UI._controls[id].hhText.SetText("04:");
            UI._controls[id].chosenTime.hh = "04";
        }
        else {
            angle = 0;
            UI._controls[id].hhText.SetText("03:");
            UI._controls[id].chosenTime.hh = "03";
        } 
        return angle;
    },
    RenderHour: function(id, anim) {
        var frontClock = UI._controls[id].frontClock;
        var backClock = UI._controls[id].backClock;
        var clockBody = UI._controls[id].clockBody;
        backClock.Clear();
        frontClock.Clear();
        angle = (93*(Math.PI/180));
        frontClock.DrawText( "12", 0.4875+0.425*Math.cos(angle), 0.5-0.41*Math.sin(angle) );
        angle = (60*(Math.PI/180));
        frontClock.DrawText( "1", 0.4875+0.425*Math.cos(angle), 0.5-0.41*Math.sin(angle) );
        angle = (29*(Math.PI/180));
        frontClock.DrawText( "2", 0.4875+0.425*Math.cos(angle), 0.5-0.41*Math.sin(angle) );
        angle = (358*(Math.PI/180));
        frontClock.DrawText( "3", 0.4875+0.425*Math.cos(angle), 0.5-0.41*Math.sin(angle) );
        angle = (327.5*(Math.PI/180));
        frontClock.DrawText( "4", 0.4875+0.43*Math.cos(angle), 0.5-0.43*Math.sin(angle) );
        angle = (297*(Math.PI/180));
        frontClock.DrawText( "5", 0.4875+0.45*Math.cos(angle), 0.525-0.4*Math.sin(angle) );
        angle = (269.5*(Math.PI/180));
        frontClock.DrawText( "6", 0.4875+0.425*Math.cos(angle), 0.5-0.44*Math.sin(angle) );
        angle = (238*(Math.PI/180));
        frontClock.DrawText( "7", 0.4875+0.42*Math.cos(angle), 0.5-0.46*Math.sin(angle) );
        angle = (212*(Math.PI/180));
        frontClock.DrawText( "8", 0.5+0.455*Math.cos(angle), 0.5-0.425*Math.sin(angle) );
        angle = (180*(Math.PI/180));
        frontClock.DrawText( "9", 0.5+0.45*Math.cos(angle), 0.5125 );
        angle = (153*(Math.PI/180));
        frontClock.DrawText( "10", 0.5+0.455*Math.cos(angle), 0.5-0.425*Math.sin(angle) );
        angle = (123*(Math.PI/180));
        frontClock.DrawText( "11", 0.5+0.455*Math.cos(angle), 0.5-0.425*Math.sin(angle) );
        
        //backClock render
        var hour = UI._controls[id].chosenTime.hh;
        backClock.SetPaintColor(UI.L?"#e0e0e0":"#424242");
        backClock.DrawCircle(0.5, 0.5, 0.5);
        backClock.SetPaintColor(UI._controls[id].color);
        backClock.DrawCircle(0.5, 0.5, 0.0125);
        backClock.SetLineWidth(2);
        var angle = 450 - (hour * (360/12));
        angle = angle*(Math.PI/180);
        backClock.DrawLine(0.5, 0.5, 0.5+0.45*Math.cos(angle), 0.5-0.45*Math.sin(angle));
        backClock.DrawCircle(0.5+0.425*Math.cos(angle), 0.5-0.425*Math.sin(angle), 0.07);
        if(anim) {
            clockBody.Animate("ZoomInEnter");
        }
        frontClock.Update();
        backClock.Update();
    },
    RenderMinutes: function(id) {
        var frontClock = UI._controls[id].frontClock;
        var backClock = UI._controls[id].backClock;
        var clockBody = UI._controls[id].clockBody;
        backClock.Clear();
        frontClock.Clear();
        angle = (92*(Math.PI/180));
        frontClock.DrawText( "0", 0.5+0.4*Math.cos(angle), 0.5-0.41*Math.sin(angle) );
        angle = (60*(Math.PI/180));
        frontClock.DrawText( "5", 0.48+0.425*Math.cos(angle), 0.5-0.41*Math.sin(angle) );
        angle = (29*(Math.PI/180));
        frontClock.DrawText( "10", 0.4875+0.4*Math.cos(angle), 0.5-0.41*Math.sin(angle) );
        angle = (358*(Math.PI/180));
        frontClock.DrawText( "15", 0.495+0.4*Math.cos(angle), 0.5-0.41*Math.sin(angle) );
        angle = (327.5*(Math.PI/180));
        frontClock.DrawText( "20", 0.4875+0.42*Math.cos(angle), 0.5-0.43*Math.sin(angle) );
        angle = (297*(Math.PI/180));
        frontClock.DrawText( "25", 0.4875+0.425*Math.cos(angle), 0.525-0.405*Math.sin(angle) );
        angle = (270*(Math.PI/180));
        frontClock.DrawText( "30", 0.47, 0.5-0.44*Math.sin(angle) );
        angle = (235*(Math.PI/180));
        frontClock.DrawText( "35", 0.49+0.41*Math.cos(angle), 0.5-0.475*Math.sin(angle) );
        angle = (212*(Math.PI/180));
        frontClock.DrawText( "40", 0.5+0.475*Math.cos(angle), 0.5-0.425*Math.sin(angle) );
        angle = (180*(Math.PI/180));
        frontClock.DrawText( "45", 0.5+0.455*Math.cos(angle), 0.515 );
        angle = (153*(Math.PI/180));
        frontClock.DrawText( "50", 0.5+0.45*Math.cos(angle), 0.5-0.425*Math.sin(angle) );
        angle = (123*(Math.PI/180));
        frontClock.DrawText( "55", 0.5+0.45*Math.cos(angle), 0.5-0.42*Math.sin(angle) );
        
        //backClock render
        var minute = UI._controls[id].chosenTime.mm;
        backClock.SetPaintColor(UI.L?"#E0E0E0":"#424242");
        backClock.DrawCircle(0.5, 0.5, 0.5);
        backClock.SetPaintColor(UI._controls[id].color);
        backClock.DrawCircle(0.5, 0.5, 0.0125);
        backClock.SetLineWidth(2);
        var angle = 450 - (minute * (360/60));
        angle = angle*(Math.PI/180);
        backClock.DrawLine(0.5, 0.5, 0.5+0.45*Math.cos(angle), 0.5-0.45*Math.sin(angle));
        backClock.DrawCircle(0.5+0.425*Math.cos(angle), 0.5-0.425*Math.sin(angle), 0.07);
        
        clockBody.Animate("ZoomInEnter");
        
        frontClock.Update();
        backClock.Update();
    }
}

UI.darkColors = ["#78909c", "#8d6e63", "#ff7043", "#ffa726", "#ffca28", "#66bb6a", "#26a69a", "#26c6da", "#29b6f6", "#42a5f5", "#5c6bc0", "#7e57c2", "#ab47bc", "#ec407a", "#ef5350", "#e53935", "#d32f2f", "#c62828", "#b71c1c", "#f44336", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20", "#4285F4", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1", "#9e9e9e", "#757575", "#616161", "#424242", "#212121", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064", "#009688", "#00897b", "#00796b", "#00695c", "#004d40", "#8bc34a", "#7cb342", "#689f38", "#558b2f", "#33691e", "#cddc39", "#c0ca33", "#afb42b", "#9e9d24", "#827717", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c", "#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238"];
UI.colors={primary:"#4285F4",secondary:"#90a4ae",light:"#eeeeee",dark:"#3E4551",white:"#ffffff",black:"#000000",transparent:"#00000000",red:{lighten4:"#ffcdd2",lighten1:"#ef5350",lighten3:"#ef9a9a",lighten2:"#e57373",red:"#f44336",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c"},green:{lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",green:"#4caf50",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20"},blue:{lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",blue:"#4285F4",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1"},grey:{lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",grey:"#9e9e9e",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},pink:{lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",pink:"#e91e63",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f"},purple:{lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",purple:"#9c27b0",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c"},deepPurple:{lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",deepPurple:"#673ab7",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92"},indigo:{lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",indigo:"#3f51b5",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e"},lightBlue:{lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",lightBlue:"#03a9f4",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b"},cyan:{lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",cyan:"#00bcd4",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064"},teal:{lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",teal:"#009688",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40"},lightGreen:{lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",lightGreen:"#8bc34a",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e"},lime:{lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",lime:"#cddc39",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717"},yellow:{lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",yellow:"#ffeb3b",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17"},amber:{lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",amber:"#ffc107",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00"},orange:{lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",orange:"#ff9800",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100"},deepOrange:{lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",deepOrange:"#ff5722",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c"},brown:{lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",brown:"#795548",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",blueGrey:"#607d8b",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"}};
UI.colors.gray = UI.colors.grey
UI.colors.blueGray = UI.colors.blueGrey

var MUI = UI;

app.InitializeUIKit()
