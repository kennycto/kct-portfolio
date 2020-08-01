import { createBrowserHistory } from "history";

let appHistory = null;

export function getAppHistory() {
    if (!appHistory) {
        appHistory = createBrowserHistory({});
    }
    return appHistory;
}
