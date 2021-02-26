# 请先在https://github.com/microsoft/playwright-python 安装好playwright，再填入用户名和密码，注意保留引号
username = ""
password = ""

# 用户配置区结束

from playwright.sync_api import sync_playwright
import time
import random

def run(playwright):
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()

    # Open new page
    page = context.new_page()

    # Go to http://e-office2.nuist.edu.cn/infoplus/form/XNYQSB/start
    page.goto("http://e-office2.nuist.edu.cn/infoplus/form/XNYQSB/start")

    # Click input[name="username"]
    page.click("input[name=\"username\"]")

    # Fill input[name="username"]
    page.fill("input[name=\"username\"]", username)

    # Click input[name="password"]
    page.click("input[name=\"password\"]")

    # Fill input[name="password"]
    page.fill("input[name=\"password\"]", password)

    # Click form[id="loginFromId"] >> text="登录"
    page.click("form[id=\"loginFromId\"] >> text=\"登录\"")
    # assert page.url == "http://e-office2.nuist.edu.cn/taskcenter/workflow/index"

    time.sleep(random.randint(0,3))
    # Fill input[name="fieldSTQKfrtw"]
    page.fill("input[name=\"fieldSTQKfrtw\"]", str(36+(random.randint(0,9)/10)))
    time.sleep(random.randint(0,3))
    # Check input[name="fieldCNS"]
    page.check("input[name=\"fieldCNS\"]")
    time.sleep(random.randint(0,3))
    # Click text="确认填报"
    page.click("text=\"确认填报\"")
    time.sleep(random.randint(0,3))
    # Click text="好"
    page.click("text=\"好\"")
    time.sleep(random.randint(0,3))
    # Click text="确定"
    page.click("text=\"确定\"")
    time.sleep(random.randint(0,3))

    # Close page
    page.close()

    # ---------------------
    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)