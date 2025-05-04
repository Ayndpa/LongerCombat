simpleFrameworks.addto("iModOptions", "longerCombatConfig");
simpleFrameworks.addto("iModFooter", "longerCombat");

const CONFIG_KEY = "longerCombatConfig";

// 保存配置到本地存储
function saveLongerCombatConfig() {
  try {
    localStorage.setItem(
      CONFIG_KEY,
      JSON.stringify(State.variables.iModConfigs.longerCombat)
    );
  } catch (e) {
    console.error("保存配置失败:", e);
  }
}

// 读取本地存储的配置
function loadLongerCombatConfig() {
  try {
    const data = localStorage.getItem(CONFIG_KEY);
    if (data) {
      Object.assign(
        State.variables.iModConfigs.longerCombat,
        JSON.parse(data)
      );
    }
  } catch (e) {
    console.error("读取配置失败:", e);
  }
}

// 页面加载时自动读取
$(document).on(":passageinit", () => {
  // Ensure the config object exists
  if (!State.variables.iModConfigs.longerCombat) {
    State.variables.iModConfigs.longerCombat = {};
  }
  const config = State.variables.iModConfigs.longerCombat;
  if (config?.saved) {
    saveLongerCombatConfig();
    config.saved = false;
  } else if (!config?.loaded) {
    loadLongerCombatConfig();
    config.loaded = true;
  }
});