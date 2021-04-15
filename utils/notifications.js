import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const NOTIFICATION_KEY = "mobileflashcards:notifications"

const notificationsSettings = {
    title: "Study reminder!",
    body: "👋 don't forget to study today!",
    ios: {
        sound: true,
    },
    android: {
        sound: true,
        priority: "high",
        sticky: "false",
        vibrate: true,
    },
}

export const removeNotifications = () => (
    AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
)

export const setNotification = () => (
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if (data === null || data < new Date().getDate()) {
            Notifications.getPermissionsAsync()
            .then((result) => {
                if (result.status !== "granted") {
                    return Notifications.requestPermissionsAsync()
                }
                return result
            })
            .then(({ status }) => {
                if (status !== "granted") { return false }
                const trigger = new Date()
                trigger.setDate(trigger.getDate() + 1)
                trigger.setHours(16)
                trigger.setMinutes(0)
                trigger.setSeconds(0)
                trigger.setMilliseconds(0)
                return Notifications.scheduleNotificationAsync({ content: notificationsSettings, trigger, })
                .then(() => AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(trigger.getDate())))
            })
        }
    })
)
