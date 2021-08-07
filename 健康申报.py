# 请先在https://github.com/microsoft/playwright-python 安装好playwright，再填入用户名和密码，注意保留引号
import random
import sys
import time
import os
from playwright.sync_api import sync_playwright

username = os.getenv('USERNAME')
password = os.getenv('PASSWORD')


# 用户配置区结束


def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(
        record_video_dir="videos/",
        record_video_size={"width": 1280, "height": 720}
    )

    err = False

    # Open new page
    page = context.new_page()

    try:
        # Go to http://e-office2.nuist.edu.cn/infoplus/form/XNYQSB/start
        page.goto("http://e-office2.nuist.edu.cn/infoplus/form/XNYQSB/start")
        time.sleep(5)
        # Click input[name="username"]
        print('正在登录...')
        page.click("input[name=\"username\"]")

        # Fill input[name="username"]
        page.fill("input[name=\"username\"]", username)

        # Click input[name="password"]
        page.click("input[name=\"passwordText\"]")

        # Fill input[name="password"]
        page.fill("input[name=\"passwordText\"]", password)

        # Click form[id="loginFromId"] >> text="登录"
        page.click("a[id=\"login_submit\"]")
        # assert page.url == "http://e-office2.nuist.edu.cn/taskcenter/workflow/index"

        time.sleep(random.randint(0, 3))
        # Fill input[name="fieldSTQKfrtw"]
        print('正在输入表单信息...')
        page.fill("input[name=\"fieldSTQKfrtw\"]",
                  str(36 + (random.randint(0, 9) / 10)))
        time.sleep(random.randint(0, 3))
        # Check input[name="fieldCNS"]
        page.check("input[name=\"fieldCNS\"]")
        time.sleep(random.randint(0, 3))
        # Click text="确认填报"
        print('正在提交...')
        page.click("text=\"确认填报\"")
        time.sleep(random.randint(0, 3))
        # Click text="好"
        page.click("text=/^(Ok|好)$/")
        time.sleep(random.randint(0, 3))
        # Click text="确定"
        page.click("text=/^(Ok|确定)$/")
        time.sleep(random.randint(0, 3))
    except Exception as ex:
        print(ex)
        err = True

    # Close page
    page.close()
    path = page.video.path()
    print('::set-output name=VIDEO_PATH::' + path)

    # ---------------------
    context.close()
    browser.close()

    if err:
        sys.exit(1)


with sync_playwright() as playwright:
    run(playwright)
