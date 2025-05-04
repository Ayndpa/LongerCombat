
simpleFrameworks.addto('iModOptions', 'longerCombatConfig');
simpleFrameworks.addto('iModFooter', 'longerCombat');

// 保存配置到本地存储
window.saveLongerCombatConfig = function() {
    try {
        localStorage.setItem('longerCombatConfig', JSON.stringify(State.variables.iModConfigs.longerCombat));
    } catch (e) {
        console.error('保存配置失败:', e);
    }
};

// 读取本地存储的配置
window.loadLongerCombatConfig = function() {
    try {
        const data = localStorage.getItem('longerCombatConfig');
        if (data) {
            State.variables.iModConfigs.longerCombat = Object.assign(
                {},
                State.variables.iModConfigs.longerCombat,
                JSON.parse(data)
            );
        }
    } catch (e) {
        console.error('读取配置失败:', e);
    }
};

// 页面加载时自动读取
if (window.loadLongerCombatConfig) {
    loadLongerCombatConfig();
}

$(document).one(":passageinit", () => {
    if (State.variables.iModConfigs.longerCombat && State.variables.iModConfigs.longerCombat.saved) {
        saveLongerCombatConfig();
        State.variables.iModConfigs.longerCombat.saved = false;
    }
 });