---
title: TCP
---

# [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)

[The quantum state of a TCP port](https://blog.cloudflare.com/the-quantum-state-of-a-tcp-port/) is a nice read.

## Links

- [smoltcp](https://github.com/smoltcp-rs/smoltcp) - Standalone, event-driven TCP/IP stack that is designed for bare-metal, real-time systems.
- [tcpgoon](https://github.com/dachad/tcpgoon) - Test concurrent connections towards a server listening to a TCP port.
- [Warp speed Data Transfer (WDT)](https://github.com/facebook/wdt) - Embeddedable library (and command line tool) aiming to transfer data between 2 systems as fast as possible over multiple TCP paths.
- [netscanner](https://github.com/R4yGM/netscanner) - TCP/UDP scanner to find open or closed ports.
- [TCP/IP Illustrated books](https://en.wikipedia.org/wiki/TCP/IP_Illustrated)
- [Masscan](https://github.com/robertdavidgraham/masscan) - TCP port scanner, spews SYN packets asynchronously, scanning entire Internet in under 5 minutes. ([HN](https://news.ycombinator.com/item?id=28682986))
- [What I learned attempting the TCP Reset attack (2020)](http://squidarth.com/article/networking/2020/05/03/tcp-resets.html)
- [What every developer should know about TCP (2020)](https://robertovitillo.com/what-every-developer-should-know-about-tcp/) ([HN](https://news.ycombinator.com/item?id=23177607))
- [Building with async/await in Rust (2019)](https://ragona.com/posts/clobber_async_await)
- [clobber](https://github.com/ragona/clobber) - TCP load testing tool, written in async Rust.
- [TCPause](https://github.com/innogames/tcpause) - Zero-downtime proxy for TCP and UNIX sockets written in Go.
- [Toxiproxy](https://github.com/Shopify/toxiproxy) - TCP proxy to simulate network and system conditions for chaos and resiliency testing.
- [go-tun2socks](https://github.com/eycorsican/go-tun2socks) - tun2socks implementation written in Go.
- [Understand (a little) about TCP (2015)](https://jvns.ca/blog/2015/11/21/why-you-should-understand-a-little-about-tcp/) ([HN](https://news.ycombinator.com/item?id=24917460))
- [NAT Slipstreaming](https://samy.pl/slipstream/) ([Lobsters](https://lobste.rs/s/dbzbfo/nat_slipstreaming)) ([Code](https://github.com/samyk/slipstream))
- [ProxyChains](https://github.com/haad/proxychains) - Tool that forces any TCP connection made by any given application to follow through proxy like TOR or any other SOCKS4, SOCKS5 or HTTP(S) proxy.
- [ProxyChains-NG](https://github.com/rofl0r/proxychains-ng) - Preloader which hooks calls to sockets in dynamically linked programs and redirects it through one or more socks/http proxies.
- [Why TCP Over TCP Is A Bad Idea (2001)](http://sites.inka.de/~bigred/devel/tcp-tcp.html) ([HN](https://news.ycombinator.com/item?id=25080693))
- [tcpdump](https://github.com/the-tcpdump-group/tcpdump) - Powerful command-line packet analyzer. ([Web](https://www.tcpdump.org/)) ([Tutorial with examples](https://danielmiessler.com/study/tcpdump/))
- [hping3](https://github.com/antirez/hping) - Network tool able to send custom TCP/IP packets and to display target replies like ping do with ICMP replies.
- [FreePort](https://github.com/phayes/freeport) - Get a free open TCP port that is ready to use.
- [wait-for-it](https://github.com/vishnubob/wait-for-it) - Pure bash script to test and wait on the availability of a TCP host and port.
- [TCPProbe](https://github.com/mehrdadrad/tcpprobe) - TCP tool for network performance and path monitoring, including socket statistics.
- [BerthaD](https://github.com/bertha/berthad) - Simple, fast, no-nonsense TCP server to store blobs of data by its SHA256 hash.
- [Chisel](https://github.com/jpillora/chisel) - Fast TCP/UDP Tunnel, Transported over HTTP, Secured via SSH.
- [go-tcp](https://github.com/mikioh/tcp) - Provides TCP-level socket options that allow manipulation of TCP connection facilities.
- [Writing a Simple TCP Server Using Kqueue (2021)](https://dev.to/frosnerd/writing-a-simple-tcp-server-using-kqueue-cah)
- [Talking TCP and UDP with Adam Woodbeck (2021)](https://changelog.com/gotime/176)
- [microps](https://github.com/pandax381/microps) - Implementation of a small TCP/IP protocol stack for learning.
- [Low-level TCP server in Rust with MIO (2019)](https://sergey-melnychuk.github.io/2019/08/01/rust-mio-tcp-server/) ([Code](https://github.com/sergey-melnychuk/mio-tcp-server))
- [Nice illustration of TCP/IP vs. the OSI model](https://twitter.com/rtzll/status/1391459216771145728)
- [Armada](https://github.com/resyncgg/armada) - High-Performance TCP SYN scanner.
- [Name-based Virtual Hosting in TCP](http://www.litech.org/~brian/tcphosts/paper.html)
- [Let's code a TCP/IP stack (2016)](https://www.saminiir.com/lets-code-tcp-ip-stack-1-ethernet-arp/) ([HN](https://news.ycombinator.com/item?id=27654182))
- [tailscale-sidecar](https://github.com/markpash/tailscale-sidecar) - TCP proxy used to expose services onto a tailscale network without root. Ideal for container environments.
- [A TCP Proxy in 30 lines of Rust](https://zmedley.com/tcp-proxy.html) ([Code](https://github.com/ZekeMedley/tcp-proxy))
- [rproxy](https://github.com/glacierx/rproxy) - Blazing fast cross-platform transparent TCP&UDP proxy.
- [Increase HTTP Performance by Fitting In the Initial TCP Slow Start Window (2021)](https://sirupsen.com/napkin/problem-15/)
- [Transcript2Video](http://www.xiongyu.me/projects/transcript2video/) - Efficient Clip Sequencing from Texts.
- [Unit testing a TCP stack (2015)](http://www.snellman.net/blog/archive/2015-07-09-unit-testing-a-tcp-stack/) ([HN](https://news.ycombinator.com/item?id=28311288))
- [Linux implementation of Homa, a protocol to replace TCP for low-latency RPC (2021)](https://www.micahlerner.com/2021/08/29/a-linux-kernel-implementation-of-the-homa-transport-protocol.html) ([HN](https://news.ycombinator.com/item?id=28440542))
- [tcpproxy](https://github.com/inetaf/tcpproxy) - Proxy TCP connections based on static rules, HTTP Host headers, and SNI server names (Go package or binary).
- [rshijack](https://github.com/kpcyrd/rshijack) - TCP connection hijacker, rust rewrite of shijack.
- [zazkia](https://github.com/emicklei/zazkia) - TCP proxy to simulate connection problems.
- [My Fractal Of Pain From Trying To Do TCP Sockets The First Time (2021)](https://rtpg.co/2021/09/29/fractal-of-pain.html)
- [udig](https://github.com/mkmik/udig) - Public-key addressed TCP tunnel broker.
- [libuinet](https://github.com/pkelsey/libuinet) - Library version of FreeBSD's TCP/IP stack plus extras.
- [go-finger](https://github.com/mitchellh/go-finger) - Finger protocol library. Finger protocol is an extremely simple TCP protocol.
- [lwIP](https://github.com/lwip-tcpip/lwip) - Small independent implementation of the TCP/IP protocol suite.
- [cproxy](https://github.com/NOBLES5E/cproxy) - Redirect TCP and UDP traffic made by a program to a proxy, without requiring the program supporting a proxy.
- [TCP (Transmission Control Protocol) in OCaml](https://github.com/roburio/tcp)
- [Van Jacobson’s Congestion Avoidance and Control](http://protocols.netlab.uky.edu/~calvert/classes/571/lectureslides/congestion.pdf)
- [No PortScan](https://git.encryp.ch/g00g1/no-portscan) - Watching for TCP port scanning behavior on your networks.
- [Announcing Argo for Spectrum (2021)](https://blog.cloudflare.com/argo-spectrum/) - Way to turbo-charge any TCP based application.
- [http-tunnel](https://github.com/xnuter/http-tunnel) - HTTP(S) Tunnel and TCP Proxy in Rust.
- [The Sad Story of TCP Fast Open (2019)](https://squeeze.isobar.com/2019/04/11/the-sad-story-of-tcp-fast-open/)
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - Powered by gVisor TCP/IP stack.
- [Rabbit TCP](https://github.com/ihciah/rabbit-tcp) - Multi-connection TCP forwarder created for accelerating TCP connections.
- [gev](https://github.com/Allenxuxu/gev) - Lightweight, fast non-blocking TCP network library / websocket server based on Reactor mode.
- [tun2proxy](https://github.com/blechschmidt/tun2proxy) - Tunnel TCP traffic through SOCKS5 or HTTP using a TUN interface.
- [smoltcp-nal](https://github.com/quartiq/smoltcp-nal) - embedded-nal implementation for smoltcp. Implementation of a TCP- and UDP-capable network stack that can be used for any library that leverages the embedded-nal.
- [Phantun](https://github.com/dndx/phantun) - Transforms UDP stream into (fake) TCP streams that can go through Layer 3 & Layer 4 (NAPT) firewalls/NATs.
- [Linux bcc/BPF tcplife: TCP Lifespans](https://www.brendangregg.com/blog/2016-11-30/linux-bcc-tcplife.html) ([HN](https://news.ycombinator.com/item?id=30171712))
- [brink](https://github.com/jsiebens/brink) - Lightweight Identity-Aware Proxy (IAP) for TCP forwarding.
- [flex](https://github.com/mpenet/flex) - Using TCP congestion control methods to find/set real limits of a system over time.
- [Going Big with TCP Packets (2022)](https://lwn.net/SubscriberLink/884104/89d8ccf8f52ad9dc/) ([HN](https://news.ycombinator.com/item?id=30342926))
- [TCP is harder than it looks (2014)](https://www.snellman.net/blog/archive/2014-11-11-tcp-is-harder-than-it-looks.html)
- [get-port](https://github.com/sindresorhus/get-port) - Get an available TCP port.
- [Going multipath without Multipath TCP (2022)](https://blog.benjojo.co.uk/post/multipath-without-mptcp) ([HN](https://news.ycombinator.com/item?id=30454014))
- [Bondcat](https://github.com/benjojo/bondcat) - Netcat like system utility that has the ability to combine multiple TCP connections for better transfer speeds, but also better reliability.
- [Socklab](https://github.com/drakkar-lig/socklab) - Interactive tool to learn about the socket API for UDP and TCP, without having to actually write C code.
- [Benchmark TCP bandwidth and latency with Rust](https://github.com/LorenzoMartini/rust-tcp-io-perf)
- [TCP Checker](https://github.com/tevino/tcp-shaker) - Performing TCP handshake without ACK in Go, useful for health checking, that is SYN, SYN-ACK, RST.
- [pync](https://github.com/brenw0rth/pync) - Arbitrary TCP and UDP connections and listens (Netcat for Python).
- [udp-over-tcp](https://github.com/mullvad/udp-over-tcp) - Library (and binaries) for tunneling UDP datagrams over a TCP stream.
- [mirage-tcpip](https://github.com/mirage/mirage-tcpip) - TCP/IP networking stack in pure OCaml, using the Mirage platform libraries. Includes IPv4/6, ICMP, and UDP/TCP support.
- [Witness](https://github.com/nolanderc/witness) - Run commands when a file is modified or upon receiving TCP/UDP packets.
- [ilock](https://doc.huc.fr.eu.org/en/monitor/iblock-openbsd/) - Detect TCP connections, on specific ports, in order to block the corresponding IP addresses, through Packet Filter.
- [get-port-please](https://github.com/unjs/get-port-please) - Get an available TCP port to listen.
- [TCP Server GUI](https://github.com/AlexxNB/TCPServerGUI) - TCP Server with GUI to debug tcp connections.
- [Accord](https://github.com/LoipesMas/accord) - Instant messaging chat system in Rust over TCP with encryption.
- [Proximac](https://github.com/csujedihy/proximac) - Command-line open-source alternative to Proxifier. Force App to use SOCKS5 proxy.
- [tsyncp](https://github.com/PoOnesNerfect/tsyncp) - Simple channel-like APIs over TCP streams for communications between rust services.
- [Lurker](https://github.com/m-mizutani/lurker) - Network based honeypot for capturing payload for all TCP ports.
- [Ranch](https://github.com/ninenines/ranch) - Socket acceptor pool for TCP protocols.
- [TCPLS: Modern Transport Services with TCP and TLS (2022)](https://blog.apnic.net/2022/05/24/tcpls-modern-transport-services-with-tcp-and-tls/)
- [moproxy](https://github.com/sorz/moproxy) - Transparent TCP to SOCKSv5/HTTP proxy on Linux written in Rust.
- [tproxy](https://github.com/kevwan/tproxy) - CLI tool to proxy and analyze TCP connections.
- [Optimizing TCP for high WAN throughput while preserving low latency (2022)](https://blog.cloudflare.com/optimizing-tcp-for-high-throughput-and-low-latency/)
- [redsocks](https://github.com/darkk/redsocks) - Transparent TCP-to-proxy redirector.
- [Introduction to TCP and Sockets (2001)](https://www.scottklement.com/rpg/socktut/introduction.html) ([HN](https://news.ycombinator.com/item?id=32160339))
- [When the window is not fully open, your TCP stack is doing more than you think (2022)](https://blog.cloudflare.com/when-the-window-is-not-fully-open-your-tcp-stack-is-doing-more-than-you-think/) ([Lobsters](https://lobste.rs/s/ep23m0/when_window_is_not_fully_open_your_tcp))
- [speedbump](https://github.com/kffl/speedbump) - TCP proxy for simulating variable network latency. ([HN](https://news.ycombinator.com/item?id=32292973))
- [TCP over HTTP](https://github.com/julianbuettner/tcp-over-http) - TCP proxy using HTTP - Reach SSH behind a Nginx reverse proxy.
- [unproxy](https://github.com/losfair/unproxy) - Map TCP services behind an HTTP(S) proxy to local ports.
- [mixctl](https://github.com/inlets/mixctl) - Tiny TCP load balancer.
- [p0f](https://lcamtuf.coredump.cx/p0f3/) - TCP Packet Fingerprinting. ([HN](https://news.ycombinator.com/item?id=32879551))
- [Linux Kernel MultiPath TCP Project](https://www.multipath-tcp.org/) ([HN](https://news.ycombinator.com/item?id=33220975))
- [We need a replacement for TCP in the data center (2022)](https://web.stanford.edu/~ouster/cgi-bin/papers/replaceTcp.pdf) ([HN](https://news.ycombinator.com/item?id=33401480))
- [Moving past TCP in the data center (2022)]](https://lwn.net/SubscriberLink/913260/8819c42491a70e9b/)
- [wa-tunnel](https://github.com/aleixrodriala/wa-tunnel) - HTTP Tunneling through WhatsApp. ([HN](https://news.ycombinator.com/item?id=33568994))
- [rtun](https://github.com/snsinfu/reverse-tunnel) - Tool for exposing TCP and UDP ports to the Internet via a public gateway server.
- [Fuzzotron](https://github.com/denandz/fuzzotron) - TCP/UDP based network daemon fuzzer.
- [Tuntox](https://github.com/gjedeer/tuntox) - Forwards TCP connections over the Tox protocol. This allows low-latency access to distant machines behind a NAT you can't control or with a dynamic IP address.
- [zstd-proxy](https://github.com/fathyb/zstd-proxy) - High-performance real-time TCP compression.
- [teeceepee](https://github.com/jvns/teeceepee) - Mini-TCP stack in Python.
- [Tonel](https://github.com/sabify/tonel) - Multi-Stream UDP over TCP Tunneler for Lightning-Fast Network Layer 3 Transmission with TUN Interface.
- [tcpdump is amazing (2016)](https://jvns.ca/blog/2016/03/16/tcpdump-is-amazing/) ([HN](https://news.ycombinator.com/item?id=34623604))
- [Is It Time to Replace TCP in Data Centers? (2023)](https://blog.ipspace.net/2023/01/data-center-tcp-replacement.html) ([HN](https://news.ycombinator.com/item?id=34871670))
- [dill](https://github.com/fwkz/dill) - Cloud ready L4 TCP proxy with first-class support for dynamic listeners.
- [TCP Stream Extractor](https://github.com/genonullfree/stream-extractor) - Utility that can read in a PCAP file, search through it for TCP streams, and write out each stream to a separate new PCAP file.
- [The quantum state of a TCP port (2023)](https://blog.cloudflare.com/the-quantum-state-of-a-tcp-port/)
- [EasyTCP](https://github.com/DarthPestilane/easytcp) - Light-weight TCP framework written in Go (Golang), built with message router. EasyTCP helps you build a TCP server easily fast and less painful.
- [Tunnel via Cloudflare to any TCP service (2023)](https://iq.thc.org/tunnel-via-cloudflare-to-any-tcp-service) ([HN](https://news.ycombinator.com/item?id=36007310))
- [TCP Chat](https://github.com/gatomod/tcp-chat) - Simple, quick and lightweight chat built over TCP and Rust. ([Reddit](https://www.reddit.com/r/rust/comments/13t159j/tcp_chat_simple_quick_and_lightweight_chat_built/))
- [Deep-Dive into the Internals of TCP Connection Establishment Process (2023)](https://medium.com/@wrong.about/deep-dive-into-tcp-connection-establishment-process-f6cfb7b4e8e1)