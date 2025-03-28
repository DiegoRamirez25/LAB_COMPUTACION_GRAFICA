#version 330 core
out vec4 FragColor;

in vec2 TexCoords;

uniform sampler2D material_diffuse;

void main()
{
    FragColor = texture(material_diffuse, TexCoords);
}
