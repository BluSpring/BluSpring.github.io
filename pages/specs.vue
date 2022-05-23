<template>
    <main class="w-full h-full m-auto absolute top-0 left-0 table">
        <div class="computer">
            <SpecsCard 
                name="Kizaru"
                type="Gaming Computer"
                description="The computer I use in my daily life. It is my boyfriend's old laptop, shipped over to me all the way from the UK, thus it is incredibly special to me."
                model="Asus TUF Gaming FX505DY-AL016T"
            />

            <div class="specifications">
                <div class="specification">
                    <div class="title">CPU</div>
                    <div class="description">AMD Ryzen 5 3550H @ 2.10 GHz</div>
                </div>

                <div class="specification">
                    <div class="title">GPU</div>
                    <div class="description">AMD Radeon RX 560X</div>
                </div>

                <div class="specification">
                    <div class="title">Memory (Slot #0)</div>
                    <div class="description">(1x) 8 GB SK Hynix PC4-21300 DDR4-2666MHz SODIMM</div>
                </div>

                <div class="specification">
                    <div class="title">Memory (Slot #1)</div>
                    <div class="description">(1x) 8 GB Kingston PC4-21300 DDR4-2666MHz SODIMM</div>
                </div>

                <div class="specification">
                    <div class="title">SSD (NVMe)</div>
                    <div class="description">256 GB Western Digital PC SN520</div>
                </div>

                <div class="specification">
                    <div class="title">HDD (Games)</div>
                    <div class="description">500 GB Western Digital Blue 5400RPM WD5000LPVX</div>
                </div>
                
                <div class="specification">
                    <div class="title">HDD (Recordings, USB)</div>
                    <div class="description">5 TB Seagate Backup Plus Portable SRD0VN3</div>
                </div>

                <div class="specification">
                    <div class="title">HDD (Storage, USB)</div>
                    <div class="description">2 TB Western Digital My Passport Ultra 0827</div>
                </div>
            </div>
        </div>

        <div class="computer">
            <SpecsCard
                name="Aitus"
                type="Server Computer"
                description="It is incredibly rare to see this computer being used, but it was the computer that I ended up using for several months in my life due to my old laptop having died."
                model="MacBook Air 2017"
            />

            <div class="specifications">
                <div class="specification">
                    <div class="title">CPU</div>
                    <div class="description">Intel Core i5-5350U @ 1.80 GHz</div>
                </div>

                <div class="specification">
                    <div class="title">Memory</div>
                    <div class="description">8 GB LPDDR3-1600MHz SODIMM</div>
                </div>

                <div class="specification">
                    <div class="title">SSD (NVMe)</div>
                    <div class="description">128 GB Apple SSD PCIe SM0128G</div>
                </div>

                <div class="specification">
                    <div class="title">HDD (Storage, USB)</div>
                    <div class="description">2 TB Seagate Backup Plus Slim SRD00F1</div>
                </div>
            </div>
        </div>

        <div class="peripherals">
            <SpecsCard
                name="Peripherals"
                type=""
                description="Every single piece of peripheral equipment that I use."
                model="Mouse, Keyboard, Headphones, etc."
            />

            <div class="specifications">
                <div class="specification">
                    <div class="title">Primary "Monitor"</div>
                    <div class="description">SHARP AQUOS 19" LC-19LE150M (1360x768)</div>
                </div>

                <div class="specification">
                    <div class="title">Secondary "Monitor"</div>
                    <div class="description">SHARP AQUOS 19" LC-19LE150M (1920x1080)</div>
                </div>

                <div class="specification">
                    <div class="title">Webcam</div>
                    <div class="description">Samsung Galaxy A03s</div>
                </div>

                <div class="specification">
                    <div class="title">Microphone</div>
                    <div class="description">Neewer NW-700</div>
                </div>

                <div class="specification">
                    <div class="title">Headset</div>
                    <div class="description">Logitech G431</div>
                </div>

                <div class="specification">
                    <div class="title">Keyboard</div>
                    <div class="description">Logitech G512 Carbon (GX Brown Tactile)</div>
                </div>

                <div class="specification">
                    <div class="title">Mouse</div>
                    <div class="description">Logitech G502 Hero</div>
                </div>
            </div>
        </div>
    </main>
</template>