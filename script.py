import time
import webbrowser

url = 'https://aadl3inscription2024.dz/AR/Inscription-desktop.php'
refresh_interval = 5  # Refresh interval in seconds

while True:
    print(f"Refreshing {url} at {time.strftime('%Y-%m-%d %H:%M:%S')}")
    webbrowser.open(url)  # Open the URL in the default browser
    time.sleep(refresh_interval)
    # Use JavaScript to refresh the page in the same tab (Windows only)
    webbrowser.open(f"javascript:window.location.reload(true);void(0);")
