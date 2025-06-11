// FiveM Menu Enhanced Script
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")
  const menuContainer = document.querySelector(".mod-menu-container")
  const footer = document.querySelector(".mod-menu-footer")
  const headerBanner = document.querySelector(".header-banner")
  const headerCurrentTab = document.querySelector(".header-current-tab span")
  const pageCounter = document.querySelector(".page-counter span")
  const toggleBtn = document.getElementById("toggleMenuBtn")

  // Enhanced submenu configurations with more options
  const submenuMap = {
    self: [
      { text: "God Mode", icon: "fas fa-shield-alt", type: "toggle", value: false, description: "Become invincible" },
      {
        text: "Invisible",
        icon: "fas fa-eye-slash",
        type: "toggle",
        value: false,
        description: "Hide from other players",
      },
      {
        text: "Super Jump",
        icon: "fas fa-arrow-up",
        type: "toggle",
        value: false,
        description: "Jump higher than normal",
      },
      { text: "Fast Run", icon: "fas fa-running", type: "toggle", value: false, description: "Increase running speed" },
      {
        text: "No Fall Damage",
        icon: "fas fa-feather",
        type: "toggle",
        value: false,
        description: "Prevent fall damage",
      },
      {
        text: "Infinite Stamina",
        icon: "fas fa-battery-full",
        type: "toggle",
        value: false,
        description: "Never get tired",
      },
      {
        text: "Super Swim",
        icon: "fas fa-swimmer",
        type: "toggle",
        value: false,
        description: "Swim faster underwater",
      },
      {
        text: "Freeze Player",
        icon: "fas fa-snowflake",
        type: "toggle",
        value: false,
        description: "Freeze your character",
      },
    ],
    online: [
      {
        text: "Show All Players",
        icon: "fas fa-users",
        type: "toggle",
        value: true,
        description: "Display all online players",
      },
      {
        text: "Block Messages",
        icon: "fas fa-comment-slash",
        type: "toggle",
        value: false,
        description: "Block chat messages",
      },
      { text: "Spectate Mode", icon: "fas fa-eye", type: "toggle", value: false, description: "Watch other players" },
      { text: "Player List", icon: "fas fa-list", type: "action", description: "View player information" },
      {
        text: "Teleport to Player",
        icon: "fas fa-location-arrow",
        type: "action",
        description: "Teleport to selected player",
      },
      { text: "Kick Player", icon: "fas fa-user-times", type: "action", description: "Remove player from server" },
    ],
    combat: [
      {
        text: "No Recoil",
        icon: "fas fa-crosshairs",
        type: "toggle",
        value: false,
        description: "Remove weapon recoil",
      },
      {
        text: "Infinite Ammo",
        icon: "fas fa-infinity",
        type: "toggle",
        value: false,
        description: "Unlimited ammunition",
      },
      { text: "Rapid Fire", icon: "fas fa-fire", type: "toggle", value: false, description: "Increase fire rate" },
      {
        text: "One Shot Kill",
        icon: "fas fa-skull",
        type: "toggle",
        value: false,
        description: "Kill enemies with one shot",
      },
      { text: "Aimbot", icon: "fas fa-bullseye", type: "toggle", value: false, description: "Auto-aim assistance" },
      {
        text: "Explosive Bullets",
        icon: "fas fa-bomb",
        type: "toggle",
        value: false,
        description: "Bullets explode on impact",
      },
      { text: "Give All Weapons", icon: "fas fa-tools", type: "action", description: "Spawn all weapons" },
    ],
    visual: [
      { text: "Night Vision", icon: "fas fa-moon", type: "toggle", value: false, description: "See in the dark" },
      {
        text: "Thermal Vision",
        icon: "fas fa-thermometer",
        type: "toggle",
        value: false,
        description: "Heat signature vision",
      },
      {
        text: "ESP Players",
        icon: "fas fa-search",
        type: "toggle",
        value: false,
        description: "See players through walls",
      },
      {
        text: "ESP Vehicles",
        icon: "fas fa-car",
        type: "toggle",
        value: false,
        description: "See vehicles through walls",
      },
      { text: "Crosshair", icon: "fas fa-plus", type: "toggle", value: false, description: "Display crosshair" },
      { text: "Remove HUD", icon: "fas fa-tv", type: "toggle", value: false, description: "Hide game interface" },
      { text: "Weather Control", icon: "fas fa-cloud-sun", type: "action", description: "Change weather conditions" },
    ],
    vehicle: [
      {
        text: "God Vehicle",
        icon: "fas fa-shield-alt",
        type: "toggle",
        value: false,
        description: "Invincible vehicle",
      },
      {
        text: "Super Speed",
        icon: "fas fa-tachometer-alt",
        type: "toggle",
        value: false,
        description: "Increase vehicle speed",
      },
      {
        text: "Rainbow Paint",
        icon: "fas fa-palette",
        type: "toggle",
        value: false,
        description: "Cycling paint colors",
      },
      { text: "Fly Mode", icon: "fas fa-plane", type: "toggle", value: false, description: "Make vehicle fly" },
      {
        text: "No Collision",
        icon: "fas fa-ghost",
        type: "toggle",
        value: false,
        description: "Drive through objects",
      },
      { text: "Spawn Vehicle", icon: "fas fa-plus-circle", type: "action", description: "Spawn any vehicle" },
      { text: "Repair Vehicle", icon: "fas fa-wrench", type: "action", description: "Fix current vehicle" },
      { text: "Flip Vehicle", icon: "fas fa-undo", type: "action", description: "Flip vehicle upright" },
    ],
    misc: [
      {
        text: "Teleport Waypoint",
        icon: "fas fa-map-marker-alt",
        type: "action",
        description: "Teleport to map waypoint",
      },
      { text: "Spawn Money", icon: "fas fa-dollar-sign", type: "action", description: "Add money to account" },
      { text: "Change Time", icon: "fas fa-clock", type: "action", description: "Modify game time" },
      { text: "Suicide", icon: "fas fa-skull-crossbones", type: "action", description: "Kill your character" },
      { text: "Heal Player", icon: "fas fa-heart", type: "action", description: "Restore full health" },
      { text: "Clear Wanted Level", icon: "fas fa-star", type: "action", description: "Remove police wanted level" },
    ],
    destructive: [
      {
        text: "Explosive Ammo",
        icon: "fas fa-bomb",
        type: "toggle",
        value: false,
        description: "Bullets cause explosions",
      },
      { text: "Nuke All", icon: "fas fa-radiation", type: "action", description: "Destroy everything nearby" },
      { text: "Kill All NPCs", icon: "fas fa-skull", type: "action", description: "Eliminate all NPCs" },
      { text: "Destroy All Vehicles", icon: "fas fa-car-crash", type: "action", description: "Wreck all vehicles" },
      { text: "Crash Server", icon: "fas fa-server", type: "action", description: "Force server restart" },
    ],
    triggers: [
      {
        text: "Auto Heal",
        icon: "fas fa-plus-square",
        type: "toggle",
        value: false,
        description: "Automatic health restoration",
      },
      {
        text: "Auto Armor",
        icon: "fas fa-shield",
        type: "toggle",
        value: false,
        description: "Automatic armor restoration",
      },
      {
        text: "Auto Repair",
        icon: "fas fa-tools",
        type: "toggle",
        value: false,
        description: "Automatic vehicle repair",
      },
      { text: "Anti-AFK", icon: "fas fa-mouse", type: "toggle", value: false, description: "Prevent AFK detection" },
      {
        text: "Speed Boost",
        icon: "fas fa-rocket",
        type: "toggle",
        value: false,
        description: "Temporary speed increase",
      },
    ],
    settings: [
      {
        text: "Show FPS",
        icon: "fas fa-tachometer-alt",
        type: "toggle",
        value: true,
        description: "Display frame rate",
      },
      {
        text: "Show Coordinates",
        icon: "fas fa-map",
        type: "toggle",
        value: false,
        description: "Display position coordinates",
      },
      {
        text: "Enable Notifications",
        icon: "fas fa-bell",
        type: "toggle",
        value: true,
        description: "Show menu notifications",
      },
      {
        text: "Auto-Save Settings",
        icon: "fas fa-save",
        type: "toggle",
        value: true,
        description: "Automatically save preferences",
      },
      {
        text: "Menu Transparency",
        icon: "fas fa-adjust",
        type: "slider",
        value: 90,
        description: "Adjust menu opacity",
      },
      { text: "Reset All Settings", icon: "fas fa-undo-alt", type: "action", description: "Restore default settings" },
    ],
  }

  let currentTabKey = "self"
  let isMenuVisible = true
  let currentSubmenuOptions = []
  let activeSubmenuIndex = 0

  // Sound effects (if available in FiveM)
  const playSound = (soundName) => {
    try {
      // FiveM sound trigger
      if (typeof SendNUIMessage !== "undefined") {
        SendNUIMessage({
          type: "playSound",
          sound: soundName,
        })
      }
    } catch (e) {
      // Fallback for testing outside FiveM
      console.log(`Playing sound: ${soundName}`)
    }
  }

  // Initialize menu
  const initializeMenu = () => {
    if (tabs.length > 0) {
      tabs[0].click()
    }

    // Add keyboard event listeners
    document.addEventListener("keydown", handleKeyPress)

    // Add mouse event listeners for dragging
    initializeDragging()

    // Initialize toggle button
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleMenu)
    }

    // Add visual enhancements
    addVisualEnhancements()
  }

  // Tab switching functionality
  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => {
      playSound("tab_switch")

      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"))
      tab.classList.add("active")
      tab.focus()

      // Hide all tab contents
      tabContents.forEach((cont) => cont.classList.remove("active"))

      // Show selected tab content
      const target = tab.dataset.tab + "-tab"
      const tabContent = document.getElementById(target)
      if (tabContent) {
        tabContent.classList.add("active")
      }

      currentTabKey = tab.dataset.tab

      // Update header current tab
      if (headerCurrentTab) {
        const tabText = tab.querySelector(".tab-text").textContent.trim()
        headerCurrentTab.textContent = tabText.toUpperCase()
      }

      // Update page counter
      if (pageCounter) {
        pageCounter.textContent = `${idx + 1}/${tabs.length}`
      }
    })
  })

  // Enhanced keyboard navigation
  const handleKeyPress = (event) => {
    if (!document.querySelector(".submenu-overlay")) {
      handleMainMenuKeys(event)
    } else {
      handleSubmenuKeys(event)
    }
  }

  const handleMainMenuKeys = (event) => {
    const tabsArr = Array.from(tabs)
    const currentActiveIndex = tabsArr.findIndex((tab) => tab.classList.contains("active"))

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault()
        if (currentActiveIndex < tabsArr.length - 1) {
          tabsArr[currentActiveIndex + 1].click()
        }
        break

      case "ArrowUp":
        event.preventDefault()
        if (currentActiveIndex > 0) {
          tabsArr[currentActiveIndex - 1].click()
        }
        break

      case "ArrowRight":
      case "Enter":
        event.preventDefault()
        showSubMenu(currentTabKey)
        break

      case "Escape":
        event.preventDefault()
        toggleMenu()
        break
    }
  }

  // Enhanced submenu functionality
  const showSubMenu = (tabKey) => {
    playSound("submenu_open")
    removeSubmenu()

    const submenu = document.createElement("div")
    submenu.className = "submenu-overlay"

    // Create header with banner
    const submenuHeaderBanner = document.createElement("div")
    submenuHeaderBanner.className = "submenu-header-banner"
    const bannerImg = document.createElement("img")
    bannerImg.src = headerBanner ? headerBanner.src : ""
    bannerImg.alt = "Menu Banner"
    submenuHeaderBanner.appendChild(bannerImg)
    submenu.appendChild(submenuHeaderBanner)

    // Create options list
    const optionsList = document.createElement("ul")
    optionsList.className = "submenu-options-list"

    currentSubmenuOptions = submenuMap[tabKey] || []
    activeSubmenuIndex = 0

    currentSubmenuOptions.forEach((opt, i) => {
      const li = document.createElement("li")
      const btn = document.createElement("button")
      btn.className = "submenu-option-btn"
      btn.tabIndex = 0
      btn.dataset.index = i

      if (i === 0) btn.classList.add("active")

      // Create option content based on type
      let optionContent = ""
      if (opt.type === "toggle") {
        optionContent = `
                    <i class="submenu-icon ${opt.icon}"></i>
                    <span class="submenu-option-label">${opt.text}</span>
                    ${createEnhancedSwitch(opt.value, `toggle-${tabKey}-${i}`)}
                `
      } else if (opt.type === "action") {
        optionContent = `
                    <i class="submenu-icon ${opt.icon}"></i>
                    <span class="submenu-option-label">${opt.text}</span>
                    <i class="submenu-arrow fas fa-play"></i>
                `
      } else if (opt.type === "slider") {
        optionContent = `
                    <i class="submenu-icon ${opt.icon}"></i>
                    <span class="submenu-option-label">${opt.text}</span>
                    <input type="range" min="0" max="100" value="${opt.value}" class="option-slider">
                `
      }

      btn.innerHTML = optionContent
      btn.title = opt.description || opt.text

      // Add click event
      btn.addEventListener("click", () => handleOptionClick(opt, i))

      li.appendChild(btn)
      optionsList.appendChild(li)
    })

    submenu.appendChild(optionsList)

    // Create footer
    if (footer) {
      const submenuFooter = footer.cloneNode(true)
      submenuFooter.classList.add("submenu-footer")
      submenu.appendChild(submenuFooter)
    }

    document.body.appendChild(submenu)
    menuContainer.style.display = "none"

    // Focus first option
    const firstOption = submenu.querySelector(".submenu-option-btn.active")
    if (firstOption) firstOption.focus()
  }

  const handleOptionClick = (option, index) => {
    playSound("option_select")

    if (option.type === "toggle") {
      const switchInput = document.querySelector(`#toggle-${currentTabKey}-${index}`)
      if (switchInput) {
        switchInput.checked = !switchInput.checked
        option.value = switchInput.checked

        // Send to FiveM if available
        sendToFiveM("toggleOption", {
          category: currentTabKey,
          option: option.text,
          value: option.value,
        })

        showNotification(`${option.text} ${option.value ? "enabled" : "disabled"}`)
      }
    } else if (option.type === "action") {
      // Send action to FiveM
      sendToFiveM("executeAction", {
        category: currentTabKey,
        action: option.text,
      })

      showNotification(`Executed: ${option.text}`)
    }
  }

  const handleSubmenuKeys = (event) => {
    const submenu = document.querySelector(".submenu-overlay")
    if (!submenu) return

    const options = Array.from(submenu.querySelectorAll(".submenu-option-btn"))

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault()
        if (activeSubmenuIndex < options.length - 1) {
          options[activeSubmenuIndex].classList.remove("active")
          activeSubmenuIndex++
          options[activeSubmenuIndex].classList.add("active")
          options[activeSubmenuIndex].focus()
        }
        break

      case "ArrowUp":
        event.preventDefault()
        if (activeSubmenuIndex > 0) {
          options[activeSubmenuIndex].classList.remove("active")
          activeSubmenuIndex--
          options[activeSubmenuIndex].classList.add("active")
          options[activeSubmenuIndex].focus()
        }
        break

      case "Enter":
      case " ":
        event.preventDefault()
        if (currentSubmenuOptions[activeSubmenuIndex]) {
          handleOptionClick(currentSubmenuOptions[activeSubmenuIndex], activeSubmenuIndex)
        }
        break

      case "ArrowLeft":
      case "Escape":
        event.preventDefault()
        removeSubmenu()
        break
    }
  }

  const createEnhancedSwitch = (checked, id) => {
    return `
            <label class="switch">
                <input type="checkbox" id="${id}" ${checked ? "checked" : ""}>
                <span class="slider"></span>
            </label>
        `
  }

  const removeSubmenu = () => {
    const existing = document.querySelector(".submenu-overlay")
    if (existing) {
      playSound("submenu_close")
      existing.remove()
      menuContainer.style.display = ""

      const currentTab = document.querySelector(".tab-btn.active")
      if (currentTab) currentTab.focus()
    }
  }

  // Menu toggle functionality
  const toggleMenu = () => {
    if (isMenuVisible) {
      menuContainer.style.display = "none"
      removeSubmenu()
      playSound("menu_close")
    } else {
      menuContainer.style.display = ""
      playSound("menu_open")
    }
    isMenuVisible = !isMenuVisible
  }

  // Dragging functionality
  const initializeDragging = () => {
    const header = menuContainer.querySelector(".mod-menu-header")
    if (!header) return

    let isDragging = false
    let offsetX = 0
    let offsetY = 0

    header.addEventListener("mousedown", (e) => {
      isDragging = true
      offsetX = e.clientX - menuContainer.getBoundingClientRect().left
      offsetY = e.clientY - menuContainer.getBoundingClientRect().top
      menuContainer.style.transition = "none"
      document.body.style.userSelect = "none"
      header.style.cursor = "grabbing"
    })

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const x = e.clientX - offsetX
        const y = e.clientY - offsetY

        // Keep menu within viewport
        const maxX = window.innerWidth - menuContainer.offsetWidth
        const maxY = window.innerHeight - menuContainer.offsetHeight

        menuContainer.style.left = Math.max(0, Math.min(x, maxX)) + "px"
        menuContainer.style.top = Math.max(0, Math.min(y, maxY)) + "px"
        menuContainer.style.transform = "none"
      }
    })

    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false
        menuContainer.style.transition = ""
        document.body.style.userSelect = ""
        header.style.cursor = "grab"
      }
    })

    header.style.cursor = "grab"
  }

  // Visual enhancements
  const addVisualEnhancements = () => {
    // Add particle effects
    createParticleEffect()

    // Add typing effect to title
    addTypingEffect()

    // Add hover sound effects
    addHoverSounds()
  }

  const createParticleEffect = () => {
    const particles = document.querySelector(".particles")
    if (!particles) return

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--primary-color);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleMove ${5 + Math.random() * 10}s linear infinite;
                opacity: ${0.3 + Math.random() * 0.7};
            `
      particles.appendChild(particle)
    }
  }

  const addTypingEffect = () => {
    const title = document.querySelector(".header-title")
    if (!title) return

    const text = title.textContent
    title.textContent = ""

    let i = 0
    const typeInterval = setInterval(() => {
      title.textContent += text[i]
      i++
      if (i >= text.length) {
        clearInterval(typeInterval)
      }
    }, 100)
  }

  const addHoverSounds = () => {
    document.querySelectorAll(".tab-btn, .submenu-option-btn").forEach((btn) => {
      btn.addEventListener("mouseenter", () => playSound("hover"))
    })
  }

  // FiveM integration
  const sendToFiveM = (action, data) => {
    try {
      if (typeof SendNUIMessage !== "undefined") {
        SendNUIMessage({
          type: action,
          data: data,
        })
      }
    } catch (e) {
      console.log(`FiveM Action: ${action}`, data)
    }
  }

  // Notification system
  const showNotification = (message, type = "info") => {
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            color: white;
            padding: 12px 20px;
            border-radius: 10px;
            font-weight: 600;
            z-index: 10000;
            animation: notificationSlide 0.3s ease;
            box-shadow: var(--shadow-card);
        `
    notification.textContent = message

    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.animation = "notificationSlide 0.3s ease reverse"
      setTimeout(() => notification.remove(), 300)
    }, 3000)
  }

  // Add CSS for animations
  const style = document.createElement("style")
  style.textContent = `
        @keyframes notificationSlide {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes particleMove {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .particle {
            pointer-events: none;
        }
    `
  document.head.appendChild(style)

  // Initialize everything
  initializeMenu()

  // FiveM event listeners
  if (typeof window.addEventListener !== "undefined") {
    window.addEventListener("message", (event) => {
      const data = event.data

      switch (data.type) {
        case "showMenu":
          if (!isMenuVisible) toggleMenu()
          break

        case "hideMenu":
          if (isMenuVisible) toggleMenu()
          break

        case "updateOption":
          updateOptionValue(data.category, data.option, data.value)
          break

        case "showNotification":
          showNotification(data.message, data.notificationType || "info")
          break
      }
    })
  }

  // Update option value from external source
  const updateOptionValue = (category, optionName, value) => {
    const options = submenuMap[category]
    if (options) {
      const option = options.find((opt) => opt.text === optionName)
      if (option && option.type === "toggle") {
        option.value = value
        const switchInput = document.querySelector(`#toggle-${category}-${options.indexOf(option)}`)
        if (switchInput) {
          switchInput.checked = value
        }
      }
    }
  }

  // Auto-save settings
  const saveSettings = () => {
    const settings = {}
    Object.keys(submenuMap).forEach((category) => {
      settings[category] = {}
      submenuMap[category].forEach((option) => {
        if (option.type === "toggle" || option.type === "slider") {
          settings[category][option.text] = option.value
        }
      })
    })

    try {
      localStorage.setItem("fivem_menu_settings", JSON.stringify(settings))
    } catch (e) {
      console.log("Could not save settings:", e)
    }
  }

  // Load settings
  const loadSettings = () => {
    try {
      const savedSettings = localStorage.getItem("fivem_menu_settings")
      if (savedSettings) {
        const settings = JSON.parse(savedSettings)
        Object.keys(settings).forEach((category) => {
          if (submenuMap[category]) {
            Object.keys(settings[category]).forEach((optionName) => {
              const option = submenuMap[category].find((opt) => opt.text === optionName)
              if (option) {
                option.value = settings[category][optionName]
              }
            })
          }
        })
      }
    } catch (e) {
      console.log("Could not load settings:", e)
    }
  }

  // Load settings on startup
  loadSettings()

  // Save settings when options change
  document.addEventListener("change", (e) => {
    if (e.target.type === "checkbox" || e.target.type === "range") {
      setTimeout(saveSettings, 100)
    }
  })

  // Performance monitoring
  let frameCount = 0
  let lastTime = performance.now()

  const updateFPS = () => {
    frameCount++
    const currentTime = performance.now()

    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))

      // Update FPS display if enabled
      const fpsOption = submenuMap.settings?.find((opt) => opt.text === "Show FPS")
      if (fpsOption && fpsOption.value) {
        let fpsDisplay = document.querySelector(".fps-display")
        if (!fpsDisplay) {
          fpsDisplay = document.createElement("div")
          fpsDisplay.className = "fps-display"
          fpsDisplay.style.cssText = `
                        position: fixed;
                        top: 10px;
                        left: 10px;
                        background: rgba(0, 0, 0, 0.7);
                        color: var(--primary-color);
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-family: var(--font-primary);
                        font-size: 12px;
                        font-weight: bold;
                        z-index: 9999;
                        border: 1px solid var(--primary-color);
                    `
          document.body.appendChild(fpsDisplay)
        }
        fpsDisplay.textContent = `FPS: ${fps}`
      } else {
        const existingDisplay = document.querySelector(".fps-display")
        if (existingDisplay) existingDisplay.remove()
      }

      frameCount = 0
      lastTime = currentTime
    }

    requestAnimationFrame(updateFPS)
  }

  // Start FPS monitoring
  requestAnimationFrame(updateFPS)

  // Cleanup function for when menu is closed
  window.cleanupMenu = () => {
    document.removeEventListener("keydown", handleKeyPress)
    removeSubmenu()

    // Remove all event listeners
    tabs.forEach((tab) => {
      tab.removeEventListener("click", () => {})
    })

    if (toggleBtn) {
      toggleBtn.removeEventListener("click", toggleMenu)
    }

    // Save settings before cleanup
    saveSettings()
  }

  // Expose functions for external use (FiveM)
  window.fivemMenu = {
    show: () => {
      if (!isMenuVisible) toggleMenu()
    },
    hide: () => {
      if (isMenuVisible) toggleMenu()
    },
    toggle: toggleMenu,
    updateOption: updateOptionValue,
    showNotification: showNotification,
    saveSettings: saveSettings,
    loadSettings: loadSettings,
  }

  console.log("FiveM Enhanced Menu initialized successfully!")
})
