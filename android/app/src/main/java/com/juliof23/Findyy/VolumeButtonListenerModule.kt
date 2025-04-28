package com.juliof23.Findyy

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.view.KeyEvent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule

class VolumeButtonListenerModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private var receiver: BroadcastReceiver? = null

    override fun getName(): String {
        return "VolumeButtonListener"
    }

    @ReactMethod
    fun startListening() {
        if (receiver != null) return

        receiver = object : BroadcastReceiver() {
            override fun onReceive(context: Context?, intent: Intent?) {
                if (Intent.ACTION_MEDIA_BUTTON == intent?.action) {
                    val event = intent.getParcelableExtra<KeyEvent>(Intent.EXTRA_KEY_EVENT)
                    if (event != null && event.action == KeyEvent.ACTION_DOWN) {
                        when (event.keyCode) {
                            KeyEvent.KEYCODE_VOLUME_UP -> sendEvent("VolumeUpPressed")
                            KeyEvent.KEYCODE_VOLUME_DOWN -> sendEvent("VolumeDownPressed")
                        }
                    }
                }
            }
        }

        val filter = IntentFilter(Intent.ACTION_MEDIA_BUTTON)
        reactContext.registerReceiver(receiver, filter)
    }

    @ReactMethod
    fun stopListening() {
        receiver?.let {
            reactContext.unregisterReceiver(it)
            receiver = null
        }
    }

    private fun sendEvent(eventName: String) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, null)
    }
}
