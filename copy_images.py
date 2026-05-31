import shutil, os

dst = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'images')
os.makedirs(dst, exist_ok=True)

src = 'C:\\Users\\dasag\\.gemini\\antigravity\\brain\\3906c154-1545-4aec-9b2c-7bcbc197f054'

files = {
    'mustang_1780240046813.png': 'mustang.png',
    'tesla_model_x_1780240063640.png': 'tesla_model_x.png',
    'mercedes_gle_1780240079152.png': 'mercedes_gle.png',
    'audi_rs7_1780240102845.png': 'audi_rs7.png',
    'porsche_911_1780240118058.png': 'porsche_911.png',
    'tesla_model_s_1780240137298.png': 'tesla_model_s.png',
    'bmw_m5_1780240163412.png': 'bmw_m5.png',
    'ferrari_roma_1780240177653.png': 'ferrari_roma.png',
    'lamborghini_urus_1780240192828.png': 'lamborghini_urus.png',
    'bmw_x7_1780240215450.png': 'bmw_x7.png',
    'mercedes_amg_1780240232042.png': 'mercedes_amg.png',
}

for old, new in files.items():
    s = os.path.join(src, old)
    d = os.path.join(dst, new)
    if os.path.exists(s):
        shutil.copy2(s, d)
        print(f'  Copied {new}')
    else:
        print(f'  MISSING: {old}')

# tesla_model_x2 is same as tesla_model_x
tx = os.path.join(dst, 'tesla_model_x.png')
if os.path.exists(tx):
    shutil.copy2(tx, os.path.join(dst, 'tesla_model_x2.png'))
    print('  Copied tesla_model_x2.png')

print('Done! All images are in the images/ folder.')
print('Now open index.html in your browser.')
