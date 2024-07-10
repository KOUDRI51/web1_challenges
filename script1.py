import time
import winsound
from selenium import webdriver
from selenium.common.exceptions import TimeoutException, WebDriverException
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options as ChromeOptions
from webdriver_manager.chrome import ChromeDriverManager

url = 'https://aadl3inscription2024.dz/AR/'
refresh_interval = 5  
load_timeout = 40  
notification_sound_freq = 1000  
notification_sound_duration = 1000 

def create_chrome_browser():
    print("Creating Chrome browser...")
    service = ChromeService(ChromeDriverManager().install())
    options = ChromeOptions()
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    return webdriver.Chrome(service=service, options=options)

def refresh_page(driver):
    try:
        driver.set_page_load_timeout(load_timeout)
        driver.get(url)
        print(f"Page loaded successfully at {time.strftime('%Y-%m-%d %H:%M:%S')}")
        winsound.Beep(notification_sound_freq, notification_sound_duration)
        return True
    except TimeoutException:
        print(f"Page failed to load within {load_timeout} seconds at {time.strftime('%Y-%m-%d %H:%M:%S')}")
        return False
    except WebDriverException as e:
        print(f"WebDriverException occurred: {e}")
        return False

def main():
    browser = create_chrome_browser()
    while True:
        try:
            success = refresh_page(browser)
            if success:
                print("Page successfully loaded and browser will remain open.")
                break
            time.sleep(refresh_interval)
        except WebDriverException as e:
            print(f"WebDriverException occurred: {e}")
            time.sleep(refresh_interval)

if __name__ == "__main__":
    main()
