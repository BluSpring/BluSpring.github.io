<template>
    <main class="w-full h-full m-auto absolute top-0 left-0 pt-12 text-2xl overflow-y-auto">
        <div>
            <div class="computer pt-5 pb-5">
                <SpecsCard 
                    name="Katruna"
                    type="Gaming Computer"
                    description="The computer I use in my daily life. My very first desktop."
                    model="Custom built"
                />

                <div class="specifications mx-auto container text-center p-5 rounded-md">
                    <SpecCard title="Motherboard" description="GIGABYTE B650 AORUS ELITE AX" />
                    <SpecCard title="Case" description="Corsair 3000D Airflow" />
                    <SpecCard title="CPU" description="AMD Ryzen 7 7700X @ 4.50 GHz" />
                    <SpecCard title="GPU" description="AMD Radeon RX 5500 XT" />
                    <SpecCard title="PSU" description="FSP Hydro GT Pro 850W" />
                    <SpecCard title="CPU Cooler" description="Corsair H150 RGB 360mm Liquid CPU Cooler" />
                    <SpecCard title="Memory" description="(2x) 16 GB Corsair Dominator Platinum Black RGB DDR5-6000MHz" />
                    <SpecCard title="SSD (NVMe)" description="1 TB Samsung 990 Pro" />
                    <SpecCard title="HDD (Games)" description="2 TB Seagate Barracuda 7200 RPM ST2000DM008" />
                    <SpecCard title="HDD (Recordings)" description="1 TB Western Digital Purple WD10PURX" />
                    <SpecCard title="HDD (Storage, USB)" description="2 TB Western Digital My Passport 3321B" />
                </div>
            </div>

            <div class="computer pt-5 pb-5">
                <SpecsCard 
                    name="Kizaru"
                    type="Gaming Laptop"
                    description="The laptop I use every once in aw hile. Shipped over to me by someone who was very special to me."
                    model="Asus TUF Gaming FX505DY-AL016T"
                />

                <div class="specifications mx-auto container text-center p-5 rounded-md">
                    <SpecCard title="CPU" description="AMD Ryzen 5 3550H @ 2.10 GHz" />
                    <SpecCard title="GPU" description="AMD Radeon RX 560X" />
                    <SpecCard title="Memory (Slot #0)" description="(1x) 8 GB SK Hynix PC4-21300 DDR4-2666MHz SODIMM" />
                    <SpecCard title="Memory (Slot #1)" description="(1x) 8 GB Kingston PC4-21300 DDR4-2666MHz SODIMM" />
                    <SpecCard title="SSD (NVMe)" description="256 GB Western Digital PC SN520" />
                    <SpecCard title="HDD (Games)" description="1 TB Samsung ST1000LM024 HN-M101MBB" />
                    <SpecCard title="HDD (Storage, USB)" description="2 TB Western Digital My Passport 3321B" />
                </div>
            </div>

            <div class="computer pt-5 pb-5">
                <SpecsCard
                    name="Aitus"
                    type="Server Computer"
                    description="It is incredibly rare to see this computer being used, but it was the computer that I ended up using for several months in my life due to my old laptop having died."
                    model="MacBook Air 2017"
                />

                <div class="specifications mx-auto container text-center p-5 rounded-md">
                    <SpecCard title="CPU" description="Intel Core i5-5350U @ 1.80 GHz" />
                    <SpecCard title="Memory" description="8 GB LPDDR3-1600MHz SODIMM" />
                    <SpecCard title="SSD (NVMe)" description="128 GB Apple SSD PCIe SM0128G" />
                    <SpecCard title="HDD (Storage, USB)" description="2 TB Seagate Backup Plus Slim SRD00F1" />
                </div>
            </div>

            <div class="peripherals pt-5 pb-5">
                <SpecsCard
                    name="Peripherals"
                    type=""
                    description="Every single piece of peripheral equipment that I use."
                    model="Mouse, Keyboard, Headphones, etc."
                />

                <div class="specifications mx-auto container text-center p-5 rounded-md">
                    <SpecCard title='Primary "Monitor"' description='SHARP AQUOS 19" LC-19LE150M (1360x768)' />
                    <SpecCard title='Secondary "Monitor"' description='SHARP AQUOS 19" LC-19LE150M (1920x1080)' />
                    <SpecCard title="Webcam" description="Samsung Galaxy A03s" />
                    <SpecCard title="Microphone" description="Neewer NW-700" />
                    <SpecCard title="Headset" description="Astro A10 Gen. 1" />
                    <SpecCard title="Keyboard" description="Logitech G512 Carbon (GX Brown Tactile)" />
                    <SpecCard title="Mouse" description="Logitech G502 Hero" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.specifications {
    overflow-x: auto;
    overflow-y: auto;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
}

.computer {
    background: rgba(51, 43, 43, 0.418);
}

.peripherals {
    background: rgba(44, 35, 35, 0.418);
}
</style>

<script lang="ts">
export default {
    head() {
        return {
            title: 'PC Specs - BluSpring'
        };
    }
}
</script>