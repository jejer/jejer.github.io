function FindProxyForURL(url, host)
{
    if (isInNet(host, "192.168.0.0", "255.255.0.0"))
        return "DIRECT";

    return "SOCKS 192.168.88.3:8080";
}
