const PI = Math.PI;
const duration = 1800;
const raiseAngle = -PI / 1.8;
const wristTilt = PI / 12;

let keyframes = [
    {
        timeFraction: 0,
        Dr: 1,
        ur: [0, 0, 0],
        yr: [0, 0, 0],
        cr: 0.5,
        Vr: [
            { wr: -PI, mY: -PI, delta: -PI / 4 },
            { wr: -PI / 2, mY: 0, delta: -PI / 8 },
            { wr: PI, mY: PI / 3, delta: PI / 4 }
        ]
    },

    {
        timeFraction: 0.2,
        Dr: 1,
        ur: [raiseAngle, 0, wristTilt],
        yr: [raiseAngle, 0, wristTilt],
        cr: 0.6,
        Vr: [
            { wr: -PI, mY: -PI / 6, delta: -PI / 5 },
            { wr: 0, mY: PI / 3, delta: PI / 10 },
            { wr: PI / 3, mY: -PI / 4, delta: -PI / 10 }
        ]
    },

    {
        timeFraction: 0.7,
        Dr: 1,
        ur: [raiseAngle, 0, wristTilt],
        yr: [raiseAngle, 0, wristTilt],
        cr: 0.6,
        Vr: [
            { wr: -PI / 6, mY: -PI / 6, delta: 0 },
            { wr: 0, mY: 0, delta: 0 },
            { wr: -PI / 4, mY: -PI / 4, delta: 0 }
        ]
    },
];

export default SaluteEmote = {
    Nr: duration,
    sr: {
        ArmLeftMesh: {
            rotation: keyframes
        }
    }
};