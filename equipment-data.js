// ============================================================
//  STOKE MANDEVILLE HOSPITAL — ROTHSCHILD WARD
//  Antenatal / Postnatal Equipment Check System
//  Equipment Definitions
// ============================================================

const EQUIPMENT_DB = {

  // ── CONTROLLED DRUGS — TWICE DAILY ───────────────────────
  cd_rothschild_am: {
    name: 'Controlled Drugs Check — Rothschild Ward (AM)',
    location: 'Rothschild Ward',
    image: 'images/cd_cupboard.jpg',
    imageCaption: 'Morning CD check — both nurses to sign. Check register balance matches physical stock.',
    frequency: 'daily',
    categories: [
      {
        name: 'CD Check — Morning',
        icon: '💊',
        items: [
          { id: 'cd_am_register', name: 'CD register signed by two members of staff', desc: 'Both checking staff sign the CD register', critical: true, image: 'images/cd_register.jpg' },
          { id: 'cd_am_balance', name: 'Register balance matches physical stock count', desc: 'Count all CDs and confirm balance matches register', critical: true },
          { id: 'cd_am_cupboard_locked', name: 'CD cupboard locked after check', desc: 'Cupboard secured after completion of check', critical: true },
          { id: 'cd_am_keys_returned', name: 'Keys returned to designated location', desc: 'CD keys returned immediately after use', critical: true },
        ]
      }
    ]
  },

  cd_rothschild_pm: {
    name: 'Controlled Drugs Check — Rothschild Ward (PM)',
    location: 'Rothschild Ward',
    image: 'images/cd_cupboard.jpg',
    imageCaption: 'Evening CD check — both nurses to sign. Check register balance matches physical stock.',
    frequency: 'daily',
    categories: [
      {
        name: 'CD Check — Evening',
        icon: '💊',
        items: [
          { id: 'cd_pm_register', name: 'CD register signed by two members of staff', desc: 'Both checking staff sign the CD register', critical: true, image: 'images/cd_register.jpg' },
          { id: 'cd_pm_balance', name: 'Register balance matches physical stock count', desc: 'Count all CDs and confirm balance matches register', critical: true },
          { id: 'cd_pm_cupboard_locked', name: 'CD cupboard locked after check', desc: 'Cupboard secured after completion of check', critical: true },
          { id: 'cd_pm_keys_returned', name: 'Keys returned to designated location', desc: 'CD keys returned immediately after use', critical: true },
        ]
      }
    ]
  },

  // ── RESUSITAIRE — DAILY CHECK ONLY ───────────────────────
  resusitaire_rothschild_daily: {
    name: 'Resusitaire — Daily Top Check',
    location: 'Rothschild Ward',
    image: 'images/resuscitaire_top.jpg',
    imageCaption: 'Daily visual check of resusitaire top surface and equipment',
    frequency: 'daily',
    categories: [
      {
        name: 'Top Surface Check',
        icon: '👶',
        items: [
          { id: 'res_power_on', name: 'Resusitaire powers on correctly', desc: 'Power on and heating element functional', critical: true },
          { id: 'res_light_working', name: 'Overhead light working', desc: 'Examination light functional', critical: true },
          { id: 'res_o2_connected', name: 'Oxygen connected and flow confirmed', desc: 'O2 supply connected, check flow meter', critical: true, image: 'images/res_o2.jpg' },
          { id: 'res_mask_present', name: 'Masks present (size 0 and 1)', desc: 'Both mask sizes present and in packaging', critical: true, image: 'images/res_mask_1.jpg' },
          { id: 'res_suction_working', name: 'Suction working', desc: 'Suction functional, tubing present', critical: true, image: 'images/res_suction.jpg' },
          { id: 'res_towels_present', name: 'Towels present', desc: 'Adequate supply of dry towels on resusitaire', critical: false, image: 'images/res_towels.jpg' },
          { id: 'res_sats_probe', name: 'Sats probe present', desc: 'Neonatal sats probe present and connected', critical: true, image: 'images/res_sats_probe.jpg' },
        ]
      }
    ]
  },

  // ── WEEKLY RESUSITAIRE CLEAN ──────────────────────────────
  clean_resusitaire_rothschild: {
    name: 'Resusitaire — Weekly Clean',
    location: 'Rothschild Ward',
    image: 'images/resuscitaire_cleaning.jpg',
    imageCaption: 'Full weekly clean of resusitaire — use Tristel or approved disinfectant',
    frequency: 'weekly',
    categories: [
      {
        name: 'Weekly Clean',
        icon: '🧹',
        items: [
          { id: 'res_clean_surface', name: 'All surfaces cleaned with approved disinfectant', desc: 'Wipe down entire resusitaire using Tristel or approved product', critical: true, image: 'images/resuscitaire_cleaning.jpg' },
          { id: 'res_clean_mattress', name: 'Mattress cleaned and inspected', desc: 'Clean mattress, check for damage or tears', critical: true, image: 'images/res_mattress.jpg' },
          { id: 'res_clean_tubing', name: 'Oxygen and suction tubing checked', desc: 'Inspect tubing for damage, replace if needed', critical: true },
          { id: 'res_clean_signed', name: 'Cleaning record signed and dated', desc: 'Sign the ward cleaning record', critical: true },
        ]
      }
    ]
  },

  // ── MATERNAL OXYGEN & SUCTION — SIDE ROOMS & BAYS ────────
  room_check_sr3: {
    name: 'Side Room 3 — O2 & Suction Check',
    location: 'Side Room 3',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Side Room 3',
    frequency: 'daily',
    categories: [
      {
        name: 'Oxygen',
        icon: '🫁',
        items: [
          { id: 'sr3_o2_connected', name: 'Oxygen connected and functional', desc: 'Wall oxygen supply connected, flow confirmed', critical: true, image: 'images/room_o2.jpg' },
          { id: 'sr3_o2_mask', name: 'O2 mask present', desc: 'Appropriate oxygen mask present', critical: true, image: 'images/room_o2_mask.jpg' },
        ]
      },
      {
        name: 'Suction',
        icon: '💨',
        items: [
          { id: 'sr3_suction_working', name: 'Suction working', desc: 'Wall suction functional', critical: true, image: 'images/room_suction.jpg' },
          { id: 'sr3_yankauer_present', name: 'Yankauer suction catheter present', desc: 'Yankauer present and in packaging', critical: true, image: 'images/room_yankauer.jpg' },
        ]
      }
    ]
  },

  room_check_sr4: {
    name: 'Side Room 4 — O2 & Suction Check',
    location: 'Side Room 4',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Side Room 4',
    frequency: 'daily',
    categories: [
      {
        name: 'Oxygen',
        icon: '🫁',
        items: [
          { id: 'sr4_o2_connected', name: 'Oxygen connected and functional', desc: 'Wall oxygen supply connected, flow confirmed', critical: true, image: 'images/room_o2.jpg' },
          { id: 'sr4_o2_mask', name: 'O2 mask present', desc: 'Appropriate oxygen mask present', critical: true, image: 'images/room_o2_mask.jpg' },
        ]
      },
      {
        name: 'Suction',
        icon: '💨',
        items: [
          { id: 'sr4_suction_working', name: 'Suction working', desc: 'Wall suction functional', critical: true, image: 'images/room_suction.jpg' },
          { id: 'sr4_yankauer_present', name: 'Yankauer suction catheter present', desc: 'Yankauer present and in packaging', critical: true, image: 'images/room_yankauer.jpg' },
        ]
      }
    ]
  },

  room_check_sr5: {
    name: 'Side Room 5 — O2 & Suction Check',
    location: 'Side Room 5',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Side Room 5',
    frequency: 'daily',
    categories: [
      {
        name: 'Oxygen',
        icon: '🫁',
        items: [
          { id: 'sr5_o2_connected', name: 'Oxygen connected and functional', desc: 'Wall oxygen supply connected, flow confirmed', critical: true, image: 'images/room_o2.jpg' },
          { id: 'sr5_o2_mask', name: 'O2 mask present', desc: 'Appropriate oxygen mask present', critical: true, image: 'images/room_o2_mask.jpg' },
        ]
      },
      {
        name: 'Suction',
        icon: '💨',
        items: [
          { id: 'sr5_suction_working', name: 'Suction working', desc: 'Wall suction functional', critical: true, image: 'images/room_suction.jpg' },
          { id: 'sr5_yankauer_present', name: 'Yankauer suction catheter present', desc: 'Yankauer present and in packaging', critical: true, image: 'images/room_yankauer.jpg' },
        ]
      }
    ]
  },

  room_check_sr15: {
    name: 'Side Room 15 — O2 & Suction Check',
    location: 'Side Room 15',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Side Room 15',
    frequency: 'daily',
    categories: [
      {
        name: 'Oxygen',
        icon: '🫁',
        items: [
          { id: 'sr15_o2_connected', name: 'Oxygen connected and functional', desc: 'Wall oxygen supply connected, flow confirmed', critical: true, image: 'images/room_o2.jpg' },
          { id: 'sr15_o2_mask', name: 'O2 mask present', desc: 'Appropriate oxygen mask present', critical: true, image: 'images/room_o2_mask.jpg' },
        ]
      },
      {
        name: 'Suction',
        icon: '💨',
        items: [
          { id: 'sr15_suction_working', name: 'Suction working', desc: 'Wall suction functional', critical: true, image: 'images/room_suction.jpg' },
          { id: 'sr15_yankauer_present', name: 'Yankauer suction catheter present', desc: 'Yankauer present and in packaging', critical: true, image: 'images/room_yankauer.jpg' },
        ]
      }
    ]
  },

  room_check_rothschild_suite: {
    name: 'Rothschild Suite — O2 & Suction Check',
    location: 'Rothschild Suite',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Rothschild Suite',
    frequency: 'daily',
    categories: [
      {
        name: 'Oxygen',
        icon: '🫁',
        items: [
          { id: 'rsuite_o2_connected', name: 'Oxygen connected and functional', desc: 'Wall oxygen supply connected, flow confirmed', critical: true, image: 'images/room_o2.jpg' },
          { id: 'rsuite_o2_mask', name: 'O2 mask present', desc: 'Appropriate oxygen mask present', critical: true, image: 'images/room_o2_mask.jpg' },
        ]
      },
      {
        name: 'Suction',
        icon: '💨',
        items: [
          { id: 'rsuite_suction_working', name: 'Suction working', desc: 'Wall suction functional', critical: true, image: 'images/room_suction.jpg' },
          { id: 'rsuite_yankauer_present', name: 'Yankauer suction catheter present', desc: 'Yankauer present and in packaging', critical: true, image: 'images/room_yankauer.jpg' },
        ]
      }
    ]
  },

  room_check_verney_suite: {
    name: 'Verney Suite — O2 & Suction Check',
    location: 'Verney Suite',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Verney Suite',
    frequency: 'daily',
    categories: [
      {
        name: 'Oxygen',
        icon: '🫁',
        items: [
          { id: 'vsuite_o2_connected', name: 'Oxygen connected and functional', desc: 'Wall oxygen supply connected, flow confirmed', critical: true, image: 'images/room_o2.jpg' },
          { id: 'vsuite_o2_mask', name: 'O2 mask present', desc: 'Appropriate oxygen mask present', critical: true, image: 'images/room_o2_mask.jpg' },
        ]
      },
      {
        name: 'Suction',
        icon: '💨',
        items: [
          { id: 'vsuite_suction_working', name: 'Suction working', desc: 'Wall suction functional', critical: true, image: 'images/room_suction.jpg' },
          { id: 'vsuite_yankauer_present', name: 'Yankauer suction catheter present', desc: 'Yankauer present and in packaging', critical: true, image: 'images/room_yankauer.jpg' },
        ]
      }
    ]
  },

  // ── BAY 4–12 CHECKS ───────────────────────────────────────
  room_check_bay4: {
    name: 'Bay 4 — O2 & Suction Check',
    location: 'Bay 4',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Bay 4',
    frequency: 'daily',
    categories: [{ name: 'Bay 4', icon: '🛏', items: [
      { id: 'bay4_o2', name: 'Oxygen connected and functional', critical: true, image: 'images/room_o2.jpg' },
      { id: 'bay4_suction', name: 'Suction working and Yankauer present', critical: true, image: 'images/room_suction.jpg' },
    ]}]
  },
  room_check_bay5: {
    name: 'Bay 5 — O2 & Suction Check',
    location: 'Bay 5',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Bay 5',
    frequency: 'daily',
    categories: [{ name: 'Bay 5', icon: '🛏', items: [
      { id: 'bay5_o2', name: 'Oxygen connected and functional', critical: true, image: 'images/room_o2.jpg' },
      { id: 'bay5_suction', name: 'Suction working and Yankauer present', critical: true, image: 'images/room_suction.jpg' },
    ]}]
  },
  room_check_bay6: {
    name: 'Bay 6 — O2 & Suction Check',
    location: 'Bay 6',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Bay 6',
    frequency: 'daily',
    categories: [{ name: 'Bay 6', icon: '🛏', items: [
      { id: 'bay6_o2', name: 'Oxygen connected and functional', critical: true, image: 'images/room_o2.jpg' },
      { id: 'bay6_suction', name: 'Suction working and Yankauer present', critical: true, image: 'images/room_suction.jpg' },
    ]}]
  },
  room_check_bay7: {
    name: 'Bay 7 — O2 & Suction Check',
    location: 'Bay 7',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Bay 7',
    frequency: 'daily',
    categories: [{ name: 'Bay 7', icon: '🛏', items: [
      { id: 'bay7_o2', name: 'Oxygen connected and functional', critical: true, image: 'images/room_o2.jpg' },
      { id: 'bay7_suction', name: 'Suction working and Yankauer present', critical: true, image: 'images/room_suction.jpg' },
    ]}]
  },
  room_check_bay8: {
    name: 'Bay 8 — O2 & Suction Check',
    location: 'Bay 8',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Bay 8',
    frequency: 'daily',
    categories: [{ name: 'Bay 8', icon: '🛏', items: [
      { id: 'bay8_o2', name: 'Oxygen connected and functional', critical: true, image: 'images/room_o2.jpg' },
      { id: 'bay8_suction', name: 'Suction working and Yankauer present', critical: true, image: 'images/room_suction.jpg' },
    ]}]
  },
  room_check_bay9: {
    name: 'Bay 9 — O2 & Suction Check',
    location: 'Bay 9',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Bay 9',
    frequency: 'daily',
    categories: [{ name: 'Bay 9', icon: '🛏', items: [
      { id: 'bay9_o2', name: 'Oxygen connected and functional', critical: true, image: 'images/room_o2.jpg' },
      { id: 'bay9_suction', name: 'Suction working and Yankauer present', critical: true, image: 'images/room_suction.jpg' },
    ]}]
  },
  room_check_bay10: {
    name: 'Bay 10 — O2 & Suction Check',
    location: 'Bay 10',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Bay 10',
    frequency: 'daily',
    categories: [{ name: 'Bay 10', icon: '🛏', items: [
      { id: 'bay10_o2', name: 'Oxygen connected and functional', critical: true, image: 'images/room_o2.jpg' },
      { id: 'bay10_suction', name: 'Suction working and Yankauer present', critical: true, image: 'images/room_suction.jpg' },
    ]}]
  },
  room_check_bay11: {
    name: 'Bay 11 — O2 & Suction Check',
    location: 'Bay 11',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Bay 11',
    frequency: 'daily',
    categories: [{ name: 'Bay 11', icon: '🛏', items: [
      { id: 'bay11_o2', name: 'Oxygen connected and functional', critical: true, image: 'images/room_o2.jpg' },
      { id: 'bay11_suction', name: 'Suction working and Yankauer present', critical: true, image: 'images/room_suction.jpg' },
    ]}]
  },
  room_check_bay12: {
    name: 'Bay 12 — O2 & Suction Check',
    location: 'Bay 12',
    image: 'images/room_o2.jpg',
    imageCaption: 'Daily check of oxygen and suction in Bay 12',
    frequency: 'daily',
    categories: [{ name: 'Bay 12', icon: '🛏', items: [
      { id: 'bay12_o2', name: 'Oxygen connected and functional', critical: true, image: 'images/room_o2.jpg' },
      { id: 'bay12_suction', name: 'Suction working and Yankauer present', critical: true, image: 'images/room_suction.jpg' },
    ]}]
  },

  // ── CPR TROLLEY ───────────────────────────────────────────
  cpr_trolley_daily: {
    name: 'CPR Trolley — Daily Sign-off',
    location: 'Rothschild Ward',
    image: 'images/cpr_trolley.jpg',
    imageCaption: 'Confirm paper checklist is signed and dated before submitting',
    frequency: 'daily',
    afterEmergency: true,
    categories: [
      {
        name: 'Daily Paper Check',
        icon: '📋',
        items: [
          { id: 'cpr_paper_signed', name: 'Paper checklist signed and dated', desc: 'Physical paper checklist on trolley is signed and dated', critical: true, image: 'images/cpr_paper_checklist.jpg' },
          { id: 'cpr_trolley_present', name: 'Trolley present in correct location', desc: 'CPR trolley is in its designated position and accessible', critical: true, image: 'images/cpr_trolley_location.jpg' },
          { id: 'cpr_seal_intact', name: 'Seal intact (if applicable)', desc: 'Confirm tamper seal has not been broken since last check', critical: false, image: 'images/cpr_seal.jpg' },
        ]
      }
    ]
  },

  cpr_trolley_weekly: {
    name: 'CPR Trolley — Weekly Full Check',
    location: 'Rothschild Ward',
    image: 'images/cpr_trolley.jpg',
    imageCaption: 'Full 7-day contents check — check all items against resus department paper list',
    frequency: 'weekly',
    afterEmergency: true,
    categories: [
      {
        name: 'Full Contents Check',
        icon: '✅',
        items: [
          { id: 'cpr_full_contents', name: 'All contents present and checked', desc: 'Check all items against the resus department paper checklist', critical: true },
          { id: 'cpr_full_signed', name: 'Paper checklist signed and dated', desc: 'Sign and date the physical paper checklist', critical: true, image: 'images/cpr_paper_checklist.jpg' },
          { id: 'cpr_expiry_checked', name: 'Expiry dates checked on all applicable items', desc: 'Check all drugs and consumables — replace anything expiring within 30 days', critical: true },
          { id: 'cpr_resealed', name: 'Trolley resealed with new seal', desc: 'New tamper seal applied and number recorded', critical: true, image: 'images/cpr_seal.jpg' },
        ]
      }
    ]
  },

  // ── WEEKLY CPR TROLLEY CLEAN ──────────────────────────────
  clean_cpr_trolley: {
    name: 'CPR Trolley — Weekly Clean',
    location: 'Rothschild Ward',
    image: 'images/cpr_trolley.jpg',
    imageCaption: 'Weekly clean of CPR trolley exterior and accessible surfaces',
    frequency: 'weekly',
    categories: [
      {
        name: 'Weekly Clean',
        icon: '🧹',
        items: [
          { id: 'cpr_clean_surfaces', name: 'All external surfaces cleaned', desc: 'Wipe down trolley with approved disinfectant', critical: true },
          { id: 'cpr_clean_signed', name: 'Cleaning record signed and dated', desc: 'Sign the ward cleaning record', critical: true },
        ]
      }
    ]
  },

  // ── NURSERY CHECKS — TCB MACHINE x2 ──────────────────────
  tcb_machine_1: {
    name: 'TCB Machine 1 — Daily Calibration Check',
    location: 'Nursery',
    image: 'images/glucose_monitor.jpg',
    imageCaption: 'Run all 3 control levels (L, S, △) and record results. Acceptable ranges shown below.',
    frequency: 'daily',
    categories: [
      {
        name: 'Level L Control',
        icon: '🔬',
        items: [
          { id: 'tcb1_L_run', name: 'Level L control run', desc: 'Run Level L control check', critical: true },
          { id: 'tcb1_L_range', name: 'Level L result within range (−2.8 to −0.8)', desc: 'Result must be ≥ −2.8 and ≤ −0.8', critical: true },
        ]
      },
      {
        name: 'Level S Control',
        icon: '🔬',
        items: [
          { id: 'tcb1_S_run', name: 'Level S control run', desc: 'Run Level S control check', critical: true },
          { id: 'tcb1_S_range', name: 'Level S result within range (−2.4 to −0.4)', desc: 'Result must be ≥ −2.4 and ≤ −0.4', critical: true },
        ]
      },
      {
        name: 'Level △ Control',
        icon: '🔬',
        items: [
          { id: 'tcb1_D_run', name: 'Level △ control run', desc: 'Run Level △ (delta) control check', critical: true },
          { id: 'tcb1_D_range', name: 'Level △ result within range (−0.9 to +0.1)', desc: 'Result must be ≥ −0.9 and ≤ +0.1', critical: true },
        ]
      },
      {
        name: 'General',
        icon: '✅',
        items: [
          { id: 'tcb1_results_recorded', name: 'All results recorded in machine log', desc: 'Document all three control results', critical: true },
          { id: 'tcb1_strips_expiry', name: 'Consumable strips/solution in date', desc: 'Check expiry date on all control solutions and consumables', critical: true, image: 'images/gm_strips_expiry.jpg' },
        ]
      }
    ]
  },

  tcb_machine_2: {
    name: 'TCB Machine 2 — Daily Calibration Check',
    location: 'Nursery',
    image: 'images/glucose_monitor.jpg',
    imageCaption: 'Run all 3 control levels (L, S, △) and record results. Acceptable ranges shown below.',
    frequency: 'daily',
    categories: [
      {
        name: 'Level L Control',
        icon: '🔬',
        items: [
          { id: 'tcb2_L_run', name: 'Level L control run', desc: 'Run Level L control check', critical: true },
          { id: 'tcb2_L_range', name: 'Level L result within range (−2.8 to −0.8)', desc: 'Result must be ≥ −2.8 and ≤ −0.8', critical: true },
        ]
      },
      {
        name: 'Level S Control',
        icon: '🔬',
        items: [
          { id: 'tcb2_S_run', name: 'Level S control run', desc: 'Run Level S control check', critical: true },
          { id: 'tcb2_S_range', name: 'Level S result within range (−2.4 to −0.4)', desc: 'Result must be ≥ −2.4 and ≤ −0.4', critical: true },
        ]
      },
      {
        name: 'Level △ Control',
        icon: '🔬',
        items: [
          { id: 'tcb2_D_run', name: 'Level △ control run', desc: 'Run Level △ (delta) control check', critical: true },
          { id: 'tcb2_D_range', name: 'Level △ result within range (−0.9 to +0.1)', desc: 'Result must be ≥ −0.9 and ≤ +0.1', critical: true },
        ]
      },
      {
        name: 'General',
        icon: '✅',
        items: [
          { id: 'tcb2_results_recorded', name: 'All results recorded in machine log', desc: 'Document all three control results', critical: true },
          { id: 'tcb2_strips_expiry', name: 'Consumable strips/solution in date', desc: 'Check expiry date on all control solutions and consumables', critical: true, image: 'images/gm_strips_expiry.jpg' },
        ]
      }
    ]
  },

  // ── GLUCOSE MONITOR ───────────────────────────────────────
  glucose_monitor_nursery: {
    name: 'Glucose Monitor — Daily Calibration',
    location: 'Nursery',
    image: 'images/glucose_monitor.jpg',
    imageCaption: 'Run high and low controls and record results',
    frequency: 'daily',
    categories: [
      {
        name: 'Control Checks',
        icon: '🩸',
        items: [
          { id: 'gm_low_run', name: 'Low control run and in range', desc: 'Run low control and confirm result within acceptable range', critical: true, image: 'images/gm_control_low.jpg' },
          { id: 'gm_high_run', name: 'High control run and in range', desc: 'Run high control and confirm result within acceptable range', critical: true, image: 'images/gm_control_high.jpg' },
          { id: 'gm_strips_expiry', name: 'Test strips in date', desc: 'Check expiry on current pot of test strips', critical: true, image: 'images/gm_strips_expiry.jpg' },
          { id: 'gm_lancets_present', name: 'Lancets present and in date', desc: 'Adequate supply of lancets in date', critical: false, image: 'images/gm_lancets.jpg' },
          { id: 'gm_results_recorded', name: 'Results recorded in logbook', desc: 'Document both control results in the QC logbook', critical: true },
        ]
      }
    ]
  },

  // ── SBR MACHINE ───────────────────────────────────────────
  sbr_machine: {
    name: 'SBR Machine — Daily Check',
    location: 'Nursery',
    image: 'images/glucose_monitor.jpg',
    imageCaption: 'Run control check. Acceptable range: 329–379.',
    frequency: 'daily',
    categories: [
      {
        name: 'SBR Control Check',
        icon: '🧪',
        items: [
          { id: 'sbr_control_run', name: 'Control run completed', desc: 'Run the daily control check on SBR machine', critical: true },
          { id: 'sbr_in_range', name: 'Result within acceptable range (329–379)', desc: 'Control result must be between 329 and 379', critical: true },
          { id: 'sbr_result_recorded', name: 'Result recorded in logbook', desc: 'Document the control result', critical: true },
          { id: 'sbr_consumables_date', name: 'Consumables in date', desc: 'Check expiry on all SBR machine consumables', critical: true },
        ]
      }
    ]
  },

  // ── INSTRUMENT WASHER ─────────────────────────────────────
  washer_rothschild: {
    name: 'Instrument Washer — Daily Check',
    location: 'Rothschild Ward',
    image: 'images/instrument_washer.jpg',
    imageCaption: 'Daily check of instrument washer — confirm cycle completed correctly',
    frequency: 'daily',
    categories: [
      {
        name: 'Washer Check',
        icon: '🫧',
        items: [
          { id: 'washer_cycle_complete', name: 'Cycle completed successfully', desc: 'Confirm last cycle completed without error', critical: true, image: 'images/instrument_washer.jpg' },
          { id: 'washer_chamber_clean', name: 'Chamber clean — no debris', desc: 'Inspect chamber for debris or residue', critical: true, image: 'images/washer_chamber.jpg' },
          { id: 'washer_chemicals_present', name: 'Chemicals/detergent present and not empty', desc: 'Check detergent and rinse aid levels', critical: true },
          { id: 'washer_log_signed', name: 'Washer log signed', desc: 'Sign the instrument washer daily log', critical: true },
        ]
      }
    ]
  },

  // ── FRIDGES & FREEZERS ────────────────────────────────────
  fridge_milk: {
    name: 'Milk Fridge — Temperature Check',
    location: 'Milk Kitchen',
    image: 'images/fridge_escalation_flowchart.jpg',
    imageCaption: 'Acceptable range 2–8°C — escalate if outside range',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Temperature',
        icon: '🌡',
        items: [
          { id: 'milkfridge_temp_ok', name: 'Temperature within range (2–8°C)', desc: 'Current reading must be between 2°C and 8°C', critical: true, image: 'images/fridge_escalation_flowchart.jpg' },
          { id: 'milkfridge_log_signed', name: 'Temperature logged and signed', desc: 'Record the temperature and sign the log', critical: true },
        ]
      }
    ]
  },

  freezer_milk: {
    name: 'Milk Freezer — Temperature Check',
    location: 'Milk Kitchen',
    image: 'images/fridge_escalation_flowchart.jpg',
    imageCaption: 'Acceptable range −25°C to −15°C',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Temperature',
        icon: '❄',
        items: [
          { id: 'milkfreezer_temp_ok', name: 'Temperature within range (−25°C to −15°C)', desc: 'Current reading must be between −25°C and −15°C', critical: true },
          { id: 'milkfreezer_log_signed', name: 'Temperature logged and signed', desc: 'Record the temperature and sign the log', critical: true },
        ]
      }
    ]
  },

  freezer_drug: {
    name: 'Drug Freezer — Temperature Check',
    location: 'Rothschild Ward',
    image: 'images/fridge_escalation_flowchart.jpg',
    imageCaption: 'Acceptable range −25°C to −15°C — escalate if outside range',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Temperature',
        icon: '❄',
        items: [
          { id: 'drugfreezer_temp_ok', name: 'Temperature within range (−25°C to −15°C)', desc: 'Current reading must be between −25°C and −15°C', critical: true },
          { id: 'drugfreezer_log_signed', name: 'Temperature logged and signed', critical: true },
        ]
      }
    ]
  },

  fridge_antenatal_drug: {
    name: 'Antenatal Drug Fridge — Temperature Check',
    location: 'Antenatal Ward',
    image: 'images/fridge_escalation_flowchart.jpg',
    imageCaption: 'Acceptable range 2–8°C — escalate if outside range — pharmacy 01494 425355',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Temperature',
        icon: '🌡',
        items: [
          { id: 'antefridge_temp_ok', name: 'Temperature within range (2–8°C)', critical: true, image: 'images/fridge_escalation_flowchart.jpg' },
          { id: 'antefridge_log_signed', name: 'Temperature logged and signed', critical: true },
        ]
      }
    ]
  },

  fridge_postnatal_drug: {
    name: 'Postnatal Drug Fridge — Temperature Check',
    location: 'Postnatal Ward',
    image: 'images/fridge_escalation_flowchart.jpg',
    imageCaption: 'Acceptable range 2–8°C — escalate if outside range — pharmacy 01494 425355',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Temperature',
        icon: '🌡',
        items: [
          { id: 'postfridge_temp_ok', name: 'Temperature within range (2–8°C)', critical: true, image: 'images/fridge_escalation_flowchart.jpg' },
          { id: 'postfridge_log_signed', name: 'Temperature logged and signed', critical: true },
        ]
      }
    ]
  },

  fridge_staff: {
    name: 'Staff Fridge — Temperature Check',
    location: 'Staff Area',
    image: 'images/fridge_escalation_flowchart.jpg',
    imageCaption: 'Acceptable range 2–8°C',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Temperature',
        icon: '🌡',
        items: [
          { id: 'stafffridge_temp_ok', name: 'Temperature within range (2–8°C)', critical: true },
          { id: 'stafffridge_log_signed', name: 'Temperature logged and signed', critical: true },
        ]
      }
    ]
  },

  // ── AREA TEMPERATURE CHECKS — TWICE DAILY ────────────────
  temp_drug_prep_am: {
    name: 'Drug Preparation Area — Temperature (AM)',
    location: 'Drug Preparation Area',
    image: 'images/temp_chart.jpg',
    imageCaption: 'Morning temperature check — maximum 25°C. Escalate if exceeded.',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Morning Check',
        icon: '🌡',
        items: [
          { id: 'drugprep_am_temp_ok', name: 'Temperature at or below 25°C', desc: 'If above 25°C, escalate immediately and record', critical: true, image: 'images/temp_chart.jpg' },
          { id: 'drugprep_am_recorded', name: 'Temperature recorded and signed', critical: true },
        ]
      }
    ]
  },

  temp_drug_prep_pm: {
    name: 'Drug Preparation Area — Temperature (PM)',
    location: 'Drug Preparation Area',
    image: 'images/temp_chart.jpg',
    imageCaption: 'Evening temperature check — maximum 25°C. Escalate if exceeded.',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Evening Check',
        icon: '🌡',
        items: [
          { id: 'drugprep_pm_temp_ok', name: 'Temperature at or below 25°C', critical: true, image: 'images/temp_chart.jpg' },
          { id: 'drugprep_pm_recorded', name: 'Temperature recorded and signed', critical: true },
        ]
      }
    ]
  },

  temp_milk_kitchen_am: {
    name: 'Milk Kitchen Area — Temperature (AM)',
    location: 'Milk Kitchen',
    image: 'images/temp_chart.jpg',
    imageCaption: 'Morning temperature check — maximum 25°C',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Morning Check',
        icon: '🌡',
        items: [
          { id: 'milkkitch_am_temp_ok', name: 'Temperature at or below 25°C', critical: true },
          { id: 'milkkitch_am_recorded', name: 'Temperature recorded and signed', critical: true },
        ]
      }
    ]
  },

  temp_milk_kitchen_pm: {
    name: 'Milk Kitchen Area — Temperature (PM)',
    location: 'Milk Kitchen',
    image: 'images/temp_chart.jpg',
    imageCaption: 'Evening temperature check — maximum 25°C',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Evening Check',
        icon: '🌡',
        items: [
          { id: 'milkkitch_pm_temp_ok', name: 'Temperature at or below 25°C', critical: true },
          { id: 'milkkitch_pm_recorded', name: 'Temperature recorded and signed', critical: true },
        ]
      }
    ]
  },

  temp_antenatal_ward_am: {
    name: 'Antenatal Ward — Temperature (AM)',
    location: 'Antenatal Ward',
    image: 'images/temp_chart.jpg',
    imageCaption: 'Morning temperature check — maximum 25°C',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Morning Check',
        icon: '🌡',
        items: [
          { id: 'antewrd_am_temp_ok', name: 'Temperature at or below 25°C', critical: true },
          { id: 'antewrd_am_recorded', name: 'Temperature recorded and signed', critical: true },
        ]
      }
    ]
  },

  temp_antenatal_ward_pm: {
    name: 'Antenatal Ward — Temperature (PM)',
    location: 'Antenatal Ward',
    image: 'images/temp_chart.jpg',
    imageCaption: 'Evening temperature check — maximum 25°C',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Evening Check',
        icon: '🌡',
        items: [
          { id: 'antewrd_pm_temp_ok', name: 'Temperature at or below 25°C', critical: true },
          { id: 'antewrd_pm_recorded', name: 'Temperature recorded and signed', critical: true },
        ]
      }
    ]
  },

  temp_postnatal_ward_am: {
    name: 'Postnatal Ward — Temperature (AM)',
    location: 'Postnatal Ward',
    image: 'images/temp_chart.jpg',
    imageCaption: 'Morning temperature check — maximum 25°C',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Morning Check',
        icon: '🌡',
        items: [
          { id: 'postwrd_am_temp_ok', name: 'Temperature at or below 25°C', critical: true },
          { id: 'postwrd_am_recorded', name: 'Temperature recorded and signed', critical: true },
        ]
      }
    ]
  },

  temp_postnatal_ward_pm: {
    name: 'Postnatal Ward — Temperature (PM)',
    location: 'Postnatal Ward',
    image: 'images/temp_chart.jpg',
    imageCaption: 'Evening temperature check — maximum 25°C',
    frequency: 'daily',
    temperatureCheck: true,
    categories: [
      {
        name: 'Evening Check',
        icon: '🌡',
        items: [
          { id: 'postwrd_pm_temp_ok', name: 'Temperature at or below 25°C', critical: true },
          { id: 'postwrd_pm_recorded', name: 'Temperature recorded and signed', critical: true },
        ]
      }
    ]
  },

  // ── USS MACHINE WEEKLY CLEAN ──────────────────────────────
  clean_uss_1: {
    name: 'USS Machine 1 — Weekly Clean',
    location: 'Rothschild Ward',
    image: 'images/uss_machine.jpg',
    imageCaption: 'Weekly clean of USS machine with approved disinfectant',
    frequency: 'weekly',
    categories: [
      {
        name: 'Weekly Clean',
        icon: '🧹',
        items: [
          { id: 'uss1_clean_probe', name: 'Probe cleaned with approved solution', desc: 'Use Tristel or approved probe cleaner', critical: true, image: 'images/tristel_bottle.jpg' },
          { id: 'uss1_clean_machine', name: 'Machine exterior cleaned', desc: 'Wipe down screen, keyboard and body', critical: true },
          { id: 'uss1_clean_signed', name: 'Cleaning record signed and dated', critical: true },
        ]
      }
    ]
  },

  clean_uss_2: {
    name: 'USS Machine 2 — Weekly Clean',
    location: 'Rothschild Ward',
    image: 'images/uss_machine.jpg',
    imageCaption: 'Weekly clean of USS machine with approved disinfectant',
    frequency: 'weekly',
    categories: [
      {
        name: 'Weekly Clean',
        icon: '🧹',
        items: [
          { id: 'uss2_clean_probe', name: 'Probe cleaned with approved solution', critical: true, image: 'images/tristel_bottle.jpg' },
          { id: 'uss2_clean_machine', name: 'Machine exterior cleaned', critical: true },
          { id: 'uss2_clean_signed', name: 'Cleaning record signed and dated', critical: true },
        ]
      }
    ]
  },

};
