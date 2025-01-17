import React from "react"
import { useTranslation } from "react-i18next"
import { useAtom } from "jotai"
import { configSidebarVisibleAtom } from "../atoms/sidebarState"
import ModelConfigForm from "./ModelConfigForm"
import { interfaceAtom, updateProviderAtom } from "../atoms/interfaceState"
import { configAtom } from "../atoms/configState"
import CustomInstructions from "./CustomInstructions"

const ConfigSidebar = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useAtom(configSidebarVisibleAtom)
  const [{ provider, fields }] = useAtom(interfaceAtom)
  const [, updateProvider] = useAtom(updateProviderAtom)
  const [config] = useAtom(configAtom)

  const handleSubmit = async (formData: Record<string, any>) => {
    try {
      const response = await fetch("/api/config/model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model_settings: {
            ...formData,
            modelProvider: provider.startsWith("openai") ? "openai" : provider,
          }
        }),
      })

      const data = await response.json()
      if (data.success) {
        alert(t("setup.saveSuccess"))
        window.location.reload()
      }
    } catch (error) {
      console.error("Failed to save config:", error)
      alert(t("setup.saveFailed"))
    }
  }

  return (
    <div className={`config-sidebar ${isVisible ? "visible" : ""}`}>
      <div className="config-header">
        <h2>{t("modelConfig.title")}</h2>
        <button 
          className="close-btn"
          onClick={() => setIsVisible(false)}
          title={t("common.close")}
        >
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        </button>
      </div>
      <div className="config-content">
        <ModelConfigForm
          provider={provider}
          fields={fields}
          initialData={config}
          onProviderChange={updateProvider}
          onSubmit={handleSubmit}
        />
        <div className="divider" />
        <CustomInstructions />
      </div>
    </div>
  )
}

export default React.memo(ConfigSidebar) 