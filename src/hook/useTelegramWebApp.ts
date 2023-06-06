type TelegramProp = Window & typeof globalThis

const telegramWeb: TelegramProp = window.Telegram.WebApp;

export function useTelegramWebApp(){
  const eventCloseWebApp = (e: MouseEvent) => {
    telegramWeb.close()
  }
  return {
    eventCloseWebApp,
    telegramWeb,

  }
}