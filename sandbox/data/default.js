const scannersSize = 3000;
const coords = [
    {
        node: "Amazon",
        x: 402.09327008151104,
        y: 204.81457114649453,
    },
    {
        node: "Chicago",
        x: 384.19693679838383,
        y: 381.0702942392969,
    },
    {
        node: "Chicago-A",
        x: 257.5639952594272,
        y: 501.23811775108686,
    },
    {
        node: "Chicago-B",
        x: 394.443713478031,
        y: 520.9636692689841,
    },
    {
        node: "Chicago-C",
        x: 524.3718724507462,
        y: 464.2006754521078,
    },
    {
        node: "Seattle",
        x: 183.75684549477415,
        y: 183.33922036232445,
    },
    {
        node: "Seattle-A",
        x: 304.67749837746544,
        y: 79.94379103192682,
    },
    {
        node: "Seattle-B",
        x: 53.369037287091146,
        y: 287.3309768715305,
    },
    {
        node: "Seattle-C",
        x: 215.4054775783652,
        y: 311.2490543006898,
    },
    {
        node: "Los Angeles",
        x: 633.9927077001945,
        y: 167.1396741048137,
    },
    {
        node: "Los Angeles-A",
        x: 832.6626743710453,
        y: 157.42985424308046,
    },
    {
        node: "Los Angeles-B",
        x: 761.886591743053,
        y: 332.22110526389497,
    },
    {
        node: "Los Angeles-C",
        x: 603.6913409589331,
        y: 348.2635674418242,
    },
];
const getCoord = node => coords.filter(c => c.node === node).map(c => ({ x: c.x, y: c.y }))[0];
const BrandAmazon = "";
const Building = "";
const data = {
    nodes: [
        {
            id: "Amazon",
            renderLabel: false,
            label: " ",
            size: 1000,
            svg: BrandAmazon,
            // linkId: 12345,
            ...(getCoord("Amazon") || { x: 401, y: 218 }),
            // x: 401,
            // y: 218,
        },
        {
            id: "Chicago",
            size: 900,
            textLabelOffsetX: 25,
            svg: Building,
            symbolType: "diamond",
            // linkId: 12345,
            ...(getCoord("Chicago") || { x: 405, y: 310 }),
            // x: 405,
            // y: 310,
        },
        {
            id: "Chicago-A",
            label: "Door A",
            symbolType: "circle",
            size: scannersSize,
            linkId: 12345,
            ...(getCoord("Chicago-A") || { x: 352, y: 380 }),
            // x: 352,
            // y: 380,
            info: "Info scanner Chicago-A",
        },
        {
            id: "Chicago-B",
            label: "Door B",
            symbolType: "circle",
            size: scannersSize,
            linkId: 12345,
            ...(getCoord("Chicago-B") || { x: 424, y: 369 }),
            // x: 424,
            // y: 369,
            info: "Info scanner Chicago-B",
        },
        {
            id: "Chicago-C",
            label: "Door C",
            symbolType: "circle",
            size: scannersSize,
            linkId: 12345,
            ...(getCoord("Chicago-C") || { x: 491, y: 347 }),
            // x: 491,
            // y: 347,
            info: "Info scanner Chicago-C",
        },
        {
            id: "Seattle",
            size: 900,
            textLabelOffsetX: 25,
            svg: Building,
            symbolType: "diamond",
            // linkId: 12345,
            ...(getCoord("Seattle") || { x: 80, y: 131 }),
            // x: 80,
            // y: 131,
        },
        {
            id: "Seattle-A",
            label: "Door A",
            symbolType: "circle",
            size: scannersSize,
            linkId: 12345,
            ...(getCoord("Seattle-A") || { x: 211, y: 157 }),
            // x: 211,
            // y: 157,
            info: "Info scanner Seattle-A",
        },
        {
            id: "Seattle-B",
            label: "Door B",
            symbolType: "circle",
            size: scannersSize,
            linkId: 12345,
            ...(getCoord("Seattle-B") || { x: 158, y: 226 }),
            // x: 158,
            // y: 226,
            info: "Info scanner Seattle-B",
        },
        {
            id: "Seattle-C",
            label: "Door C",
            symbolType: "circle",
            size: scannersSize,
            linkId: 12345,
            ...(getCoord("Seattle-C") || { x: 200, y: 279 }),
            // x: 200,
            // y: 279,
            info: "Info scanner Seattle-C",
        },
        {
            id: "Los Angeles",
            size: 900,
            textLabelOffsetX: 25,
            svg: Building,
            symbolType: "diamond",
            // linkId: 12345,
            ...(getCoord("Los Angeles") || { x: 568, y: 189 }),
            // x: 568,
            // y: 189,
        },
        {
            id: "Los Angeles-A",
            label: "Door A",
            symbolType: "circle",
            size: scannersSize,
            linkId: 12345,
            ...(getCoord("Los Angeles-A") || { x: 652, y: 140 }),
            // x: 652,
            // y: 140,
            info: "Info scanner Los Angeles-Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
        {
            id: "Los Angeles-B",
            label: "Door B",
            symbolType: "circle",
            size: scannersSize,
            linkId: 12345,
            ...(getCoord("Los Angeles-B") || { x: 659, y: 197 }),
            // x: 659,
            // y: 197,
            info: "Info scanner Los Angeles-B",
        },
        {
            id: "Los Angeles-C",
            label: "Door C",
            symbolType: "circle",
            size: scannersSize,
            linkId: 12345,
            ...(getCoord("Los Angeles-C") || { x: 540, y: 246 }),
            // x: 540,
            // y: 246,
            info: "Info scanner Los Angeles-C",
        },
    ],
    links: [
        { source: "Amazon", target: "Chicago" },
        { source: "Amazon", target: "Seattle" },
        { source: "Amazon", target: "Los Angeles" },
        { source: "Chicago", target: "Chicago-A", isHidden: true },
        { source: "Chicago", target: "Chicago-B", isHidden: true },
        { source: "Chicago", target: "Chicago-C", isHidden: true },
        { source: "Seattle", target: "Seattle-A", isHidden: true },
        { source: "Seattle", target: "Seattle-B", isHidden: true },
        { source: "Seattle", target: "Seattle-C", isHidden: true },
        { source: "Los Angeles", target: "Los Angeles-A", isHidden: true },
        { source: "Los Angeles", target: "Los Angeles-B", isHidden: true },
        { source: "Los Angeles", target: "Los Angeles-C", isHidden: true },
    ],
};

module.exports = data;

/**
 *
 links: [
 {
            source: 'Androsynth',
            target: 'Chenjesu'
        },
 {
            source: 'Androsynth',
            target: 'Ilwrath'
        },
 {
            source: 'Androsynth',
            target: 'Mycon'
        },
 {
            source: 'Androsynth',
            target: 'Spathi'
        },
 {
            source: 'Androsynth',
            target: 'Umgah'
        },
 {
            source: 'Androsynth',
            target: 'VUX'
        },
        {
            source: 'Chenjesu',
            target: 'Mycon'
        },
        {
            source: 'Chenjesu',
            target: 'Spathi'
        },
        {
            source: 'Chenjesu',
            target: 'Umgah'
        },
        {
            source: 'Chenjesu',
            target: 'VUX'
        },
        {
            source: 'Ilwrath',
            target: 'Spathi'
        },
        {
            source: 'Ilwrath',
            target: 'Umgah'
        },
        {
            source: 'Ilwrath',
            target: 'VUX'
        },
        {
            source: 'Mycon',
            target: 'Umgah'
        },
        {
            source: 'Mycon',
            target: 'VUX'
        },
        {
            source: 'Umgah',
            target: 'VUX'
        },
        {
            source: 'Androsynth',
            target: 'Guardian'
        },
        {
            source: 'Chenjesu',
            target: 'Broodhmome'
        },
        {
            source: 'Ilwrath',
            target: 'Avenger'
        },
        {
            source: 'Mycon',
            target: 'Podship'
        },
        {
            source: 'Spathi',
            target: 'Eluder'
        },
        {
            source: 'Umgah',
            target: 'Drone'
        },
        {
            source: 'VUX',
            target: 'Intruder'
        }
    ],
    nodes: [
        {
            id: 'Androsynth'
        },
        {
            id: 'Chenjesu'
        },
        {
            id: 'Ilwrath'
        },
        {
            id: 'Mycon'
        },
        {
            id: 'Spathi'
        },
        {
            id: 'Umgah'
        },
        {
            id: 'VUX'
        },
        {
            id: 'Guardian',
            symbolType: 'square'
        },
        {
            id: 'Broodhmome',
            symbolType: 'square'
        },
        {
            id: 'Avenger',
            symbolType: 'square'
        },
        {
            id: 'Podship',
            symbolType: 'square'
        },
        {
            id: 'Eluder',
            symbolType: 'square'
        },
        {
            id: 'Drone',
            symbolType: 'square'
        },
        {
            id: 'Intruder',
            symbolType: 'square'
        }
    ]
};
*/
