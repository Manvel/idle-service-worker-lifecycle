console.log("BACKGROUND PAGE LAUNCHED");

logEvent("Service Worker Started");

chrome.alarms.onAlarm.addListener(() => {
  logEvent("Alarm Fired");
  scheduleAlarm();
});

function logEvent(name) {
  console.log(`Event: ${name}`);
  const now = new Date();
  const time = now.toLocaleTimeString();

  chrome.storage.local.get(["events"], (result) => {
    const events = result.events || [];
    events.push({ name, time });
    chrome.storage.local.set({ events });
  });
}

function scheduleAlarm() {
  chrome.alarms.create("alarm-event", { when: Date.now() + 60000 });
}

scheduleAlarm();
